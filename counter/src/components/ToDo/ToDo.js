import React, {Component} from 'react';
import Notes from '../Notes/Notes';
import {addTasks} from "../../actions/taskActions";
import {connect} from 'react-redux';

const ToDo = (props) => {
    let taskInput = '';

    return (
        <div>
            <form action="" onSubmit={(e) => props.addTask(e, {text: taskInput.value, id: Date.now()}) }>
                <input type="text"
                       placeholder='enter task'
                       ref={(input) => taskInput = input}
                />
                <button>Буханка Хлеба</button>
            </form>
            <Notes/>
        </div>
    )
};

function MDTP(dispatch) {
    return {
        addTask: function (e, taskParam) {
            e.preventDefault();
            dispatch(addTasks(taskParam))
        }
    }
}

export default connect(null, MDTP) (ToDo);