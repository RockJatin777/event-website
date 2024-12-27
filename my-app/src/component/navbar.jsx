import { FaSearch, FaHeart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaLocationDot, FaGreaterThan  } from "react-icons/fa6";
import { IoIosOptions } from "react-icons/io";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import '../App.css';

const Navbar = () => {

    const navigate = useNavigate();
    const onSignOut = () => {
        navigate('/login')
    }

    return(
    <>
        <header className="p-5 flex justify-between items-center mb-0 pb-0">
        <Link to="/"><p className="text-red-600 font-bold font-serif text-xl">BookUsNow</p></Link>
        <div className="hidden gap-5 md:flex">
            <button type="button" className="flex items-center gap-1 bg-slate-700 text-white pl-4 pr-4 p-1 rounded-lg"><IoIosOptions /> <span className="hidden lg:inline">Categories</span></button>
            <div className="border-slate-300 border-2 rounded-lg flex items-center pl-2 pr-2 lg:w-80 w-64">
                <input className="outline-none w-full" type="search" />
                <FaSearch className="text-slate-300" size={20}  />
            </div>
        </div>
        <nav className="flex items-center gap-5"> 
            <FaSearch className="md:hidden" size={20} color="#989090" />
            <p className="flex items-center gap-2"><FaHeart  size={20} color="#989090" /> <span className="text-slate-500 text-lg font-bold font-serif hidden md:inline">Favourite</span></p>
            <RiAccountCircleFill onClick={onSignOut} className="md:hidden" size={24} color="#989090" />
            <button type="button" onClick={onSignOut} className="border-slate-300 border-2 pl-3 pr-3 p-1 font-serif rounded-md hidden md:block">Sign Out</button>
        </nav>
        </header>
        <section className="mt-0 pt-0 p-4 md:flex md:gap-32 lg:gap-72 md:mt-2">
            <p className="flex items-center gap-2 text-slate-400 text-xs"><FaLocationDot /> Mumbai, india <FaGreaterThan /></p>
            <ol className="flex justify-center p-3 items-center gap-5 font-sans text-sm md:gap-10">
                <Link to="/recommended-shows"><li>Live shows</li></Link>
                <Link to="/upcoming-events"><li>Events</li></Link>
                <li>Movies</li>
                <li>Plays</li>
                <li>Sports</li>
            </ol>
        </section>
    </>
)
}

export default Navbar