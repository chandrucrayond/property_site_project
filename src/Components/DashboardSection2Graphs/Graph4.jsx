import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, RadialBar } from "recharts";
import { Typography } from "@mui/material";

const data = [
  { name: "Residential", value: 200, fill: "#5AC782", color: "#5AC782" },
  { name: "Commercial", value: 300, fill: "#F3E137", color: "#F3E137" },
];

export default function Graph4() {
  return (
    <ResponsiveContainer width={"100%"} height={"90%"}>
      <PieChart>
        <Pie data={data} outerRadius={80}>
        <RadialBar
          stroke="#8884d8"
          fill="#8884d8"
          legendType="circle"
        />
        </Pie>
         <Legend
          width={"100%"}
          height={"auto"}
          align="center"
          verticalAlign="bottom"
          layout="horizontal"
          wrapperStyle={{
            marginBottom: "12%",
          }}
          payload={data}
          formatter={(value) => {
            const item = data.find((d) => d.value === value);
            const num = (
              <Typography variant="h3" color="#4E5A6B">
                {item.value}
              </Typography>
            );
            const val = (
              <Typography variant="h4" color="#98A0AC">
                {item.name}
              </Typography>
            );
            if (item) {
              return <React.Fragment>{val}</React.Fragment>;
            }
            return value;
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
