export default function calculator(state = 0, action) {
    if (action.type === "ADD") {
        return state + action.value;
    } else if (action.type === "RESET") {
        return 0;
    } 
    return state;
}
