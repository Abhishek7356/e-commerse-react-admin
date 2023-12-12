import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart({ title, data, dataKey, grid }) {



    return (
        <div className='chart'>
            <div className='chartContainer'>
                <h2>{title}</h2>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart data={data}>
                        {grid && <CartesianGrid strokeDasharray="5 5" />}
                        <XAxis dataKey="month" stroke='#5550bd' />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={dataKey} stroke='#5550bd' />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart
