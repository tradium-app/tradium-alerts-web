import 'firebase/auth'
import firebase from 'firebase/app'

const GoogleLoginDevPolls = (props) => {
    const handleGoogleLogin = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
        googleAuthProvider.setCustomParameters({
            prompt: 'select_account',
        })
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(() => {
                firebase
                    .auth()
                    .currentUser.getIdToken()
                    .then((idToken) => {
                        props.loginUser(idToken, props.history)
                    })
            })
    }

    return (
        <div className="d-lg-inline-block ml-1">
            <button aria-haspopup="true" className="btn btn-primary waves-effect" onClick={handleGoogleLogin}>
                {props.text}
            </button>
        </div>
    )
}

export default GoogleLoginDevPolls
