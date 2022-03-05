import React from 'react';
import Detail from '../../School';
import SchoolCard from './SchoolCard';

const High = () => {
    const High = Detail.High;

    const renderList = () => {
        return High.map((item) => {
            return <SchoolCard item={item} />
        })
    }

    return (
        <div>
            {renderList()}
        </div>
    )
}

export default High;
