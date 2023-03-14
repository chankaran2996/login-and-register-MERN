import autoprefixer from "autoprefixer";
import React from "react";

const User = () => {
    return(
        <div className="container mx- auto">
            <div className="flex justify-center items-center h-screen">
                <div className="title flex flex-col items-center">
                    <h4 className="text-5xl font-bold">hello</h4>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                        Explore More by connecting with us.
                    </span>
                    <form className="py-1">
                        <div className="profile flex justify-center py-5">
                            <img src="" alt="profile-icon"></img>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;