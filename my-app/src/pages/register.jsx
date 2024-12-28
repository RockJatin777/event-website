import { Link } from "react-router-dom";
import UserSilce from "../redux/userSlice";
import { useSelector, useDispatch} from 'react-redux';
import Cookies from 'js-cookie';


import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const {email, password, confirmPaswrd, isErr, errMsg} = useSelector((store) => store.UserState)
    const action = UserSilce.actions;
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onEmail = event => {
        dispatch(action.setEmail(event.target.value))
    }

    const onPassword = event => {
        dispatch(action.setPassword(event.target.value))
    }

    const onConfirmPaswrd = event => {
        dispatch(action.setConfirmPaswrd(event.target.value))
    }

    const onSubmitDetails  = event => {
        event.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            dispatch(action.setError("Invalid email format"));
        } else if(password.length < 8){
            dispatch(action.setError("Password must be of eight character"));
        } else if (password !== confirmPaswrd){
            dispatch(action.setError("Both Password must be same"));
        } else {
            const userDetails = {
                email,
                password
            };
            Cookies.set('userCred', JSON.stringify(userDetails), {expires: 7});
            navigate('/login');
            dispatch(action.setEmail(""))
            dispatch(action.setPassword(""))
            dispatch(action.setError(""))
            
        }
    }

    const OnClickSign = () => {
        dispatch(action.setEmail(""))
        dispatch(action.setPassword(""))
        dispatch(action.setError(""))
    }

    return(
        <main className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 text-center">Sign Up</h2>

                <form className="mt-6" onSubmit={onSubmitDetails}>
                
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                    type="email"
                    value={email}
                    id="email"
                    name="email"
                    onChange={onEmail}
                    placeholder="Enter your email"
                    className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    />
                </div>

                
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Create Password</label>
                    <input
                    type="password"
                    value={password}
                    id="password"
                    name="password"
                    placeholder="Create your password"
                    onChange={onPassword}
                    className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                    type="password"
                    id="confirmPassword"
                    name="password"
                    value={confirmPaswrd}
                    onChange={onConfirmPaswrd}
                    placeholder="Confirm your password"
                    className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    />
                </div>

                
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Sign Up
                </button>

                </form>
                {isErr && <p className="text-red-500">{errMsg}</p>}
                <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account? 
                <Link to="/login" onClick={OnClickSign} className="text-blue-600 hover:underline">Sign In</Link>
                </p>
            </div>
        </main>
    )
}

export default SignUp