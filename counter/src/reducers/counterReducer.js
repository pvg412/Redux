/*
пишем функцию, которая будет слушать команды из action, проверять их на ключ type
и выполнять ту операцию со state, с которой совпало сравнение
*/

export default function counter (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return state = 0;
        default:
            return state;
    }
}