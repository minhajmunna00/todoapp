import React from "react";
import {Link, Outlet} from "react-router-dom"

export default function GroupSettingsPage(){
    return (
        <div>
            <p>This is the group settings page, only the group admin can edit these details</p>
            <Link to= "/"><button>Back</button></Link>
        </div>
    )
}