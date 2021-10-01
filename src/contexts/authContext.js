import React, { useState, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
const AuthContext = createContext({ token: "", user: {} });

function AuthContextComponent(props) {
  const [loggedInUser, setLoggedInUser] = useState({ token: "", user: {} });
  const history = useHistory();
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    const parsedStoredUser = JSON.parse(storedUser || '""');

    if (parsedStoredUser.user) {
      setLoggedInUser({ ...parsedStoredUser });
    }
  }, []);

  function logout() {
    // Zerando o localStorage e o Context para fazer o logout (saída de sessão) do usuário
    localStorage.removeItem("loggedInUser");
    setLoggedInUser({ user: {}, token: "" });
    history.push("/auth/login");
  }

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser , logout}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContextComponent, AuthContext };
