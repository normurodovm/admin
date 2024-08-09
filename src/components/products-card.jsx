import React from 'react';

export const Products = ({name,img,price}) => {
    return <>
        <div className='w-[400px]' >
            <img className='w-[200px] text-center' src={img} alt="" />
            <h2 className=''>Model   :    {name}</h2>
            <p className=''> Price   :    {price}</p>
        </div>
    </>
}