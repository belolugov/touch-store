import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBicFIFUsJcWofuwfwEGpY21GHVlrGAqJ8",
    authDomain: "touch-store-5fada.firebaseapp.com",
    projectId: "touch-store-5fada",
    storageBucket: "touch-store-5fada.appspot.com",
    messagingSenderId: "215677403988",
    appId: "1:215677403988:web:c23aa870d1d12bdd1f7ec1",
    measurementId: "G-MQ4E11QMPP"
};
// Initialize Firebase
const touchApp = firebase.initializeApp(firebaseConfig)

firebase.analytics()
export default touchApp.firestore()
