import Firebase from '../../config/firebase';
import firebase from 'firebase/app';

const set_data = (data) => {
    console.log("setdata====>actions")
    return (dispatch) => {
        console.log("data====>action", data)
        dispatch({ type: "SETDATA", data: data })
    }
}

const facebook_login = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log("user====>",user)
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.log("errorrr====>",errorMessage);
            });

    }
}

export {
    set_data,
    facebook_login
}