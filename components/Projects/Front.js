import React from 'react';
import items from '../../Data';
import Card from './Card';

class Front extends React.Component {

    front = items.front;

    renderList = () => {
        return this.front.map((item) => {
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

export default Front;