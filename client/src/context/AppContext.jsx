import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../service/CategoryService";
import { fetchItems } from "../service/ItemService";


export const AppContext = createContext(null);
export const AppContextProvider = ( props ) => {
  
    const [categories, setCategories] = useState([]);
    const [itemsData, setItemsData] = useState([]);
    const [auth, setAuth] = useState({
        token:null,
        role:null
    });

    useEffect(() =>{
        async function loadData() {
            const response = await fetchCategories();
            const itemResponse = await fetchItems();
            setCategories(response.data);
            setItemsData(itemResponse.data);
        }
        loadData();
    }, []);

    const setAuthData = (token, role) => {
        setAuth({
            token: token,
            role: role
        });
    };
    
    const contextValue = {
        categories,
        setCategories,
        auth,
        setAuthData,
        itemsData,
        setItemsData
    };

    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>
};