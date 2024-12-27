/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";

const Event = props => {
    const {eventDetails} = props
    const {eventName, cityName, date, distanceKm, weather, imgUrl} = eventDetails;

    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const formattedDistance = parseInt(distanceKm);

    return(
        <article className="border-slate-300 rounded-xl border-2 p-2">
            <figure>
                <img className="w-80 h-36 rounded-tl-lg rounded-tr-lg" src="https://th.bing.com/th/id/OIP.jBsJTdReBSKGEDm3w3G-dwAAAA?w=234&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt={eventName} />
                <p className="text-white bg-gradient-to-br from-slate-700 to-black w-full p-2 rounded-br-lg rounded-bl-lg">{formattedDate}</p>
            </figure>
            <figcaption className="flex gap-8 items-center mt-3 justify-center">
                <div>
                    <p className="text-md">After note nearly</p>
                    <p className="text-xs flex items-center"><FaLocationDot className="text-red-500 mr-1" />{cityName}</p>
                </div>
                <p className="text-sm text-slate-400">
                    {weather} | {formattedDistance} km
                </p>
            </figcaption>
        </article>
    )
}

export default Event