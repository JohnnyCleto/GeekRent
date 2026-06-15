import {

useState

}

from 'react';

function RentalCart(){

const [items,

setItems]=

useState([]);

return(

<div

className='cart'

>

<h2>

🛒 Carrinho

</h2>

<p>

{

items.length

}

itens

</p>

</div>

)

}

export default RentalCart;