import React from "react";

// 'AuthContext'is an object that contain components
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}
});


export default AuthContext;