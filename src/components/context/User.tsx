import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

export const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "Sudeep",
        email: "sudeep@example.com",
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* <div>User name is - {userContext?.user?.name}</div>
      <div>User email is -{userContext?.user?.email} </div> */}

      {/* on type assertion in UserContextProvider  */}
      <div>User name is - {userContext.user?.name}</div>
      <div>User email is -{userContext.user?.email} </div>
    </div>
  );
};
