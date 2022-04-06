import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers =[];

    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage ); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className="itemsPagination">
           {
               pageNumbers.map(number =>(
                   <li className='itemsPagination1' key={number} >
                       <a onClick={()=>paginate(number)} href='!#' >
                           {number}
                       </a>
                   </li>
               ))
           } 
        </div>
    );
};

export default Pagination;