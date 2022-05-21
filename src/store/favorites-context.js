import React, { createContext, useState } from 'react';


import React from 'react';



const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

import React from 'react';

function FavoritesContextProvider(props) {
    const [userFavorites, SetUserFavorites] = useState([]);

    

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
    };

    return <FavoritesContext.Provider value = {context}> 
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;


export default FavoritesContextProvider;


