import ShowsSlice from "../redux/showsSlice";
import eventSlice from "../redux/eventSlice";

const action = ShowsSlice.actions;
const eventAction = eventSlice.actions;

const apiUrl = import.meta.env.VITE_AZURE_KEY_1;

export const fetchShowData = async(dispatch) => {
    try{
        dispatch(action.showsLoading());
        const resp = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=${apiUrl}==&type=reco`);
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
            const resp = await fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=${apiUrl}==&page=1&type=upcoming`);
            const data = await resp.json();
            dispatch(eventAction.gettingEventData(data.events));
        }
        catch(e){
            console.log(e)
            dispatch(eventAction.eventsError());
        }
    };