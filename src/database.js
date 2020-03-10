import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './configFire'


function breakfastMenu() { 
  db.collection('Almuerzo').get()
  .then((snapShots) => { 
           snapShots.forEach(doc => {        
               console.log(doc.data());     
            })   
           });
return ( <div>        
        
  </div>   
   );
 }
export default breakfastMenu;