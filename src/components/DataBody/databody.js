import React, {useContext} from "react";
import CreateContext from "../../utils/context";

const SetBody = () => {
    let context = useContext(CreateContext);

    return (
        <section>
            {context.developerState.filteredUsers.map( ({name, picture, email, dob }) => 
                {
                    return (
                        <div data-th="image" className="align-middle">
                            <img src={picture.medium} alt={`of ${name.first} ${name.last}`} className='image-responsive'/>

                            <h3 className='name-cell align-middle'>{name.last}, {name.first}</h3>
                            
                            <h5 className='align-middle'>{email}</h5>

                            <h5 className='align-middle'>{dob.age}</h5>
                        </div>
                    )
                }
            )}

        </section>
    );
}

export default SetBody;