/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";

const Show = props => {
    const {showDetails} = props
    const {eventName, cityName, date, distanceKm, weather, imgUrl} = showDetails;

    // Format the date
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    // Format the distance
    const formattedDistance = parseInt(distanceKm);

    return (
        <article className="bg-gradient-to-br from-slate-700 to-black w-60 h-80 rounded-lg">
            <figure className="rounded-lg">
                <img className='rounded-lg h-52' src="https://th.bing.com/th/id/OIP.jBsJTdReBSKGEDm3w3G-dwAAAA?w=234&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt={eventName}/>
            </figure>
            <figcaption className="flex items-center p-4 justify-between gap-2">
                <div className="mb-2">
                    <h3 className="text-xs font-bold text-white">{eventName}</h3>
                    <p className="text-xs text-gray-500 flex items-center">
                        <FaLocationDot className="text-red-500 mr-1" />
                        {cityName}
                    </p>
                </div>
                <div className="text-xs text-slate-200">
                    <p>{formattedDate}</p>
                    <p>
                        {weather} | {formattedDistance} km
                    </p>
                </div>
            </figcaption>
        </article>
    );
};

export default Show;
