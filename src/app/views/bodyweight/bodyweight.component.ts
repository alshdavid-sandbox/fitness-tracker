import { Component, ViewChild } from '@angular/core';
import { toolbarItems, api, IBodyWeight } from '../../lib';
import { constants } from '../../app.constants'
import moment from 'moment'
import Chart from 'chart.js'

@Component({
    selector: 'app-view-bodyweight',
    templateUrl: './bodyweight.component.html',
    styleUrls: ['./bodyweight.component.scss']
})
export class BodyweightViewComponent {
    @ViewChild('chartBodyweight')
    private chartBodyweight
    private chart

    public moment = moment
    public toolbarItems = toolbarItems
    public bodyweights:IBodyWeight[] = []

    async ngOnInit() {
        this.bodyweights = await api.getBodyweights()
        this.makeChart()
    }

    log(x) {
        console.log(x)
    }

    async makeChart(days:any = 14) {
        days = parseInt(days)
        
        if (this.chart) {
            this.chart.destroy()
        }

        const date = moment().subtract(days, 'days').format(constants.timeFormat)
        const selection = await api.getBodyweights(date)

        let labels = []
        let data = []

        for (let i = 0; i < days; i++) {
            labels.push(moment().subtract(days - i, 'days').format('YYYY-MM-DD'))
        }

        for (let { date, weight } of selection) {
            data.push({ 
                x: moment(date).format('YYYY-MM-DD'), 
                y: parseFloat(weight) 
            })
        }

        this.chartBodyweight.nativeElement.height = window.innerHeight - 400
        this.chartBodyweight.nativeElement.width = window.innerWidth
        this.chart = new Chart(this.chartBodyweight.nativeElement, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Reps',
                        data,
                        backgroundColor: "rgba(33, 150, 243,0.1)",
                        borderColor: 'rgb(33, 150, 243)',
                    }
                ]},
            options: {
                
                legend: { display: false },
                scales: {
                    yAxes: [
                        {
                            id: 'reps',
                            time: {
                                
                            },
                            ticks: {
                                fontColor: "rgb(33, 150, 243)",
                                stacked: true,
                                max: Math.max(...data.map(x=>x.y)) + 2,
                                min: Math.min(...data.map(x=>x.y)) - 2
                            },
                            gridLines: {
                                color: "rgba(0, 0, 0, 0.05)",
                            }
                        }
                    ],
                    xAxes: [{
                        type: 'time',
                        ticks: {
                            showXLabels: 1,
                            stepSize: 1
                        }
                    }]
                }
            }
        });

        
    }
}
