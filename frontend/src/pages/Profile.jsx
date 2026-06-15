import {

useEffect,

useState

}

from 'react';

function Profile(){

const [user,

setUser]=

useState({});

useEffect(()=>{

const token=

localStorage.getItem(

'token'

);

if(token){

const payload=

JSON.parse(

atob(

token.split('.')[1]

)

);

setUser(

payload

);

}

},[]);

return(

<div>

<h1>

Meu Perfil

</h1>

<h2>

{user.name}

</h2>

<p>

{user.email}

</p>

<p>

{user.role}

</p>

</div>

)

}

export default Profile;