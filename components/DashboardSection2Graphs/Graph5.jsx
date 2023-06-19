import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "Group B", value: 500, fill: "#5AC782" },
    { name: "Group C", value: 100, fill: "#F3E137" },
];

export default function Graph5() {
    return (
      
            <ResponsiveContainer width={"100%"} height={'100%'}>
                <PieChart >
                    <Pie
                        data={data}
                        outerRadius={80}
                    >
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
    );
}
