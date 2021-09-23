// localStorage.clear();
$(document).ready(function () {
  $("#signUp").click(function () {
    $("#container").addClass("right-panel-active");
  });
  $("#signIn").click(function () {
    $("#container").removeClass("right-panel-active");
  });
});

// Element
const signUp = document.getElementById("signUp");
const signIn = document.getElementById("signIn");
const loginBtn = document.querySelector(".btn-login");
const first = document.querySelector(".first");
const container = document.querySelector("#container");
const web = document.querySelector("#web");

function mySubmitFunction(e) {
  e.preventDefault();
}
// ****************  Sign up page **********************
let Data;

if (localStorage.getItem("Data")) {
  Data = JSON.parse(localStorage.getItem("Data"));
} else {
  Data = [];
  var admin = [
    {
      sName: "harim",
      sEmail: "harim@gmail.com",
      sNumber: "8004",
      sPassword: "harim",
    },
  ];
  localStorage.setItem("Admin", JSON.stringify(admin));
}

function store() {
  let fomeData = {
    sName: document.querySelector(".sname").value,
    sEmail: document.querySelector(".semail").value,
    sNumber: document.querySelector(".snumber").value,
    sPassword: document.querySelector(".spassword").value,
  };
  let index = JSON.parse(localStorage.getItem("Data"));
  if (index && index.length) {
    Data.push(fomeData);
    localStorage.setItem("Data", JSON.stringify(Data));
  } else {
    Data.push(fomeData);
    localStorage.setItem("Data", JSON.stringify(Data));
  }
  document.querySelector(".sname").value = "";
  document.querySelector(".semail").value = "";
  document.querySelector(".snumber").value = "";
  document.querySelector(".spassword").value = "";
}

// *********** Sign up page end ****************

// **************** Log in page start *************

function login() {
  var name = document.querySelector(".lname").value;
  var email = document.querySelector(".lemail").value;
  var number = document.querySelector(".lnumber").value;
  var password = document.querySelector(".lpassword").value;
  var flag = false;

  for (i = 0; i <= Data.length - 1; i++) {
    if (
      name == Data[i].sName &&
      email == Data[i].sEmail &&
      number == Data[i].sNumber &&
      password == Data[i].sPassword
    ) {
      flag = true;
      console.log("true");
      container.style.display = "none";
      first.style.display = "none";
      web.style.display = "block";
      document.querySelector(".fname").value = Data[i].sName;
      document.querySelector(".femail").value = Data[i].sEmail;
      document.querySelector(".fnumber").value = Data[i].sNumber;
      // document.querySelector(".fpassword");
    }
  }

  if (flag == false) {
    console.log("false");

    var Alert = document.querySelector(".alert");
    Alert.style.display = "block";
    setTimeout(function () {
      Alert.style.display = "none";
    }, 5000);
  }
}

//###################################################
// ###################################################
// ###################################################
// ###################################################
// ###################################################
// ###################################################
//  second face
// ###################################################

function show() {
  document.getElementById("popup").style.display = "block";
}
function hide() {
  document.getElementById("popup").style.display = "none";
  document.querySelector(".fname").value = "";
  document.querySelector(".femail").value = "";
  document.querySelector(".fnumber").value = "";
  document.querySelector(".fadhar").value = "";
}

function add() {}
