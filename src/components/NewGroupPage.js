import React from "react";
import {Link, Outlet} from "react-router-dom"


export default function NewGroupPage(){
    return (
        <div>
            <p>This is the new group creation page, create a new group and add members</p>
            <Link to= "/"><button>Cancel</button></Link>
        </div>
    )
}