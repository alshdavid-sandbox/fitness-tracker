import { Component, ViewChild, ElementRef } from '@angular/core';
import { toolbarItems, api } from '../../lib';
import * as firebase from '~/platform/firebase'

@Component({
    selector: 'app-view-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsViewComponent {
    public toolbarItems = toolbarItems

    @ViewChild('fileinput')
    private fileInput: ElementRef

    async prepareExport() {
        const output = {
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
        return output
    }

    async exportToCould() {
        const output = await this.prepareExport()
        await firebase.set(output)
        alert('Exported')
    }

    async importFromCloud() {
        const result = await firebase.get()
        await api.removeAll()
        await api.addExercises(result.exercises)
        await api.addBodyweights(result.bodyweights)
        alert('Imported')
    }

    async export() {
        const output = await this.prepareExport()
        var textToSave = JSON.stringify(output, null, 4)
        var hiddenElement = document.createElement('a')
        hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave)
        hiddenElement.target = '_blank'
        hiddenElement.download = 'exercises_export.json'
        hiddenElement.click()
        hiddenElement = null
    }

    async import() {

        this.fileInput.nativeElement.onchange = async (inputEvent:any) => {
            try {
                const result:any = await this.getJSONFromFileReader(inputEvent.target.files[0])
                alert('Imported')
                await api.removeAll()
                await api.addExercises(result.exercises)
                await api.addBodyweights(result.bodyweights)
            } catch (error) {
                console.log(error)
            }
        }
        this.fileInput.nativeElement.click()
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
