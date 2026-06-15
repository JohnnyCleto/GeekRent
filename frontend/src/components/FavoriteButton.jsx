import {

useState

}

from 'react';

function FavoriteButton(){

const [favorite,

setFavorite]=

useState(false);

return(

<button

onClick={()=>

setFavorite(

!favorite

)

}

>

{

favorite

?

'❤️'

:

'🤍'

}

</button>

)

}

export default FavoriteButton;