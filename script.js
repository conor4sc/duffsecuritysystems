


const firebaseConfig = {
apiKey: "AIzaSyAvpkRuhyN-lquu2I5PncSomgn4DciQJIs",
authDomain: "lccs-project-e1c6f.firebaseapp.com",
databaseURL: "https://lccs-project-e1c6f-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "lccs-project-e1c6f",
storageBucket: "lccs-project-e1c6f.appspot.com",
messagingSenderId: "711828391554",
appId: "1:711828391554:web:bf2927fcfb03a35fde969b",
measurementId: "G-NS2R6B69H0"};


firebase.initializeApp(firebaseConfig);
alert("firebase initialized");
var dbRef = firebase.database().ref('Intrusions');


function setUpFirebase(){
  dbRef.get().then((snapshot) => {
      if (snapshot.exists()) {
        var a = snapshot.val();
        var key = Object.keys(a)[0];
        var testVar = a[key];
           
        console.log(testVar);
        document.getElementById("allRecords").innerHTML = testVar;
        
    
        
        
        
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}

window.onload = function(){
  setUpFirebase();
}
