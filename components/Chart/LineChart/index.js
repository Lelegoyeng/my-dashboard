import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
);

const LineChart = (props) => {
    const { title, labels, data, profit } = props;
    const dataChartWeekly = {
        labels: labels,
        datasets: [
            {
                label: title,
                data: data,
                backgroundColor: 'yellow',
                borderColor: 'indigo',
                borderWidth: 1,
                pointBorderColor: 'red',
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
        <div className='card-body flex px-36 justify-center items-center'>
            <Line
                data={dataChartWeekly}
                options={optionsChartWeekly}
            />
            <div className='text-gray-700 text-md font-bold mb-5 mt-5'>Transaction Profit: ${profit}</div>
        </div>
    )
}

export default LineChart;
