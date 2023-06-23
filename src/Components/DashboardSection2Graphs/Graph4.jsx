import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, RadialBar } from "recharts";
import { Typography } from "@mui/material";



export default function Graph4({dashData}) {
  return (
    <ResponsiveContainer width={"100%"} height={"90%"}>
      <PieChart>
        <Pie data={dashData.chart4} outerRadius={80}>
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
          payload={dashData.chart4}
          formatter={(value) => {
            const item = dashData.chart4.find((d) => d.value === value);
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
