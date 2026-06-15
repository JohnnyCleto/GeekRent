import {

useState,

useContext

}

from 'react';

import {

useNavigate

}

from 'react-router-dom';

import { authApi } from "../services/api";

import {

AuthContext

}

from '../context/AuthContext';

function Login(){

const navigate=

useNavigate();

const {login}=

useContext(

AuthContext

);

const [email,

setEmail]=

useState('');

const [password,

setPassword]=

useState('');

async function handleLogin(){

try{

const response=

await authApi.post(

'/auth/login',

{

email,

password

}

);

login(

response.data.token

);

navigate(

'/dashboard'

);

}

catch{

alert(

'Credenciais inválidas'

);

}

}

return(

<div className='login-container'>

<h1>

Entrar

</h1>

<input

placeholder='Email'

value={email}

onChange={

e=>setEmail(

e.target.value

)

}

/>

<input

type='password'

placeholder='Senha'

value={password}

onChange={

e=>setPassword(

e.target.value

)

}

/>

<button

onClick={handleLogin}

>

Entrar

</button>

</div>

)

}

export default Login;