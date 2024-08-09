import React from 'react';
import { Products } from '../components/products-card';
import { userAllProduct } from '../service/query/useAllProduct';

export const AllProducts = () => {
    const {data} =userAllProduct()
    return <div>
        <h2>all Product</h2>
        <div className="flex flex-wrap">
        {data?.map((item)=>(
            <Products{...item}/>
        ))}
        </div>  
    </div>
}