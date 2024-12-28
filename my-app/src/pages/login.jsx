import { Link } from "react-router-dom";
import UserSilce from "../redux/userSlice";
import { useSelector, useDispatch} from 'react-redux';
import Cookies from 'js-cookie';

import { useNavigate } from "react-router-dom";

const Login = () => {

    const {email, password, isErr, errMsg} = useSelector((store) => store.UserState)
    const action = UserSilce.actions;
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onEmail = event => {
        dispatch(action.setEmail(event.target.value))
    }

    const onPassword = event => {
        dispatch(action.setPassword(event.target.value))
    }

    const onSubmitCred = event => {
        event.preventDefault();
        const user = Cookies.get('userCred')

        if(user === undefined){
            dispatch(action.setError("You don't have account"));
        }
        const userDetails = JSON.parse(user)

        if(userDetails.email === email && userDetails.password === password){
            dispatch(action.setEmail(""))
            dispatch(action.setPassword(""))
            dispatch(action.setError(""))
            navigate('/')
        } else{
            dispatch(action.setError("Email or Password is Incorrect"));
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
                <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>
                <form className="mt-6" onSubmit={onSubmitCred}>
                
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onEmail}
                    placeholder="Enter your email"
                    className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    />
                </div>

                
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onPassword}
                    placeholder="Enter your password"
                    className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    />
                </div>
                
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Login
                </button>
                </form>

                {isErr && <p className="text-red-500">{errMsg}</p>}
                <p className="mt-6 text-center text-sm text-gray-600">
                Don’t have an account? 
                <Link to="/register" onClick={OnClickSign} className="text-blue-600 hover:underline">Sign up</Link>
                </p>
            </div>
        </main>
    )
}

export default Login