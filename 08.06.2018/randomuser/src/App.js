import React, { Fragment } from 'react';
import logo from './logo.svg';
import { fetchData } from "./actions/fetchActions";
import { connect } from 'react-redux';
import './App.css';

const App = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <div>
                <button onClick={props.fetch}>fetch</button>
                {props.fetch}
            </div>
        </div>
    );
};

function MSTP(state) {
    return {
        users: state.users
    }
}

function MDTP(dispatch) {
    return {
        fetch: function () {
            dispatch(fetchData())
        }

    }
}

export default connect (MSTP, MDTP) (App);
