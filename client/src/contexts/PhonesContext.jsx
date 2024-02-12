import { createContext, useState, useEffect } from "react";

export const PhonesContext = createContext();

function PhonesContextProvider({children}) {

    const [phones, setPhones] = useState([]);

    const fetchPhones = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/phones`);
            if (response.ok) {
                const phonesData = await response.json();
                setPhones(phonesData);
            }
        } catch (error){
            console.log(error);
        }
    };


    return (
        <PhonesContext.Provider value={{fetchPhones, phones}}> {children} </PhonesContext.Provider>
    )

}

export default PhonesContextProvider;