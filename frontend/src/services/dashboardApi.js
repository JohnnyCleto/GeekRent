import { authApi }
from './api';

export const getDashboard =
()=>{

    return authApi.get(
        '/dashboard'
    );

};