import React from 'react';
import Items from '../Items/Items';
import { connect } from 'react-redux';

const Notes = (props) => {
    return (
        <ul className='comp-ul'>
            {props.list.map(el => <Items key={el.id} text={el.text}/>)}
        </ul>
    )
};

function MSTP(state) {
    return {
        list: state.tasks
    }
}

export default connect (MSTP)(Notes);