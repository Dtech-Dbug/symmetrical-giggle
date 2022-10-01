import { combineReducers } from "redux";
import { EventsReducer } from './EventReducer'

export const rootReducer = combineReducers({
    events: EventsReducer
})