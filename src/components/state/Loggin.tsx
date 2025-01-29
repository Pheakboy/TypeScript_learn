import { useState } from "react"

const Loggin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handelLoggin = () => {
        setIsLoggedIn(true);
    }
    const handelLoggout = () => {
        setIsLoggedIn(false);
    }
  return (
    <div className="flex flex-col items-center justify-center p-4">
        <button 
            onClick={handelLoggin} 
            className="mb-2 px-4 py-2 bg-green-500 text-white rounded"
        >
            Loggin
        </button>
        <button 
            onClick={handelLoggout} 
            className="mb-2 px-4 py-2 bg-red-500 text-white rounded"
        >
            Loggout
        </button>
        <div className="text-xl font-semibold">
            User is {isLoggedIn ? 'logged in' : 'logged out'}
        </div>
    </div>
  )
}

export default Loggin