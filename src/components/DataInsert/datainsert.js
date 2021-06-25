import React, {useState, useEffect} from "react";
import SetBody from "../components/DataBody/databody";
import CreateContext from "../../utils/context";

const groupData = () => {
    let context = useContext(CreateContext);

    return (
        <div className='datatable m-5'>
            <table className='table table-condensed'>
                {context.developerState.headings.map(({name}) => {
                    return (
                        <div onClick={ () => context.handleSort(name.toLowerCase())}>
                            {name}
                        </div>
                    )
                })}

                <SetBody />
            </table>
        </div>
    );
}

export default groupData;