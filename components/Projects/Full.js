import React from 'react';
import items from '../../Data';
import Card from './Card';

class Full extends React.Component {

    full = items.full;

    renderList = () => {
        return this.full.map((item) => {
            return <Card item={item} key={item.id} />
        })
    }

    render() {
        return (
            <div className="ui divided items">
                {this.renderList()}
            </div>
        )
    }
};

export default Full;