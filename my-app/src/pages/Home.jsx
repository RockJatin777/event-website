import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

import { FaLongArrowAltRight } from "react-icons/fa";

import { fetchEventData, fetchShowData } from '../middleWare/middleWare.js';

import Navbar from '../component/navbar';
import Show from '../component/show';
import Event from '../component/event';


import '../App.css';

const Home = () => {
    const {showData, showLoading, showError} = useSelector((store) => store.showsState);
    const {eventData, eventLoading, eventError} = useSelector(store => store.eventState);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(showData)
    
    useEffect(function() {
        const user = Cookies.get('userCred')
        if(user === undefined){
            navigate('/login')
        }
        dispatch(fetchShowData)
        dispatch(fetchEventData)
        
    }, [dispatch, navigate]);

    return(
        <>
        <Navbar />
        <main className="banner-img">
            <h1 className='text-white text-center text-2xl pt-12 p-3 md:text-4xl'>Discover Exciting Events Happening Near You - Stay Tuned for Updates!</h1>
            <p className='text-white text-center p-6 text-sm md:text-xl'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
            <div className='flex justify-between p-4'>
                <h2 className='text-white flex items-center gap-5 text-xl'>Recommended shows <FaLongArrowAltRight size={20} /></h2>
                <Link to="/recommended-shows"><p className='text-white underline'>See all</p></Link>
            </div>
            <section className='overflow-x-auto p-4'>
                <article className='gap-3 inline-flex justify-center items-center'>
                    {showLoading ? (
                        <h1 className='text-white text-lg text-center'>Loading....</h1>
                    ): (showError ? (
                        <h1 className='text-white text-lg text-center'>Server Error....</h1>
                    ): (
                        showData.map((eachShow) => (
                        <Show key={eachShow.eventName} showDetails={eachShow} />
                        ))
                    ))}
                </article>
            </section>
            <div className='flex justify-between p-4 mt-3'>
                <h2 className='text-blue-700 font-bold text-2xl flex items-center gap-5'>Upcoming shows <FaLongArrowAltRight size={20} /></h2>
                <Link to="/upcoming-events"><p className='underline lg:hidden'>See all</p></Link>
            </div>
            <section className='flex justify-center flex-wrap items-center gap-5 p-4'>
                {eventLoading ? (
                    <h1 className='text-blue-700 font-bold text-lg text-center h-300'>Loading....</h1>
                ) : (
                    eventError ? (
                        <h1 className='text-white text-lg text-center'>Server Error....</h1>
                    ) : (
                        eventData.map(eachEvent => (
                            <Event key={eachEvent.eventName} eventDetails={eachEvent} />
                        ))
                    )
                )}
            </section>
        </main>
        
    </>
    )
}

export default Home