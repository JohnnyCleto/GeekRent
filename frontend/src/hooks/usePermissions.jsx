import { decodeToken } from '../../utils/decodeToken';

function usePermissions() {

  const user = decodeToken();

  return {

    user,

    isAdmin: user?.role === 'ADMIN',

    isClient: user?.role === 'CLIENT'

  };

}

export default usePermissions;