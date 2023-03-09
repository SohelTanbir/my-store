import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';



const PagePagination = ({products}) => {
  const [currentPage, setCurrentPage ] =  useState(1)

// handle current page 
const handleCurrentPage  = (pageNumber ) =>{
  setCurrentPage(pageNumber);
}

  return (
    <>
        {products.map((product, index) =>
        <Pagination>
            <Pagination.Item onClick={()=> handleCurrentPage(index+1)}  key={index} active={index+1===currentPage}>
              {index+1}
            </Pagination.Item>
        </Pagination>
       )}

    </>
  );
};

export default PagePagination;