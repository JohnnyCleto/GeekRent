import FavoriteButton

from './FavoriteButton';

function ItemCard({

item

}){

return(

<div

className='item-card'

>

<img

src={item.image}

alt={item.title}

/>

<h3>

{item.title}

</h3>

<p>

{item.category}

</p>

<p>

R$ {item.price}

</p>

<FavoriteButton/>

</div>

)

}

export default ItemCard;