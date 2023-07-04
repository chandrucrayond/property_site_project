import { Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const data = [
    {
        name: "Rubix",
        uv: 40,
    },
    {
        name: "Prop 03",
        uv: 30,
    },
    {
        name: "Prop 02",
        uv: 101,
    },
    {
        name: "Prop 06",
        uv: 90,
    },
    {
        name: "Prop 01",
        uv: 75,
    },
    {
        name: "Prop 41",
        uv: 23,
    },
    {
        name: "Prop 43",
        uv: 34,
    }
];

export default function Graph3() {
    return (
        <ResponsiveContainer width={"100%"} height={'75%'}>
            <BarChart
                data={data}
                layout='vertical'
                style={{ position: 'relative', right: '10px', }}
            >
                <XAxis type="number" style={{ fontFamily: 'Nunito Sans', fontSize: '12px', fill: '#4E5A6B' }}>
                    {/* <Label
                        value="No of vacants"
                        offset={-4}
                        position="insideBottom"
                        dy={20}
                    /> */}
                </XAxis>

                <YAxis type="category" dataKey="name" style={{ fontFamily: 'Nunito Sans', fontSize: '12px', fill: '#4E5A6B' }}>
                    {/* <Label value="No of vacants" angle={-90} /> */}
                </YAxis>
                <Tooltip />

                <Bar dataKey="uv" fill="#58D0E0" />
            </BarChart>
        </ResponsiveContainer>

    );
}
