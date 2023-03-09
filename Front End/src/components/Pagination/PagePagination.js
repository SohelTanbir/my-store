import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPageNumber } from '../../Store/PaginationSlice/PaginationSlice';



const PagePagination = ({products}) => {
  const dispatch = useDispatch();
  const currentPage =  useSelector(state => state.PaginationSlice.page);

  return (
    <>
        {products.map((product, index) =>
        <Pagination>
            <Pagination.Item onClick={()=> dispatch(getPageNumber({page:index+1}))}  key={index} active={index+1===currentPage}>
              {index+1}
            </Pagination.Item>
        </Pagination>
       )}

    </>
  );
};

export default PagePagination;