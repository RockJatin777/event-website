// store.js
import { configureStore } from '@reduxjs/toolkit';
import showsSlice from './showsSlice';
import eventSlice from './eventSlice';
import UserSilce from './userSlice';

const store = configureStore({
    reducer: {
        showsState: showsSlice.reducer,
        eventState: eventSlice.reducer,
        UserState: UserSilce.reducer, 
    },
});

export default store;
