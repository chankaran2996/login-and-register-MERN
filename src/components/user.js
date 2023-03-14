import React from "react";
// importing link form react-router-dom
import {Link} from "react-router-dom"

// creating user componet 
const User = () => {
    return(
        <div className="container mx- auto">
            <div className="flex h-screen">
                <div className="title flex flex-col items-center">
                    <h4 className="text-5xl font-bold">hello</h4>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                        Explore More by connecting with us.
                    </span>
                    <form className="py-1">
                        <div className="profile flex justify-center py-5">
                            <img src="" alt="profile-icon"></img>
                        </div>
                        <div className="textbox flex flex-col items-center gap-6">
                            <input type="text" placeholder="username"/>
                            <button type="submit">Lets Go</button>
                        </div>
                        <div className="text-center py-4">
                            <span className="text-gray-500">Not a member?<Link className="text-red-500" to="/register">Register now</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;