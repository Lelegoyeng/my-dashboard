import { useEffect, useState } from 'react';
const axios = require('axios');
const config = require('../config/index')

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [equity, setEquity] = useState(0);
  const [profitDay, setProfitDay] = useState(0);
  const [position, setPosition] = useState({});
  const [dataGET, setDataGet] = useState(false)

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000', config.configHeader);
      setBalance(response?.data?.result?.Account?.balance);
      setEquity(response?.data?.result?.Account?.equity);
      setProfitDay(response?.data?.result?.ProfitDay);
      setPosition(response?.data?.result?.Position);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [dataGET]);


  const ClosePositionByID = async (data) => {
    try {
      const requestBody = {
        position_id: data
      };
      const closePosition = await axios.post('http://localhost:4000/closeposition', requestBody, config.configHeader);
      setDataGet(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>
      <div className="grid lg:grid-cols-3 gap-5 mb-12">
        <div className="rounded bg-white h-40 shadow-sm">
          <div className="px-6 py-4 font-bold text-xl text-center items-center mt-6 text-gray-500">
            Balance
            <div>${balance}</div>
          </div>
        </div>
        <div className="rounded bg-white h-40 shadow-sm">
          <div className="px-6 py-4 font-bold text-xl text-center items-center mt-6 text-gray-500">
            Equity
            <div>${equity}</div>
          </div>
        </div>
        <div className="rounded bg-white h-40 shadow-sm">
          <div className="px-6 py-4 font-bold text-xl text-center items-center mt-6 text-gray-500">
            Profit / Day
            <div>${profitDay.toFixed(2)}</div>
          </div>
        </div>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm mb-10">
        <div className="flex flex-col overflow-x-auto">
          <div className='text-lg text-center font-semibold mt-3 text-gray-600'>Open Position Table</div>
          <div className="overflow-x-auto mt-11">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Symbol</th>
                  <th>Type</th>
                  <th>Time</th>
                  <th>stopLoss</th>
                  <th>takeProfit</th>
                  <th>Profit</th>
                  <th>currentPrice</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(position) && position?.map((value, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value?.id}</td>
                    <td>{value?.symbol}</td>
                    <td>{value?.type}</td>
                    <td>{value?.time}</td>
                    <td>{value?.stopLoss}</td>
                    <td>{value?.takeProfit}</td>
                    <td>{value?.profit}</td>
                    <td>{value?.currentPrice}</td>
                    <td> <div className='w-full bg-red-600 rounded-md justify-center items-center flex'>
                      <button
                        className='text-white font-bold'
                      // onClick={() => ClosePositionByID(value?.id)}
                      >Close Position
                      </button>
                    </div></td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
