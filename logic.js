var firebaseConfig = {
    apiKey: "AIzaSyCfP25729zXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "msitxiot.firebaseapp.com",
    databaseURL: "https://xxxxxxx-XXXXXXX.firebaseio.com",
    projectId: "msitxiot",
    storageBucket: "msitxiot.xxxxxxxxx.com",
    messagingSenderId: "32xxxxxxxxxx",
    appId: "1:327882414102:web:e05e71xxxxxxxxxxxxxxxx"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function letsdothis1(det1){
    const checkbox = document.querySelector('.d1');
    if(det=='1'){
        checkbox.checked = true;
    } else if(det=='0'){
        checkbox.checked = false;
    }
}

function letsdothis2(det2){
    const checkbox = document.querySelector('.d2');
    if(det=='1'){
        checkbox.checked = true;
    } else if(det=='0'){
        checkbox.checked = false;
    }
}

function letsdothis3(det3){
    const checkbox = document.querySelector('.d3');
    if(det=='1'){
        checkbox.checked = true;
    } else if(det=='0'){
        checkbox.checked = false;
    }
}

function letsdothis4(det4){
    const checkbox = document.querySelector('.d4');
    if(det=='1'){
        checkbox.checked = true;
    } else if(det=='0'){
        checkbox.checked = false;
    }
}

function letsdothis5(det5){
    const checkbox = document.querySelector('.d5');
    if(det=='1'){
        checkbox.checked = true;
    } else if(det=='0'){
        checkbox.checked = false;
    }
}

function letsdothis6(det6){
    const checkbox = document.querySelector('.d6');
    if(det=='1'){
        checkbox.checked = true;
    } else if(det=='0'){
        checkbox.checked = false;
    }
}

function letsdothis7(det7){
    const checkbox = document.querySelector('.d7');
    if(det=='1'){
        checkbox.checked = true;
    } else if(det=='0'){
        checkbox.checked = false;
    }
}

function letsdothis8(det8){
    const checkbox = document.querySelector('.d8');
    if(det=='1'){
        checkbox.checked = true;
    } else if(det=='0'){
        checkbox.checked = false;
    }
}

var firebaseRef1 = firebase.database().ref('D1');
let det1;
var firebaseRef2 = firebase.database().ref('D2');
let det2;

var firebaseRef3 = firebase.database().ref('D3');
let det3;
var firebaseRef4 = firebase.database().ref('D4');
let det4;

var firebaseRef5 = firebase.database().ref('D5');
let det5;
var firebaseRef6 = firebase.database().ref('D6');
let det6;

var firebaseRef7 = firebase.database().ref('D7');
let det7;
var firebaseRef8 = firebase.database().ref('D8');
let det8;

firebaseRef1.on("value", function(snapshot){
    det = snapshot.val();
    letsdothis1(det1)
    
})
firebaseRef2.on("value", function(snapshot){
    det = snapshot.val();
    letsdothis2(det2)
    
})
firebaseRef3.on("value", function(snapshot){
    det = snapshot.val();
    letsdothis3(det3)
    
})
firebaseRef4.on("value", function(snapshot){
    det = snapshot.val();
    letsdothis4(det4)
    
})
firebaseRef5.on("value", function(snapshot){
    det = snapshot.val();
    letsdothis5(det5)
    
})
firebaseRef6.on("value", function(snapshot){
    det = snapshot.val();
    letsdothis6(det6)
    
})
firebaseRef7.on("value", function(snapshot){
    det = snapshot.val();
    letsdothis7(det7)
    
})
firebaseRef8.on("value", function(snapshot){
    det = snapshot.val();
    letsdothis8(det8)
    
})




var value;
value = '1';
valuen = '0'
function exed1() {
    firebase.database().ref().update({
        D1: value,
    });
}

function exend1() {
    firebase.database().ref().update({
        D1: valuen,
    });
}

function firstd1() {
    if (document.getElementById("firstd1").checked) {
        exed1();
    } else {
        exend1();
    }
}


function exed2() {
    firebase.database().ref().update({
        D2: value,
    });
}

function exend2() {
    firebase.database().ref().update({
        D2: valuen,
    });
}

function firstd2() {
    if (document.getElementById("firstd2").checked) {
        exed2();
    } else {
        exend2();
    }
}

function exed3() {
    firebase.database().ref().update({
        D3: value,
    });
}

function exend3() {
    firebase.database().ref().update({
        D3: valuen,
    });
}

function firstd3() {
    if (document.getElementById("firstd3").checked) {
        exed3();
    } else {
        exend3();
    }
}

function exed4() {
    firebase.database().ref().update({
        D4: value,
    });
}

function exend4() {
    firebase.database().ref().update({
        D4: valuen,
    });
}

function firstd4() {
    if (document.getElementById("firstd4").checked) {
        exed4();
    } else {
        exend4();
    }
}

function exed5() {
    firebase.database().ref().update({
        D5: value,
    });
}

function exend5() {
    firebase.database().ref().update({
        D5: valuen,
    });
}

function firstd5() {
    if (document.getElementById("firstd5").checked) {
        exed5();
    } else {
        exend5();
    }
}

function exed6() {
    firebase.database().ref().update({
        D6: value,
    });
}

function exend6() {
    firebase.database().ref().update({
        D6: valuen,
    });
}

function firstd6() {
    if (document.getElementById("firstd6").checked) {
        exed6();
    } else {
        exend6();
    }
}

function exed7() {
    firebase.database().ref().update({
        D7: value,
    });
}

function exend7() {
    firebase.database().ref().update({
        D7: valuen,
    });
}

function firstd7() {
    if (document.getElementById("firstd7").checked) {
        exed7();
    } else {
        exend7();
    }
}

function exed8() {
    firebase.database().ref().update({
        D8: value,
    });
}

function exend8() {
    firebase.database().ref().update({
        D8: valuen,
    });
}

function firstd8() {
    if (document.getElementById("firstd8").checked) {
        exed8();
    } else {
        exend8();
    }
}