import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell,  } from "recharts";

const data = [
  { name: "Group A", value: 400 , fill:"#58D0E0" },
  { name: "Group B", value: 300 , fill:"#5AC782" },
  { name: "Group C", value: 200 , fill:"#F3E137" },
  { name: "Group D", value: 100 , fill:"#FF9340" }
];

export default function Graph1() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        dataKey="value"
      >
      </Pie>
    </PieChart>
  );
}
