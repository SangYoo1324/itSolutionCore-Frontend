import React from 'react';
import {ACLStyledComponent} from "./NoAuth";

function Auth401(props) {
    return (
        <ACLStyledComponent className="h-[80vh] flex-col justify-center items-center flex-wrap pt-[5rem]" >
            <div className="img flex justify-center">    <img className="h-auto" src="https://cdn-icons-png.flaticon.com/512/9954/9954450.png" alt=""/></div>
            <div className="flex-grow">
                <h1 className="text-center ">401: UnAuthenticated</h1>
                <p className="text-center">You're not authenticated to access this page. Please Log In to gain access authentication for this page. </p>
                <p className="text-center">Thanks!  - Sam's IT Solution Team -</p>
            </div>

        </ACLStyledComponent>
    );
}


export default Auth401;