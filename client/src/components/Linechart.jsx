import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: " Developer",
    work: 4000,
    bug: 2100,
    amt: 2400,
    issue: 1500,
  },
  {
    name: "Leader",
    work: 3000,
    bug: 1100,
    amt: 2210,
    issue: 1200,
  },
  {
    name: " Programmer",
    work: 9000,
    bug: 1800,
    amt: 2290,
    issue: 3500,
  },
  {
    name: " Tester",
    work: 2780,
    bug: 1208,
    amt: 2000,
    issue: 1800,
  },
  {
    name: " Manager",
    work: 1890,
    bug: 300,
    amt: 2181,
    issue: 1450,
  },
  {
    name: " Specialist",
    work: 2390,
    bug: 600,
    amt: 2500,
    issue: 1620,
  },
  {
    name: " Analyst",
    work: 3490,
    bug: 800,
    amt: 2100,
    issue: 1300,
  },
];

export default function Line1() {
  
    return (
        
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="work" stroke="#f7de05" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="bug" stroke="#f72105" />
          <Line type="monotone" dataKey="issue" stroke="#663399" />
        </LineChart>
      </ResponsiveContainer>
    );
  }

