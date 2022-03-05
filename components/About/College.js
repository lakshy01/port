import React from 'react';
import Detail from '../../School';
import SchoolCard from './SchoolCard';

const College = () => {
    const College = Detail.College;

    const renderList = () => {
        return College.map((item) => {
            return <SchoolCard item={item} />
        })
    }

    return (
        <div>
            {renderList()}
        </div>
    )
}

export default College;
