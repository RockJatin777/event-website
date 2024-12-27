import { FaLongArrowAltRight } from "react-icons/fa";

import Navbar from "../component/navbar";
import Show from "../component/show";

import { fetchShowData } from "../middleWare/middleWare";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const RecommendedShows = () => {
    const {showData, showLoading, showError} = useSelector((store) => store.showsState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShowData)
    }, [dispatch]);

    return(
    <>
        <Navbar />
        <main className="p-5 bg-gray-100">
            <h1 className="flex items-center gap-4 text-3xl mb-5">Recommended Shows <FaLongArrowAltRight /></h1>
            <article className="flex flex-wrap gap-4 justify-center items-center">
                {showLoading ? (
                    <h1 className="text-3xl text-center">Loading....</h1>
                ): (showError ? (
                    <h1 className="text-3xl text-center">Server Error...</h1>
                ): (
                    showData.map(eachShow => (
                        <Show key={eachShow.eventName} showDetails={eachShow} />
                    ))
                ))}
            </article>
        </main>
    </>
    )
}

export default RecommendedShows