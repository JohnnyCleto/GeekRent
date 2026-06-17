import {
useEffect,
useState
}
from 'react';

import {
getDashboard
}
from '../services/dashboardApi';

import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer

}
from 'recharts';

function Dashboard(){

const [data,
setData]=
useState(null);

useEffect(()=>{

load();

},[]);

async function load(){

const response =
await getDashboard();

setData(
response.data
);

}

if(!data){

return(
<h2>
Carregando...
</h2>
);

}

return(

<div className="dashboard-page">

<h1>

📊 Dashboard GeekRent

</h1>

<div className="stats-grid">

<div className="stat-card">

<h3>

💰 Receita

</h3>

<p>

R$
{data.stats.totalRevenue}

</p>

</div>

<div className="stat-card">

<h3>

📦 Itens

</h3>

<p>

{data.stats.totalItems}

</p>

</div>

<div className="stat-card">

<h3>

🔄 Locações

</h3>

<p>

{data.stats.totalRentals}

</p>

</div>

</div>

<h2>

📈 Receita Mensal

</h2>

<div className="chart-box">

<ResponsiveContainer
width="100%"
height={300}
>

<BarChart
data={data.revenue}
>

<XAxis
dataKey="month"
/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="revenue"
/>

</BarChart>

</ResponsiveContainer>

</div>

<h2>

🔥 Itens Mais Alugados

</h2>

<div className="top-items">

{

data.topItems.map(
(item,index)=>(

<div
key={index}
className="top-card"
>

<h3>

{item.title}

</h3>

<p>

{item.rentals}
 locações

</p>

</div>

))

}

</div>

</div>

);

}

export default Dashboard;