import React, {useContext} from "react";
import CreateContext from "../../utils/context";

const searchBar = () => {
    let context = useContext(CreateContext);

    return (
        <div className='searchbox'>
            <form className='form'>
                <input className='form-control' type='search' onChange={ (x) => context.handleSearchChange(x)} />

                <button className='btn' type='submit'>Search</button>
            </form>
        </div>
    );
}

export default searchBar;