import { authApi }
from './api';

export const getProfile =
()=>{

return authApi.get(
'/auth/me'
);

};