import React, { Component, Fragment } from 'react';
import ToDo from './components/ToDo/ToDo';
import './App.css';
import {incAsync, min, reset} from "./actions/counterAction";
import { connect } from 'react-redux';
import { fetchData } from './actions/fetchAction';
import Gallery from './components/Gallery/Gallery';
import { counterValue, galleryCount } from './selectors';

const App = (props) => {

    return (
        <Fragment>
            <div className='redux'>
                <button onClick={props.fetch}>FETCH</button>
                <h1>{props.number}</h1>
                <button onClick={props.minus}>-</button>
                <button onClick={props.reload}>reset</button>
                <button onClick={props.plus}>+</button>
                <h2>You get a {props.amount}</h2>
                <Gallery/>
            </div>
            <div>
                <ToDo/>
            </div>
        </Fragment>
        )
};

function MSTP(state) {
    return {
        number: counterValue(state),
        amount: galleryCount(state)
    }
}

//Map Dispatch To Props
function MDTP(dispatch) {
    return {
        plus: function () {
            dispatch(incAsync())
        },

        minus: function () {
            dispatch(min())
        },

        reload: function () {
            dispatch(reset)
        },

        fetch: function () {
            dispatch(fetchData())
        }
    }
}

export default connect(MSTP, MDTP)(App);