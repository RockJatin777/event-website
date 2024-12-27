import ShowsSlice from "../redux/showsSlice";
import eventSlice from "../redux/eventSlice";

const action = ShowsSlice.actions;
const eventAction = eventSlice.actions;

const apiUrl1 = import.meta.env.VITE_AZURE_KEY_1;
const apiUrl2 = import.meta.env.VITE_AZURE_KEY_2;

export const fetchShowData = async(dispatch) => {
    try{
        dispatch(action.showsLoading());
        const resp = await fetch(apiUrl1);
        const data = await resp.json();
        dispatch(action.gettingShowsData(data.events));
    }
    catch(e){
        console.log(e)
        dispatch(action.showsError());
        }
};

export const fetchEventData = async(dispatch) => {
        try {
            dispatch(eventAction.eventsLoading());
            const resp = await fetch(apiUrl2);
            const data = await resp.json();
            dispatch(eventAction.gettingEventData(data.events));
        }
        catch(e){
            console.log(e)
            dispatch(eventAction.eventsError());
        }
    };