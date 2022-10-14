const firebase = require('firebase');
require('firebase/firestore')


export class Firebase {

    constructor(){

        this._firebaseConfig = {
            apiKey: "AIzaSyDGimuyqUIjd2Wzg2ivnWMu1zLDDCurp9o",
            authDomain: "projeto-whatsapp-1b410.firebaseapp.com",
            projectId: "projeto-whatsapp-1b410",
            storageBucket: "projeto-whatsapp-1b410.appspot.com",
            messagingSenderId: "385529674004",
            appId: "1:385529674004:web:2361b421dd96f3c502aa01",
            measurementId: "G-J5NZGNS8ZB"
        }

        this.init();

    }

    init(){
    
        if(!window._initializedFirebase){
            firebase.initializeApp(this._firebaseConfig);
            firebase.firestore().settings({});

            window._initializedFirebase =  true;

        }
    
    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();

    }

    initAuth(){

        return new Promise((s, f)=>{

            let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
            .then(result=>{

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user, 
                    token
                });

            })
            .catch(err=>{
                f(err);
            });//aqui ele abre uma janela, perguntando de qual forma deseja acessar.

        });

    }

}