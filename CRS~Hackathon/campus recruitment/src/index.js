import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App.js'
// import Jobs from './component/jobs.js'
// import Jobs from './component/jobs.js'
// import ViewJobs from './component/ViewJobs.js'
// import Student from './component/student.js'
// import LoggedinPannel from '../src/component/LoggedinPanel.js'
// import signup from '../component/signup.js'
import { Provider } from 'react-redux'
// import { BrowserRouter as  Router,Route,Link } from "react-router-dom";
// import { browserRouter as Router ,Route}
import * as firebase from 'firebase';
import store from './store';
 
//   Initialize Firebase
var config = {
  apiKey: "AIzaSyBtIqpq_nHPp71O0EsS19VGqpEb_32NKnQ",
  authDomain: "campusrecruitmentsystem-3db94.firebaseapp.com",
  databaseURL: "https://campusrecruitmentsystem-3db94.firebaseio.com",
  projectId: "campusrecruitmentsystem-3db94",
  storageBucket: "",
  messagingSenderId: "258252295660"
};
firebase.initializeApp(config);




ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);





































//   const appp = () => (
//   <div>
//   <h1>App</h1>
//   <Link to="/about">
//   About Component
//   </Link>
//   </div>
// );
//   const about = () => (
//     <div>
//   <h1>About</h1>
//   <Link to="/">
//   App Component
//   </Link>
//   </div>
// );