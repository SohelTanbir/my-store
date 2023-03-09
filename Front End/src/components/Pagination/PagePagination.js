import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getPageNumber } from '../../Store/PaginationSlice/PaginationSlice';



const PagePagination = ({products}) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage ] =  useState(1)

// handle current page 
const handleCurrentPage  = (pageNumber ) =>{
  setCurrentPage(pageNumber);
  dispatch(getPageNumber({page:pageNumber}))
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