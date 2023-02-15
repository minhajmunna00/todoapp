import React from "react";
import GroupTab from './GroupTab';
import {Link} from "react-router-dom"
import {Button} from 'react-bootstrap/';

// the sidebar on the main workspace, split into user details, buttons, and list of groups 
export default function Sidebar(){

    return (
        <aside className="sidebar">
           <header> 
                <h1>Group Selection</h1>
            </header>

           <div className = "buttonSide">
               <Link to= "/new-group"><Button variant="outline-primary">Create Group</Button></Link>
           </div>

           <nav id = "groupNav" className = "scroll">
                <GroupTab/>
                <GroupTab/> 
           </nav>
        </aside>
    )
}