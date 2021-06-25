import React from "react";
import PageHeader from "./components/PageHeader/pageheader";
import Organize from "./components/Organize/organize";
import Wrapper from "./components/DataWrapper/datawrapper";

function buildDisplay() {
    return(
        <div className='App'>
            <Organize>
                <PageHeader />
                <Wrapper />
            </Organize>
        </div>

    )
}
export default buildDisplay;