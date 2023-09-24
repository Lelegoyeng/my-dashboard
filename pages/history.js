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
            <div className="card w-full bg-base-100 shadow-xl mt-5 mb-5">
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
            <div className="card w-full bg-base-100 shadow-xl mb-5">
                <h2 className="card-title text-gray-700 text-2xl font-bold ml-10 mt-5">Transaction Of The Month</h2>
                <LineChart
                    title={`This Month`}
                    labels={['Week 1', 'Week 2', 'Week 3', 'Week 4']}
                    data={[
                        history?.result?.oneMonth?.week1,
                        history?.result?.oneMonth?.week2,
                        history?.result?.oneMonth?.week3,
                        history?.result?.oneMonth?.week4,
                    ]}
                    profit={history?.result?.totalOneMonth.toFixed(2)}
                />
            </div>
            <div className="card w-full bg-base-100 shadow-xl mb-5">
                <h2 className="card-title text-gray-700 text-2xl font-bold ml-10 mt-5">Transaction Of The Year</h2>
                <LineChart
                    title={`This Year`}
                    labels={[
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ]}
                    data={[
                        history?.result?.Year?.january,
                        history?.result?.Year?.february,
                        history?.result?.Year?.march,
                        history?.result?.Year?.april,
                        history?.result?.Year?.may,
                        history?.result?.Year?.june,
                        history?.result?.Year?.july,
                        history?.result?.Year?.august,
                        history?.result?.Year?.september,
                        history?.result?.Year?.october,
                        history?.result?.Year?.november,
                        history?.result?.Year?.december,
                    ]}
                    profit={history?.result?.totalYear.toFixed(2)}
                />
            </div>
        </div>
    );
}
