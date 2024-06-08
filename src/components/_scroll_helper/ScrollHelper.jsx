import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../redux/context/GlobalContext';
function ScrollHelper() {

    const {pathname, hash} = useLocation();
    const {isRouterAnimiationComplete, setIsRouterAnimiationComplete} = useContext(GlobalContext);

    useEffect(()=>{
        if(hash === "" && isRouterAnimiationComplete) 
            setTimeout(
        () => 
         
            window.scrollTo(0, 0)
       
        , 500
   );  // scroll to top when path changes, but no hash value(means no specific section is targeted)
    }, [pathname])

    return <></>;
}

export default ScrollHelper;