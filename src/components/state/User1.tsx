// useState Type assertion

import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
export const User1 = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Sudeep",
      email: "sudeepagrawal1999@gmail.com",
    });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>
        {/* here we can able to use name and email without the optional chaining operator (?) */}
        User name is - {user.name} {user.email}{" "}
      </div>
    </div>
  );
};
