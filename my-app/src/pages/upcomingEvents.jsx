import { FaLongArrowAltRight } from "react-icons/fa";

import Navbar from "../component/navbar";
import Event from "../component/event";

import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

import { fetchEventData } from "../middleWare/middleWare.js";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const UpcomingEvents = () => {
    const {eventData, eventLoading, eventError} = useSelector(store => store.eventState);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const user = Cookies.get('userCred')
        if(user === undefined){
            navigate('/login')
        }
        dispatch(fetchEventData)
    }, [dispatch, navigate])

    return(
    <>
    <Navbar />
        <main className="p-5 bg-gray-100">
            <h1 className="flex items-center gap-4 text-3xl mb-5">Upcoming Events <FaLongArrowAltRight /></h1>
            <article className="flex flex-wrap gap-4 justify-center items-center">
                {eventLoading ? (
                    <h1 className="text-3xl text-center">Loading....</h1>
                ): (eventError ? (
                    <h1 className="text-3xl text-center">Server Error...</h1>
                ): (
                    eventData.map(eachShow => (
                        <Event key={eachShow.eventName} eventDetails={eachShow} />
                    ))
                ))}
            </article>
        </main>
    </>
    )
}

export default UpcomingEvents