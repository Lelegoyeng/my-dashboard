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
        <div className="rounded-sm bg-white h-40 shadow-sm">
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
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <table className="min-w-full text-left text-sm font-light border overflow-x-auto m-5">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-2">#</th>
                    <th scope="col" className="px-6 py-2">ID</th>
                    <th scope="col" className="px-6 py-2">Symbol</th>
                    <th scope="col" className="px-6 py-2">Type</th>
                    <th scope="col" className="px-6 py-2">Time</th>
                    <th scope="col" className="px-6 py-2">stopLoss</th>
                    <th scope="col" className="px-6 py-2">takeProfit</th>
                    <th scope="col" className="px-6 py-2">Profit</th>
                    <th scope="col" className="px-6 py-2">currentPrice</th>
                    <th scope="col" className="px-6 py-2">Action</th>

                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(position) && position?.map((value, index) => (
                    <tr
                      key={index}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                    >
                      <td className="whitespace-nowrap px-6 py-2 font-medium">{index + 1}</td>
                      <td className="whitespace-nowrap px-6 py-2">{value?.id}</td>
                      <td className="whitespace-nowrap px-6 py-2">{value?.symbol}</td>
                      <td className="whitespace-nowrap px-6 py-2">{value?.type}</td>
                      <td className="whitespace-nowrap px-6 py-2">{value?.time}</td>
                      <td className="whitespace-nowrap px-6 py-2">{value?.stopLoss}</td>
                      <td className="whitespace-nowrap px-6 py-2">{value?.takeProfit}</td>
                      <td className="whitespace-nowrap px-6 py-2">{value?.profit}</td>
                      <td className="whitespace-nowrap px-6 py-2">{value?.currentPrice}</td>
                      <td className="whitespace-nowrap px-6 py-2">
                        <div className='w-full bg-red-600 rounded-md justify-center items-center flex'>
                          <button
                            className='text-white font-bold'
                            onClick={() => ClosePositionByID(value?.id)}
                          >Close Position</button>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
