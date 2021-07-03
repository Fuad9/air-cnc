import firebaseConfig from "../../pages/Auth/firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

const provider = new firebase.auth.GoogleAuthProvider();

export const googleSignIn = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const credential = result.credential;

				const authToken = credential.accessToken;

				const users = result.user;

				dispatch({
					type: "GET_AUTH_USER",
					users,
				});

				// alert("loggedin successfully");
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				var email = error.email;
				var credential = error.credential;

				console.log(errorCode, errorMessage, email, credential);
			});
	};
};
