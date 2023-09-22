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
    const data = {
        labels: ['MonDay', 'TuesDay', 'WednesDay', 'ThursDay', 'FriDay',],
        datasets: [
            {
                label: 'Weekly',
                data: [3, 3, 9, 6, 1],
                backgroundColor: 'aqua',
                borderColor: 'black',
                pointBorderColor: 'aqua',
                fill: true,
                tension: 0
            }
        ]
    }

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y: {
                // min: 3,
                // max: 6
            }
        }
    }

    const [dataGET, setDataGet] = useState(false);
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/candles', config.configHeader);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [dataGET]);

    return (
        // <>
        //     <p className="text-gray-700 text-3xl mb-16 font-bold">History</p>

        //     <div className="justify-center flex flex-col items-center bg-white h-96 shadow-sm mb-10">
        //         <div className='"text-gray-700 text-2xl font-bold mt-4'>Data Transaction Of The Week </div>
        //         <div className='w-full max-w-2xl mt-4 mb-5'>
        //             <Line
        //                 data={data}
        //                 options={options}
        //             />
        //         </div>
        //         <div></div>
        //     </div>

        //     <div className="justify-center flex flex-col items-center bg-white h-96 shadow-sm">
        //         <div className='"text-gray-700 text-2xl font-bold mt-4'>Data Transaction Of The Week </div>
        //         <div className='w-full max-w-2xl mt-4'>
        //             <Line
        //                 data={data}
        //                 options={options}
        //             />
        //         </div>
        //     </div>
        // </>
        <div>
            <p className="text-gray-700 text-3xl font-bold">History</p>
            <div className="card w-full bg-base-100 shadow-xl mt-5">
                <h2 className="card-title text-gray-700 text-2xl font-bold ml-10 mt-5">Data Transaction Of The Week</h2>

                <div className="card-body flex px-36 justify-center items-center">
                    <Line
                        data={data}
                        options={options}
                    />
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
