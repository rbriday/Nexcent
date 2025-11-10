import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-full md:w-[1152px] mx-auto px-5 md:px-0'>{children}</div>
    )
};

export default Container;