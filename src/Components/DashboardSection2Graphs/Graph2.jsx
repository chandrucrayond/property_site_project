import { Typography } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dumData = [
  { name: "Vacant", value: 50, fill: "#58D0E0",color: "#58D0E0",  },
  { name: "Occupied", value: 25, fill: "#5AC782",color: "#5AC782",},
  { name: "Reserved", value: 35, fill: "#F3E137",color: "#F3E137",},
  { name: "Listed", value: 45, fill: "#FF9340",color:"#FF9340", },
];

const data = [
  {
    name: "Jan",
    Vacant: 20,
    Occupied: 12,
    Reserved: 20,
    Listed: 12,
    amt: 100,
  },
  {
    name: "Feb",
    Vacant: 10,
    Occupied: 5,
    Reserved: 5,
    Listed: 12,
    amt: 22.10,
  },
  {
    name: "Mar",
    Vacant: 8,
    Occupied: 4,
    Reserved: 4,
    Listed: 10,
    amt: 22.90,
  },
  {
    name: "Apr",
    Vacant: 10,
    Occupied: 7,
    Reserved: 7,
    Listed: 20,
    amt: 20,
  },
  {
    name: "May",
    Vacant: 3,
    Occupied: 5,
    Reserved: 10,
    Listed: 6,
    amt: 21.81,
  },
  {
    name: "Jun",
    Vacant: 15,
    Occupied: 6,
    Reserved: 10,
    Listed: 12,
    amt: 1,
  },
];

export default function Graph2() {
  return (
    <ResponsiveContainer width={"100%"} height={"85%"} >
      <BarChart data={data} style={{position: 'relative', right: '20px'}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"  style={{ fontFamily: 'Nunito Sans', fontSize: '12px', fill: '#4E5A6B', }}/>
        <YAxis tickFormatter={(tick) => `${tick}%`} style={{ fontFamily: 'Nunito Sans', fontSize: '12px', fill: '#4E5A6B',}}/>
        <Tooltip />
        <Legend
          width={"100%"}
          height={"auto"}
          // align="end"
          // verticalAlign="bottom"
          // layout="horizontal"
          wrapperStyle={{ 
             paddingTop: '20px',
             display: "flex",
             alignItems: "center",
             justifyContent: "end",
            //  position: 'relative', 
            //  left: '1%'
          }}
          payload={dumData}
          formatter={(value) => { 
            const item = dumData.find((d) => d.value === value);
            const val=<Typography variant="h4" color="#98A0AC">{item.name}</Typography>
            if (item) {
              return (  
                <React.Fragment>
                  {val}
                </React.Fragment>
              );
            }
            return value;
          }}
        />
        <Bar dataKey="Vacant" stackId="a" fill="#58D0E0" />
        <Bar dataKey="Occupied" stackId="a" fill="#FF9340" />
        <Bar dataKey="Reserved" stackId="a" fill="#5AC782" />
        <Bar dataKey="Listed" stackId="a" fill="#F3E137" />
      </BarChart>
    </ResponsiveContainer>
  );
}
