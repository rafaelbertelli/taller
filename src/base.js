import Rebase from 're-base'
import firebase from 'firebase'

const config = {
 
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

// export const auth = firebase.auth()
export default base
