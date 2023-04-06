import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'user A', value: 400 },
  { name: 'user B', value: 320 },
  { name: 'user C', value: 240 },
  { name: 'user D', value: 290 },
  { name: 'user E', value: 210 },
  { name: 'user F', value: 270 },
  { name: 'user G', value: 380 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#33997f','#759933','#993388'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Pie1(){
  
    return (
      <ResponsiveContainer aspect={1}>
        <PieChart width={400} height={400}>
          <Pie 
         
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }

