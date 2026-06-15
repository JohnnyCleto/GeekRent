function Rentals(){

const rentals=[

{

id:1,

item:"Figure Goku",

status:"Ativa"

},

{

id:2,

item:"Cosplay Naruto",

status:"Devolvido"

}

];

return(

<div>

<h1>

Locações

</h1>

{

rentals.map(

r=>(

<div

key={r.id}

className="dashboard-card"

>

<h2>

{r.item}

</h2>

<p>

{r.status}

</p>

</div>

)

)

}

</div>

);

}

export default Rentals;