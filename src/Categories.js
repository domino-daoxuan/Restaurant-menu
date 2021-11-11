import React, { useState } from 'react';
const Categories = ({ filterItem , category}) => {


  return (
    <div className="btn-container">
      {/* <button className="filter-btn" type="button" onClick={() => { filterItem("all") }}>
        All
      </button>
      <button className="filter-btn" type="button" onClick={() => { filterItem("breakfast") }}>
        Breakfast
      </button> */}
      {category.map((cate, index) => {
        return(
          <button key={index} className="filter-btn" type="button" onClick={() => {filterItem(cate)}}>{ cate }</button>
        );
      })}
    </div>
  );
};

export default Categories;
