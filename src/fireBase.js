import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
	apiKey: 'AIzaSyCjCnFYzapWYkm3VKMQfi2GERTEPp2OMlw',
	authDomain: 'todoproject-14755.firebaseapp.com',
	projectId: 'todoproject-14755',
	storageBucket: 'todoproject-14755.appspot.com',
	messagingSenderId: '131062559848',
	appId: '1:131062559848:web:5535efe131fb58bd41f7dd',
	databaseURL:
		'https://todoproject-14755-default-rtdb.europe-west1.firebasedatabase.app/'
}

const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
