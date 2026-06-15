import {

useState

}

from 'react';

import {

useNavigate

}

from 'react-router-dom';

import {itemApi} from '../services/api';

function CreateItem(){

const navigate=

useNavigate();

const [item,

setItem]=

useState({

title:'',

category:'',

price:'',

description:''

});

async function save(){

try{

await itemApi.post(

'/items',

item

);

navigate('/items');

}

catch(error){

console.log(error);

}

}

return(

<div>

<h1>

Novo Item

</h1>

<input

placeholder='Título'

onChange={

e=>

setItem({

...item,

title:e.target.value

})

}

/>

<input

placeholder='Categoria'

onChange={

e=>

setItem({

...item,

category:e.target.value

})

}

/>

<input

placeholder='Preço'

onChange={

e=>

setItem({

...item,

price:e.target.value

})

}

/>

<textarea

placeholder='Descrição'

onChange={

e=>

setItem({

...item,

description:e.target.value

})

}

/>

<button

onClick={save}

>

Salvar

</button>

</div>

)

}

export default CreateItem;