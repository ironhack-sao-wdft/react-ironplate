import React, { useEffect } from 'react';

const Logout = (props) => {
  useEffect(() => {
    localStorage.removeItem("loggedInUser");
    console.log(props);
    props.handleLogout();
    props.history.push("/");
    // Força um reload na página para limpar a memória do roteador
    props.history.go();
  }, [props]);

    return (<div>Logging out...</div>);
}
 
export default Logout;