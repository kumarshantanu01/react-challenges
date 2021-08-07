import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

// const User = ({match}) => {
//     return(
//         <>
//         <h1>Hello, I am a user, hello {match.params.name}</h1>;
//         </>
//     );
// };

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    console.log(location);
    return(
        <>
        <p>my current location is {location.pathname} </p>
        <h1>Hello, I am a user, hello {fname} {lname}</h1>;
        </>
    );
};

export default User;