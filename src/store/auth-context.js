import React, {useState, useEffect} from "react";

// 'AuthContext'is an object that contain components
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => {},
    onLogout: (email,passord) => {}
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn')
    
        if (storedUserLoggedInInfo === '1'){
          setIsLoggedIn(true);
        }
      }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
      };


    return <AuthContext.Provider
        value={{
            isLoggedIn:isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }}
        >{props.children}
        </AuthContext.Provider>;
}

export default AuthContext;