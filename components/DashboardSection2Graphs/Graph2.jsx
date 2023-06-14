import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan",
    Vacant: 4000,
    Occupied: 2400,
    Reserved: 4000,
    Listed: 2400,
    amt: 2400
  },
  {
    name: "Feb",
    Vacant: 2000,
    Occupied: 1000,
    Reserved: 1000,
    Listed: 2400,
    amt: 2210
  },
  {
    name: "Mar",
    Vacant: 1500,
    Occupied: 900,
    Reserved: 900,
    Listed: 2000,
    amt: 2290
  },
  {
    name: "Apr",
    Vacant: 2000,
    Occupied: 1400,
    Reserved: 1500,
    Listed: 4000,
    amt: 2000
  },
  {
    name: "May",
    Vacant: 500,
    Occupied: 1000,
    Reserved: 2000,
    Listed: 1300,
    amt: 2181
  },
  {
    name: "Jun",
    Vacant: 3000,
    Occupied: 1200,
    Reserved: 1900,
    Listed: 2400,
    amt: 100
  },
];

export default function App() {
  return (
    <BarChart
      width={300}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Vacant" stackId="a" fill="#58D0E0" />
      <Bar dataKey="Occupied" stackId="a" fill="#FF9340" />
      <Bar dataKey="Reserved" stackId="a" fill="#5AC782" />
      <Bar dataKey="Listed" stackId="a" fill="#F3E137" />
    </BarChart>
  );
}
