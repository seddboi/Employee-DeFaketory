import React from "react";
import PageHeader from "./components/PageHeader/pageheader";
import Wrapper from "./components/Wrapper/wrapper";
import DataWrapper from "./components/DataWrapper/datawrapper";

function BuildDisplay() {
    return(
        <div className='App'>
            <Wrapper>
                <PageHeader />
                <DataWrapper />
            </Wrapper>
        </div>
    );
}
export default BuildDisplay;