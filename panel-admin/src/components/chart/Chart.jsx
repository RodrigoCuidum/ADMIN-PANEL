import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Total: 2100 },
  { name: "Feb", Total: 1500 },
  { name: "Mar", Total: 1800 },
  { name: "Apr", Total: 1600 },
  { name: "May", Total: 2600 },
  { name: "Jun", Total: 2100 },
  { name: "Jul", Total: 2300 },
  { name: "Ago", Total: 2700 },
  { name: "Sep", Total: 2200 },
  { name: "Oct", Total: 2900 },
  { name: "Nov", Total: 3300 },
  { name: "Dec", Total: 2900 },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Last Year</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="rgba(208, 23, 179, 0.8)" stopOpacity={0.9} />
              <stop offset="95%" stopColor="rgba(94, 236, 222, 0.8)" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" stroke="gray" />
          <YAxis stroke="gray" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="rgba(208, 23, 179, 0.8)"
            fill="url(#colorTotal)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
