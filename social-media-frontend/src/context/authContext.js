import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [CurrentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Riya",
      profilePic:"https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(CurrentUser));
  }, [CurrentUser]);

  return (
    <AuthContext.Provider value={{ CurrentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};