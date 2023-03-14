import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { auth } from "../components/componentsChat/firebase/config";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  console.log(user);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        // navigate("/");
        return;
      }
      setIsLoading(false);
      
      // navigate("/login");
    });
    //clean function
    return () => {
      unsubscibed();
    };
  }, [navigate]);


  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin style={{ position: "fixed", inset: 0 }} /> : children}
    </AuthContext.Provider>
  );
}
