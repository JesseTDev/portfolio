import React, {createContext, ReactNode, useState} from "react";

interface PortfolioContextProps {
    nav: boolean;
    setNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState = {
    nav: false,
    setNav: () => {}
}; 

export const PortfolioContext = createContext<PortfolioContextProps>(initialState);

const PortfolioProvider = ({ children }: { children: ReactNode }) => {
    
    const [nav, setNav] = useState<boolean>(initialState.nav);

    return (
 <PortfolioContext.Provider value={{nav, setNav}}>
    {children}
 </PortfolioContext.Provider>
    )
}; 

export default PortfolioProvider; 
