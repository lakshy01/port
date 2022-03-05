import React from 'react';
import Detail from '../../School';
import SchoolCard from './SchoolCard';

const Senior = () => {
    const Senior = Detail.Senior;

    const renderList = () => {
        return Senior.map((item) => {
            return <SchoolCard item={item} />
        })
    }

    return (
        <div>
            {renderList()}
        </div>
    )
}

export default Senior;
