import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// import config from './baseConfig'

const config = {
  apiKey: 'AIzaSyBXYKckT_mzOlvWQNa6BwdSmoAgTZT1Xms',
  authDomain: 'oficina-bertelli.firebaseapp.com',
  databaseURL: 'https://oficina-bertelli.firebaseio.com',
  projectId: 'oficina-bertelli',
  storageBucket: 'oficina-bertelli.appspot.com',
  messagingSenderId: '679064403249'
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
export const auth = firebase.auth()
export default base
