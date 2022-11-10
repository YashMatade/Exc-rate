import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import axios from 'axios';
import Cards from './Cards';
import { Card } from 'primereact/card';

const BarChart = () => {
    const [data, setData] = useState();
    const [alldata, setAllData] = useState();
    useEffect(() => {
        axios.get("http://localhost:8081/user/get").then((res) => {
            console.log(res.data.data);
            setAllData(res.data.data);
            let currencies = new Array();
            let prices = new Array();
            res.data.data.forEach(element => {
                currencies.push(element.currency);
                prices.push(element.price);
            });
            // console.log(currencies);
            // console.log(prices);
            setData(
                {
                    labels: currencies,
                    datasets: [
                        {
                            label: 'Currency Exchange Rates',
                            backgroundColor: 'green',
                            data: prices
                        }
                    ]
                }
            );
        })
    }, []);

    // console.log(data.USDEUR);
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
    if (alldata !== undefined) {
        return (
            <div>
                <div className="card " >
                    <Chart type="bar" style={{ height: "20rem" }} data={data} options={basicOptions} />
                </div>

                <div className="row">
                    <div className="col-lg-1"></div>
                    {alldata.map((data, i) => {
                        return (
                            <div className="col-lg-2 col-md-4 col-sm-1 mb-3" key={data.currency}>
                                <Card title={data.currency} subTitle={data.price}>
                                </Card>
                            </div>
                        );
                    })}
                </div>

            </div>
        )
    }
    else {
        return (
            <div>Waiting</div>
        )
    }

}

export default BarChart;
