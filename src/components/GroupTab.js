import React from "react";

export default function GroupTab(){
    // change to get data from database instead of set value
    const groupName = "group 1235678";
    const memberNumber = 8;
    

    function handleClick() {
        alert(groupName + " has been clicked");
    };



    return (
        <div onClick={handleClick} className = "groupTab">
            <p>{groupName}</p>
            <p>{memberNumber} members</p>
        </div>
    )
}