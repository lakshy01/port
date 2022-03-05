import React from 'react';
import items from '../../Data';
import Card from './Card';

class Back extends React.Component {

    back = items.back;

    renderList = () => {
        return this.back.map((item) => {
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

export default Back;