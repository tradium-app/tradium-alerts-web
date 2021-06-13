import 'firebase/auth'
import firebase from 'firebase/app'

const GoogleLoginDevPolls = (props) => {
    const handleGoogleLogin = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then((response) => {
                props.loginUser(response.credential.accessToken, props.history)
            })
    }

    return (
        <div className="d-lg-inline-block ml-1">
            <button aria-haspopup="true" className="btn header-item waves-effect" onClick={handleGoogleLogin}>
                {props.text}
            </button>
        </div>
    )
}

export default GoogleLoginDevPolls
