import { Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";


export default function Graph1({ dashData }) {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <PieChart>
        <Pie
          data={dashData.chart1}
          outerRadius={80}
          style={{
            textAlign: 'center',
            verticalAlign: 'bottom',
            // Add any other valid CSS properties here
          }}
        ></Pie>
        <Legend
          width={"100%"}
          height={"auto"}
          wrapperStyle={{
            marginBottom: '12%',
          }}
          payload={dashData.chart1}
          formatter={(value) => {
            const item = dashData.chart1.find((d) => d.value === value);
            const num = <Typography variant="h3" color="#4E5A6B">{item.value}</Typography>
            const val = <Typography variant="h4" color="#98A0AC">{item.name}</Typography>
            if (item) {
              return (
                <React.Fragment>
                  {num}
                  {val}
                </React.Fragment>
              );
            }
            return value;
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
