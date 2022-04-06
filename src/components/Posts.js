import React from 'react';

const Posts = ({posts, loading}) => {
    if(loading){
        return <h2>Loadding....</h2>
    }
    return (
        <div>
           <ul className='itemsPagination'>
                {
                    posts.map(post=>(
                        <li className='itemsPagination1' key={post.id}>
                            <p>{post.id}</p>
                        </li>
                    ))
                }
            </ul> 
        </div>
    );
};

export default Posts;