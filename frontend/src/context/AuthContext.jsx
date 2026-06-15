import {

createContext,

useEffect,

useState

}

from 'react';

export const AuthContext=

createContext();

export function AuthProvider({

children

}){

const [user,

setUser]=

useState(null);

const [loading,

setLoading]=

useState(true);

useEffect(()=>{

const token=

localStorage.getItem(

'token'

);

if(token){

try{

const payload=

JSON.parse(

atob(

token.split('.')[1]

)

);

setUser(payload);

}

catch{

localStorage.removeItem(

'token'

);

}

}

setLoading(false);

},[]);

function login(token){

localStorage.setItem(

'token',

token

);

const payload=

JSON.parse(

atob(

token.split('.')[1]

)

);

setUser(payload);

}

function logout(){

localStorage.removeItem(

'token'

);

setUser(null);

}

return(

<AuthContext.Provider

value={{

user,

loading,

login,

logout

}}

>

{children}

</AuthContext.Provider>

)

}