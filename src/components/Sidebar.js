import React from "react";
import GroupTab from "./GroupTab";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap/";

// the sidebar on the main workspace, split into user details, buttons, and list of groups
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="my-2">
        <h2>Group Selection</h2>
        <div className="buttonSide">
          <Link to="/new-group">
            <button className="sidebar-btn-custom">Create Group</button>
          </Link>
        </div>
      </header>

      <nav id="groupNav" className="h-75" style={{ overflowY: "scroll" }}>
        <GroupTab />
        <GroupTab />
      </nav>
    </aside>
  );
}
