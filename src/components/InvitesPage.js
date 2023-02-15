import React from "react";
import {Link, Outlet} from "react-router-dom"

export default function InvitesPage(){
    return (
        <div>
            <p>This is invites page, you can accept and decline group invitaions here</p>
            <Link to= "/"><button>Back</button></Link>
        </div>
    )
}