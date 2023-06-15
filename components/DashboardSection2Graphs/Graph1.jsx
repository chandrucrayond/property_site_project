import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400, fill: "#58D0E0" },
  { name: "Group B", value: 300, fill: "#5AC782" },
  { name: "Group C", value: 200, fill: "#F3E137" },
  { name: "Group D", value: 100, fill: "#FF9340" }
];

export default function Graph1() {
  return (
    <ResponsiveContainer width={"100%"} height={'100%'}>
      <PieChart>
        <Pie
          data={data}
        >
        </Pie>
      </PieChart>
    </ResponsiveContainer>

  );
}