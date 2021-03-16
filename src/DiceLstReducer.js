export default function diceLstReducer(state = [], action) {
    if (action.type === "ADD") {
        return state.concat(action.value);
    } else if (action.type === "RESET") {
        return [];
    } 
    return state;
}
