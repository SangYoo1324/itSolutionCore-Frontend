import React from 'react';
import {ACLStyledComponent} from "./NoAuth";

function Auth403(props) {
    return (
        <ACLStyledComponent className="h-[80vh] flex-col justify-center items-center flex-wrap pt-[5rem]" >
            <div className="img flex justify-center">    <img className="h-auto" src="https://cdn-icons-png.flaticon.com/512/9954/9954450.png" alt=""/></div>
            <div className="flex-grow">
                <h1 className="text-center ">403: UnAuthorized</h1>
                <p className="text-center">You're not authorized to access this page. Please Check your authorization level. </p>
                <p className="text-center">Please contact Admin if you're a store manager or business owner having contract with Sam's ITSolution </p>
                <p className="text-center">Thanks!  - Sam's IT Solution Team -</p>
            </div>

        </ACLStyledComponent>
    );
}



export default Auth403;