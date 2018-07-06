import { getUsers } from "../api/api";

export function addUser (data) {
    return {
        type: 'DOWNLOADED',
        data,
    }
}

export const fetchData = () => dispatch => {
    return getUsers()
        .then(data => {
            console.log(data);
            return data;
        })
        .then(data => dispatch(addUser(data.data.results)))
};