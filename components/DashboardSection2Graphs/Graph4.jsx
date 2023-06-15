import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "Group B", value: 200, fill: "#5AC782" },
    { name: "Group C", value: 300, fill: "#F3E137" },
];

export default function Graph4() {
    return (
      
            <ResponsiveContainer width={"100%"} height={'100%'}>
                <PieChart >
                    <Pie
                        data={data}
                    >
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
    );
}
