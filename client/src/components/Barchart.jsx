import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'user A',
    work: 4000,
    bug: 2400,
    amt: 2400,
    issue:1500,
  },
  {
    name: 'user B',
    work: 3000,
    bug: 1398,
    amt: 2210,
    issue:1200,
  },
  {
    name: 'user C',
    work: 2000,
    bug: 9800,
    amt: 2290,
    issue:3500,
  },
  {
    name: 'user D',
    work: 2780,
    bug: 3908,
    amt: 2000,
    issue:1800,
  },
  {
    name: 'user E',
    work: 1890,
    bug: 4800,
    amt: 2181,
    issue:1450,
  },
  {
    name: 'user F',
    work: 2390,
    bug: 3800,
    amt: 2500,
    issue:1620,
  },
  {
    name: 'user G',
    work: 3490,
    bug: 4300,
    amt: 2100,
    issue:1300,
  },
];

export default function Bar1() {

    return (
      <ResponsiveContainer width="120%" height={400}>
        <BarChart
          width={100}
          height={30}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="work" fill="#8884d8" />
          <Bar dataKey="bug" fill="#82ca9d" />
          <Bar dataKey="issue" fill="#663399" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

