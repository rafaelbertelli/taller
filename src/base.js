import Rebase from 're-base'
import firebase from 'firebase'

import config from './baseConfig'

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const auth = firebase.auth()
export default base
