import React from 'react';
import styled from "styled-components";
const PostStyles = styled.div`

`
function Posts({posts}) {
    return (
        <PostStyles>
            <div className="container">
                <h1>Posts</h1>
                <div className="bar w-[100%] h-[1.5px] bg-gray-400 mx-auto my-[1rem]"></div>
            </div>



            {!posts &&(   <div className="block flex items-center justify-center">
                <h1 className="">NO Posts Posted Yet</h1>
            </div>)}

        </PostStyles>
    );
}

export default Posts;