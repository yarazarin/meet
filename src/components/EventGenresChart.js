import React, { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

    const getData = () => {
      const genreData = genres.map((genre, index) => {
        const count = events.filter(event => event.summary.includes(genre)).length;
        return { name: genre, value: count };
      });
      return genreData;
    };

    setData(getData());
  }, [events]);

  const colors = ['#DD0000', '#00DD00', '#0000DD', '#DDDD00', '#DD00DD'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.07;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            fill="#8884d8"
            labelLine={false}
            outerRadius={120}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EventGenresChart;
