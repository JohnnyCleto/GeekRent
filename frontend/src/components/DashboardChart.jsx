import {

Bar

}

from 'react-chartjs-2';

import {

Chart,

CategoryScale,

LinearScale,

BarElement,

Title,

Tooltip,

Legend

}

from 'chart.js';

Chart.register(

CategoryScale,

LinearScale,

BarElement,

Title,

Tooltip,

Legend

);

function DashboardChart({

items,

rentals

}){

const data={

labels:[

'Itens',

'Locações'

],

datasets:[

{

label:'GeekRent',

data:[

items,

rentals

]

}

]

};

return(

<Bar

data={data}

/>

)

}

export default DashboardChart;