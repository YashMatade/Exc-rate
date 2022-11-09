import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const BarChart = () => {
    const [basicData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'green',
                data: [65, 59, 80, 81, 56, 55, 40, 40]
            }
        ]
    });

    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#393f45'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };
        return {
            basicOptions
        }
    }

    const { basicOptions } = getLightTheme();

  return (
    <div>
       <div className="card " >
                <Chart type="bar" style={{height:"20rem"}} data={basicData} options={basicOptions} />
            </div>
    </div>
  )
}

export default BarChart;
