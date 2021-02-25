import React, { useEffect, useState } from 'react'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export function StockChart({ data }) {

    const [options, setOptions] = useState()

    useEffect(() => {
        const chartOptions = {
            rangeSelector: {
                selected: 4
            },
            yAxis: {
                labels: {
                    formatter: function () {
                        return (this.value > 0 ? ' + ' : '') + this.value + '%';
                    }
                }
            },
            title: {
                text: 'Apple Stock Data'
            },

            series: [{
                name: 'Opening Rate',
                data: data?.map((point) => [new Date(point.Date).getTime(), point.Open])
            },

            {
                name: 'Closing Rate',
                data: data?.map((point) => [new Date(point.Date).getTime(), point.Close])
            }],
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                valueDecimals: 2,
                split: true
            },
            xAxis: {
                crosshair: true,
                type: 'datetime',
            },

            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }],
            plotOptions: {
                series: {
                    compare: 'percent',
                    showInNavigator: true
                }
            },
        }
        setOptions(chartOptions)
    }, [data])


    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )

}
