import React from 'react';
import { Outlet } from 'react-router-dom';

const FilteredProduct = () => {
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default FilteredProduct;