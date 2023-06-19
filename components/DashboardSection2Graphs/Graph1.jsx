import { Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Vacant", value: 50, fill: "#58D0E0",color: "#58D0E0",  },
  { name: "Occupied", value: 25, fill: "#5AC782",color: "#5AC782",},
  { name: "Reserved", value: 35, fill: "#F3E137",color: "#F3E137",},
  { name: "Listed", value: 45, fill: "#FF9340",color:"#FF9340", },
];

export default function Graph1() {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <PieChart>
        <Pie data={data} outerRadius={80}></Pie>
        <Legend
          width={"100%"}
          height={"auto"}
          align="center"
          verticalAlign="bottom"
          layout="horizontal"
          wrapperStyle={{ 
            marginBottom: '12%',
          }}
          payload={data}
          formatter={(value) => { 
            const item = data.find((d) => d.value === value);
            const num=<Typography variant="h3" color="#4E5A6B">{item.value}</Typography>
            const val=<Typography variant="h4" color="#98A0AC">{item.name}</Typography>
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
