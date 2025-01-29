import { useState } from "react";
import { AuthUser } from "../../types/AuthUserType";

const Users = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handelLoggedin = () => {
    setUser({
      name: "pheak",
      email: "pheak@gmail.com",
    });
  };
  const handelLoggedout = () => {
    setUser(null);
  };
  const arr: unknown = [1, 2, 3, 4, 5];
  console.log((arr as number[]).length);

  return (
    <div className="p-4 flex flex-col items-center">
      <button 
        onClick={handelLoggedin} 
        className="mb-2 px-4 py-2 bg-green-500 text-white rounded"
      >
        Logged In
      </button>
      <button 
        onClick={handelLoggedout} 
        className="mb-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logged Out
      </button>
      <div className="text-xl font-semibold">
        User name is {user?.name}
      </div>
      <div className="text-xl font-semibold">
        User email is {user?.email}
      </div>
    </div>
  );
};

export default Users;
