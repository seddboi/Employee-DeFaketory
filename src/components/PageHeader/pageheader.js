import React from "react";
import Navigation from "../Navigation/navigation";

function InsertHeader() {
    
    return (
        <div className='header'>
            <h2>Welcome to the Directory!</h2>
            <hr/>
            <h3>Use the search bar to find an employee or click the titles to filter!</h3>
            <hr/>
            <Navigation />
        </div>
    );
}

export default InsertHeader;