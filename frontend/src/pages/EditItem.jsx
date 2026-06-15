import {

useEffect,

useState

}

from 'react';

import {

useParams,

useNavigate

}

from 'react-router-dom';

import {itemApi} from '../services/api';

function EditItem(){

const {id}=

useParams();

const navigate=

useNavigate();

const [item,

setItem]=

useState({});

useEffect(()=>{

load();

},[]);

async function load(){

const response=

await itemApi.get(

`/items/${id}`

);

setItem(

response.data

);

}

async function save(){

await itemApi.put(

`/items/${id}`,

item

);

navigate(

'/items'

);

}

return(

<div>

<h1>

Editar Item

</h1>

<input

value={

item.title||''

}

onChange={

e=>

setItem({

...item,

title:e.target.value

})

}

/>

<button

onClick={save}

>

Atualizar

</button>

</div>

)

}

export default EditItem;