import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../../redux/actions/auth.action'
import "./_loginScreen.scss"

const LoginScreen = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(state=>state.auth.accessToken)

    const handleLogin = () => {
      dispatch(login())
    }

    const history = useHistory()

    useEffect(() => {
       if(accessToken){
            history.push('/');
       }
    }, [accessToken,history])

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://www.designbust.com/download/1005/png/transparent_background_youtube_logo_png512.png" alt="logo" />
                <button onClick={handleLogin}>Login With Google</button>
                <p>This project is made using <span>Youtube Data V3</span> and Strictly Agree to all it's terms and conditions , <span>Zedan Saheer. SDE-3</span></p>
            </div>
        </div>
    )
}

export default LoginScreen
