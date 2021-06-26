import React, {useContext} from "react";
import SetBody from "../DataBody/databody";
import CreateContext from "../../utils/context";

const GroupData = () => {
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

export default GroupData;