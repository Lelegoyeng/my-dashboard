import { useEffect, useState } from 'react';
const axios = require('axios');
const config = require('../config/index');
import LineChart from '../components/Chart/LineChart';

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

    return (
        <div>
            <p className="text-gray-700 text-3xl font-bold">History</p>
            <div className="card w-full bg-base-100 shadow-xl mt-5">
                <h2 className="card-title text-gray-700 text-2xl font-bold ml-10 mt-5">Transaction Of The Week</h2>
                <LineChart
                    title={`Weekly Transaction`}
                    labels={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
                    data={[
                        history?.result?.weekly?.Monday,
                        history?.result?.weekly?.Tuesday,
                        history?.result?.weekly?.Wednesday,
                        history?.result?.weekly?.Thursday,
                        history?.result?.weekly?.Friday,
                        history?.result?.weekly?.Saturday,
                        history?.result?.weekly?.Sunday,
                    ]}
                    profit={history?.result?.totalWeekly.toFixed(2)}
                />
            </div>
            <div className="card w-full bg-base-100 shadow-xl mt-5">
                <h2 className="card-title text-gray-700 text-2xl font-bold ml-10 mt-5">Transaction Of The Month</h2>
                <div className="card-body flex px-36 justify-center items-center">
                    {/* <Line
                        data={dataChartWeekly}
                        options={optionsChartWeekly}
                    /> */}
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
