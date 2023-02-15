import React from "react";
import {Link, Outlet} from "react-router-dom"

export default function LoginPage(){
    return (
        <div>
            <p>This is the sign up / login page</p>
            <Link to= "/"><button>Login</button></Link>
        </div>
    )
}