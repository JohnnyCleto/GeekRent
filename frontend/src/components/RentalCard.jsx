function RentalCard({

rental

}){

return(

<div

className='item-card'

>

<h2>

{rental.itemName}

</h2>

<p>

{rental.status}

</p>

<p>

{rental.startDate}

</p>

<p>

{rental.endDate}

</p>

</div>

)

}

export default RentalCard;