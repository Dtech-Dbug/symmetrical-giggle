export const EventsReducer = (state = null, action) => {
    switch (action.type) {
        case "CREATE_EVENT":
            return action.payload;
        default:
            return state;
    }
};