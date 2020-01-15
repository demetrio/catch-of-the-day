import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // Web app's Firebase configuration
  apiKey: "AIzaSyAfTb2dQN6xjRjLN73LGz61u-smt5gwdjU",
  authDomain: "catch-of-the-day-demetrio.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-demetrio.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
