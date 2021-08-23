import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDWCMjkmJJ9ewUhR6X0GNjUGKpItY5Ahwg",
    authDomain: "my-app-cc8cc.firebaseapp.com",
    databaseURL: "https://my-app-cc8cc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-app-cc8cc",
    storageBucket: "my-app-cc8cc.appspot.com",
    messagingSenderId: "761144949199",
    appId: "1:761144949199:web:35bb6cb67c2c890c257aba"
})

export const auth = app.auth()
export default app