import {

createContext,

useState

}

from 'react';

export const CartContext=

createContext();

export function CartProvider(

{children}

){

const [cart,

setCart]=

useState([]);

function add(item){

setCart(

[

...cart,

item

]

);

}

return(

<CartContext.Provider

value={{

cart,

add

}}

>

{children}

</CartContext.Provider>

);

}