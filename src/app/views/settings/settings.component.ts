import moment from 'moment'
import { Component } from '@angular/core';
import { toolbarItems, api } from '../../lib';

@Component({
    selector: 'app-view-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsViewComponent {
    public toolbarItems = toolbarItems

    export() {
        let output = {
            settings: {},
            exercises: []
        }
        let exercises = api.getExercises()
        exercises.sort((left, right) => moment(right.date).diff(moment(left.date)))
        
        for (let exercise of exercises) {
            delete exercise.id
            exercise.sets = exercise.sets.map(({ reps, weight }) => ({ reps, weight }));
            exercise.movement = exercise.movement.toLocaleLowerCase()
        }

        output.exercises = exercises
        var textToSave = JSON.stringify(output, null, 4)

        var hiddenElement = document.createElement('a');

        hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave)
        hiddenElement.target = '_blank'
        hiddenElement.download = 'exercises_export.json'
        hiddenElement.click()
        hiddenElement = null
    }

    async import() {
        try {
            alert('This will replace all of your records')
            let result:any = await this.getJSONFromFileSelector()
            let confirmed = confirm('Are you sure you want to do this?')
            if (!confirmed) {
                alert('Canceled')
                return
            }
            alert('Imported')
            api.removeAll()
            api.addExercises(result.exercises)
        } catch (error) {
            console.error(error)
        }
    }

    getJSONFromFileSelector() {
        return new Promise((res, rej) => {
            let completed = false
            let input = document.createElement('input')
            input.type = 'file'
            input.accept = '.json'

            input.onchange = async (inputEvent:any) => {
                try {
                    res(await this.getJSONFromFileReader(inputEvent.target.files[0]))
                } catch (error) {
                    rej(error)
                }
            }

            input.click()

            document.addEventListener('click', (e) => {
                console.log('aborted')
            })
        })
    }

    getJSONFromFileReader(file) {
        return new Promise((res, rej) => {
            var reader = new FileReader()
            
            reader.onload = function(e: any) {
                if(e.target.readyState != 2) return
                if(e.target.error) {
                    rej('Error while reading file')
                    return
                }
                try {
                    res(JSON.parse(e.target.result))
                } catch (error) {
                    rej(error) 
                }
            };

            reader.readAsText(file)
        })
    }

}
