import { generateYAxis } from '@/utils/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/components/atoms/fonts';
import { fetchRevenue } from '@/model/query';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {
    const revenue = await fetchRevenue();

    const chartHeight = 350;
    const { yAxisLabels, topLabel } = generateYAxis(revenue);

    if (!revenue || revenue.length === 0) {
        return <p className="mt-4 text-gray-400">No data available.</p>;
    }

    return (
        <div className="w-full md:col-span-4">
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Recent Revenue
            </h2>
            <div className="rounded-xl bg-gray-50 p-4">
                <div className="relative flex flex-col items-center rounded-md bg-white p-5">
                    <div
                        className="absolute left-0 flex flex-col justify-between h-full text-sm text-gray-400 px-2"
                        style={{ height: `${chartHeight}px` }}
                    >
                        {yAxisLabels.map((label) => (
                            <p key={label}>{label}</p>
                        ))}
                    </div>
                    <div className="flex w-full items-end gap-2 pt-4 pl-8 pr-1" style={{ height: `${chartHeight}px` }}>
                        {revenue.map((month) => (
                            <div key={month.month} className="flex flex-col items-center w-full">
                                <div
                                    className="w-full bg-blue-300 rounded-md"
                                    style={{
                                        height: `${(chartHeight / topLabel) * month.revenue}px`,
                                    }}
                                ></div>
                                <p className="mt-2 text-sm text-gray-400">{month.month}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center pt-6 pb-2">
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                    <h3 className="ml-2 text-sm text-gray-500">Last 12 months</h3>
                </div>
            </div>
        </div>
    );
}
