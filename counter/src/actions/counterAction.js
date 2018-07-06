/*прописываем типы команд, которые мы будем адресовать в reducer*/

export function add() {
    return {
        type: 'INCREMENT'
    }
}

export function min() {
    return {
        type: 'DECREMENT'
    }
}

export const reset = {
    type: 'RESET'
};

//стрелочная функция
export const incAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(add());
    }, 2000)
};

// не стрелочная функция :)
// export function incAsync() {
//     return function (dispatch) {
//         setTimeout(() => {
//             dispatch(add());
//         }, 2000)
//     }
// }