import React from 'react'
import {Pagination} from "@mui/material"

const  MoviePagination = ({currentPage, handlePageChange}) => {
  return (
    <div className="pagination" >
        <Pagination 
        page={currentPage} 
        onChange={handlePageChange}
        count={100}
        color="secondary" />
    </div>
  );
};

export {MoviePagination};