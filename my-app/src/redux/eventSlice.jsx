import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: 'eventslice',
    initialState: {
        eventError: false,
        eventLoading: true,
        eventData: [],
    },
    reducers:{
        eventsLoading: (state) => {
            state.eventLoading=true;
            state.eventError=false;
        },
        eventsError: (state) => {
            state.eventError=true;
            state.eventLoading=false;
        },
        gettingEventData: (state, action) => {
            state.eventError=false;
            state.eventLoading=false;
            state.eventData=action.payload;
        }
    }
})

export default eventSlice;