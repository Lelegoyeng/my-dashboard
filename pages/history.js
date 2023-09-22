import { useEffect, useState } from 'react';
const axios = require('axios');
const config = require('../config/index');
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

export default function History() {
    const [history, setHistory] = useState(null);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/history', config.configHeader);
            setHistory(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    // -- Chart Weekly
    const dataChartWeekly = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Weekly',
                data: [
                    history?.result?.weekly?.Monday,
                    history?.result?.weekly?.Tuesday,
                    history?.result?.weekly?.Wednesday,
                    history?.result?.weekly?.Thursday,
                    history?.result?.weekly?.Friday,
                    history?.result?.weekly?.Saturday,
                    history?.result?.weekly?.Sunday,
                ],
                backgroundColor: 'aqua',
                borderColor: 'black',
                pointBorderColor: 'aqua',
                // fill: true,
                tension: 0
            }
        ]
    }
    const optionsChartWeekly = {
        plugins: {
            legend: true
        },
    }

    return (
        <div>
            <p className="text-gray-700 text-3xl font-bold">History</p>
            <div className="card w-full bg-base-100 shadow-xl mt-5">
                <h2 className="card-title text-gray-700 text-2xl font-bold ml-10 mt-5">Data Transaction Of The Week</h2>

                <div className="card-body flex px-36 justify-center items-center">
                    <Line
                        data={dataChartWeekly}
                        options={optionsChartWeekly}
                    />
                    <div className='text-gray-700 text-md font-bold mb-5 mt-5'>Weekly Profit: {history?.result?.totalWeekly.toFixed(2)}</div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
