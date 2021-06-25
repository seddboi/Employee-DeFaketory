import React, {useContext} from "react";
import SearchBar from "../SearchBar/searchbar";

function Navigation() {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='search-bar-div'>
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navigation;