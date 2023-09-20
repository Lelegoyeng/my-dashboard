import { useEffect, useState } from 'react';
const axios = require('axios');
const config = require('../config/index');


export default function Strategy() {
    const [dataGET, setDataGet] = useState(false);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/candles', config.configHeader);
            setCandles(response?.data?.result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [dataGET]);

    return (
        <>
            <p className="text-gray-700 text-3xl mb-16 font-bold">Strategy</p>

            <div className="grid col-1 bg-white h-96 shadow-sm mb-10">

            </div>
        </>
    );
}
