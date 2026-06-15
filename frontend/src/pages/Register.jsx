import {

useState

}

from 'react';

import {

useNavigate

}

from 'react-router-dom';

import { authApi } from "../services/api";

function Register(){

const navigate=

useNavigate();

const [data,

setData]=

useState({

name:'',

email:'',

password:'',

role:'CLIENT'

});

async function register(){

try{

await authApi.post(

'/auth/register',

data

);

navigate(

'/login'

);

}

catch{

alert(

'Erro ao cadastrar'

);

}

}

return(

<div>

<h1>

Cadastro

</h1>

<input

placeholder='Nome'

onChange={

e=>

setData({

...data,

name:e.target.value

})

}

/>

<input

placeholder='Email'

onChange={

e=>

setData({

...data,

email:e.target.value

})

}

/>

<input

type='password'

placeholder='Senha'

onChange={

e=>

setData({

...data,

password:e.target.value

})

}

/>

<button

onClick={register}

>

Cadastrar

</button>

</div>

)

}

export default Register;