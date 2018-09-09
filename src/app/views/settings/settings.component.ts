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

    async export() {
        let output = {
            settings: {},
            exercises: [],
            bodyweights: []
        }

        let bodyweights = await api.getBodyweights()
        let exercises = await api.getExercises()

        for (let exercise of exercises) {
            delete exercise.id
        }

        for (let bodyweight of bodyweights) {
            delete bodyweight.id
        }

        output.exercises = exercises
        output.bodyweights = bodyweights

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
            await api.removeAll()
            await api.addExercises(result.exercises)
            await api.addBodyweights(result.bodyweights)
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
