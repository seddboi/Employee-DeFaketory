import React, {useState, useEffect} from "react";
import DataInsert from "../DataInsert/datainsert";
import Navigation from "../Navigation/navigation";
import API from "../../utils/api.js";
import Context from "../../utils/context";

const Wrapper = () => {
    let [developerState, setDeveloperState] = useState({
        users:[],
        order: "ascend",
        filteredUsers:[],
        headings: [
            {
                name: "Name",
                width: "20%"
            },
            {
                name: "Picture",
                width: "20%"
            },
            {
                name: "Email",
                width: "20%"
            },
            {
                name: "Age",
                width: "20%"
            },
        ]
    });

    const handleSort = () => {
        if (developerState.order === 'descend') {
            setDeveloperState({
                order: 'ascend',
            })
        } else {
            setDeveloperState({
                order: 'descend'
            })
        }

    };

    const handleChange = (event) => {
        const selectedValue = event.target.value;

        const filteredList = developerState.users.filter( (item) => {
            let newValues = item.name.first.toLowerCase();

            return newValues.indexOf(selectedValue.toLowerCase()) !== -1;
        });

        setDeveloperState({
            ...developerState,
            filteredUsers: filteredList,
        });
    };

    useEffect( () => {
        API.getUsers().then( (results) => {
            setDeveloperState({
                ...developerState,
                users: results.data.results,
                filteredUsers: results.data.results,
            });
        });
    });

    return (
        <Context.Provider value={{developerState, handleChange, handleSort}}>
            <Navigation />
            <div className='data-area'>
                {developerState.filteredUsers.length}

                <DataInsert />
            </div>
        </Context.Provider>
    );
};

export default Wrapper;

