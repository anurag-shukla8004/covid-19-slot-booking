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
const ghost = document.querySelector(".ghost");
const lContent = document.querySelector(".lcontent");
const userName = document.querySelector(".username");
const userEmail = document.querySelector(".useremail");
const adminName = document.querySelector(".adminname");
const adminEmail = document.querySelector(".adminemail");
// Element sign in
const sinName = document.querySelector(".sname");
const sinEmail = document.querySelector(".semail");
const sinNumebr = document.querySelector(".snumber");
const sinPassword = document.querySelector(".spassword");
const scode = document.querySelector(".scode");

// element of fome
const fName = document.querySelector(".fname");
const fEmail = document.querySelector(".femail");
const fUserEmail = document.querySelector(".fuseremail");
const fNumber = document.querySelector(".fnumber");
const fAdhar = document.querySelector(".fadhar");
const fcode = document.querySelector(".fcode");
// element of profile edit
const eName = document.querySelector(".ename");
const eEmail = document.querySelector(".eemail");
const ePassword = document.querySelector(".epassword");
const eName2 = document.querySelector(".ename2");
const eEmail2 = document.querySelector(".eemail2");
const ePassword2 = document.querySelector(".epassword2");

function mySubmitFunction(e) {
  e.preventDefault();
}
// ****************  Sign up page **********************
let Data;
let bookingData;
let pageUpdateData;
let bookingDataCopy;
let currentStatus;
let nameEmail;
let booking;

// ***************** Data storage *****************

if (localStorage.getItem("Data")) {
  Data = JSON.parse(localStorage.getItem("Data"));
} else {
  Data = [];
  Data = [
    {
      sName: "harim",
      sEmail: "harim@gmail.com",
      sNumber: "8004660767",
      sPassword: "harim",
      sStatus: "admin",
    },
  ];
  localStorage.setItem("Data", JSON.stringify(Data));
}

// ************************ bookingData ***************
if (localStorage.getItem("bookingData")) {
  bookingData = JSON.parse(localStorage.getItem("bookingData"));
} else {
  bookingData = [];

  localStorage.setItem("bookingData", JSON.stringify(bookingData));
}

function backCode() {
  if ($(window).width() > 620) {
    scode.style.display = "none";
    sinNumebr.style.width = "300px";
    fcode.style.display = "none";
    fNumber.style.width = "300px";
  }
  if ($(window).width() > 320) {
    scode.style.display = "none";
    sinNumebr.style.width = "300px";
    fcode.style.display = "none";
    fNumber.style.width = "300px";
  }
}

function store() {
  let fomeData;
  let checkName;
  let checkEmail;
  let checkNumber;
  let checkPassword;

  if (
    sinName.value.length !== 0 &&
    sinEmail.value.length !== 0 &&
    sinNumebr.value.length !== 0 &&
    sinPassword.value.length !== 0
  ) {
    //  Name
    if (sinName.value.length > 2) {
      checkName = true;
    } else {
      checkName = false;
      let nameAlert = document.querySelector(".namealert");
      nameAlert.style.display = "block";
      setTimeout(function () {
        nameAlert.style.display = "none";
      }, 3000);
    }
    // Email

    if (sinEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      let check = true;
      Data.map((arr) => {
        if (arr.sEmail == sinEmail.value) {
          check = false;
        }
      });
      if (check == true) {
        checkEmail = true;
      } else {
        checkEmail = false;
        let emailAlert2 = document.querySelector(".emailalert2");
        emailAlert2.style.display = "block";
        setTimeout(function () {
          emailAlert2.style.display = "none";
        }, 3000);
      }
    } else {
      checkEmail = false;
      let emailAlert1 = document.querySelector(".emailalert1");
      emailAlert1.style.display = "block";
      setTimeout(function () {
        emailAlert1.style.display = "none";
      }, 3000);
    }
    // Mobile Numebr
    if (
      sinNumebr.value.match(/^\d{10}$/) &&
      sinNumebr.value.match(/^(9|8|7|6)\d{9}$/)
    ) {
      checkNumber = true;
    } else {
      checkNumber = false;

      let numberAlert = document.querySelector(".numberalert");
      numberAlert.style.display = "block";
      setTimeout(function () {
        numberAlert.style.display = "none";
      }, 3000);
    }
    // Password
    if (sinPassword.value.length > 3) {
      checkPassword = true;
    } else {
      checkPassword = false;
      let passwordAlert = document.querySelector(".passwordalert");
      passwordAlert.style.display = "block";
      setTimeout(function () {
        passwordAlert.style.display = "none";
      }, 3000);
    }

    // submit all field
    if (
      checkName == true &&
      checkEmail == true &&
      checkNumber == true &&
      checkPassword == true
    ) {
      fomeData = {
        sName: document.querySelector(".sname").value,
        sEmail: document.querySelector(".semail").value,
        sNumber: document.querySelector(".snumber").value,
        sPassword: document.querySelector(".spassword").value,
        sStatus: "user",
      };
      let index = JSON.parse(localStorage.getItem("Data"));
      if (index && index.length) {
        Data.push(fomeData);
        localStorage.setItem("Data", JSON.stringify(Data));
      } else {
        Data.push(fomeData);
        localStorage.setItem("Data", JSON.stringify(Data));
      }
      var successSinup = document.querySelector(".successsinup");
      successSinup.style.display = "block";
      setTimeout(function () {
        successSinup.style.display = "none";
        ghost.click();
      }, 2000);
      document.querySelector(".sname").value = "";
      document.querySelector(".semail").value = "";
      document.querySelector(".snumber").value = "";
      document.querySelector(".spassword").value = "";
    }
  } else {
    var loginAlert = document.querySelector(".loginAlert");
    loginAlert.style.display = "block";
    setTimeout(function () {
      loginAlert.style.display = "none";
    }, 3000);
  }
}
// console.log(sinName.value.length);

// *********** Sign up page end ****************

// **************** Log in page start *************

function login() {
  const email = document.querySelector(".lemail").value;
  var password = document.querySelector(".lpassword").value;
  var DataCopy = JSON.parse(localStorage.getItem("Data"));
  localStorage.setItem("DataCopy", JSON.stringify(DataCopy));
  var flag = 0;
  for (i = 0; i <= DataCopy.length - 1; i++) {
    if (
      email == DataCopy[i].sEmail &&
      password == DataCopy[i].sPassword &&
      DataCopy[i].sStatus == "admin"
    ) {
      flag = 2;
      pne = {
        pname: DataCopy[i].sName,
        pemai: DataCopy[i].sEmail,
      };
      let profilename = [pne];
      localStorage.setItem("nameEmail", JSON.stringify(profilename));
    }
  }

  for (i = 0; i <= DataCopy.length - 1; i++) {
    if (
      email == DataCopy[i].sEmail &&
      password == DataCopy[i].sPassword &&
      DataCopy[i].sStatus == "user"
    ) {
      flag = 1;
      pne = {
        pname: DataCopy[i].sName,
        pemai: DataCopy[i].sEmail,
      };

      let profilename = [pne];
      localStorage.setItem("nameEmail", JSON.stringify(profilename));
    }
  }
  if (flag == 0) {
    var Alert = document.querySelector(".alert");
    Alert.style.display = "block";
    setTimeout(function () {
      Alert.style.display = "none";
    }, 5000);
  }
  // booking
  if (flag == 1) {
    container.style.display = "none";
    first.style.display = "none";
    web.style.display = "block";
    pageUpdateData = "booking";
    localStorage.setItem("pageUpdateData", JSON.stringify(pageUpdateData));
    let str = JSON.parse(localStorage.getItem("nameEmail"));
    userName.innerText = str[0].pname;
    userEmail.innerText = str[0].pemai;
  }

  // admin
  if (flag == 2) {
    container.style.display = "none";
    first.style.display = "none";
    lContent.style.display = "flex";
    pageUpdateData = "admin";
    localStorage.setItem("pageUpdateData", JSON.stringify(pageUpdateData));
    let str = JSON.parse(localStorage.getItem("nameEmail"));
    adminName.innerText = str[0].pname;
    adminEmail.innerText = str[0].pemai;
    filter();
    firsttarget();
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

// *************** Log out**********

function show() {
  document.getElementById("popup").style.display = "block";
}
function hide() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("lpopup").style.display = "none";
  document.getElementById("editpopup").style.display = "none";
  document.getElementById("editpopup2").style.display = "none";
  document.querySelector(".fname").value = "";
  document.querySelector(".femail").value = "";
  document.querySelector(".fnumber").value = "";
  document.querySelector(".fadhar").value = "";
  afteraccept.style.display = "none";
  afterreject.style.display = "none";
}

function numberCode1() {
  scode.value = "+91";
  scode.style.display = "block";
  sinNumebr.setAttribute("style", "width: 143px !important;");
  var mediaQuery = window.matchMedia("(max-width: 476px)");
  if (mediaQuery.matches) {
    sinNumebr.setAttribute("style", "width: 92px !important;");
    scode.setAttribute("style", "width: 45px !important;");
    scode.style.display = "block";
  }
}
function numberCode2() {
  const fcode = document.querySelector(".fcode");
  fcode.value = "+91";
  fcode.style.display = "block";
  fNumber.setAttribute("style", "width: 143px !important;");
  var mediaQuery = window.matchMedia("(max-width: 476px)");
  if (mediaQuery.matches) {
    fNumber.setAttribute("style", "width: 92px !important;");
    fcode.setAttribute("style", "width: 45px !important;");
    fcode.style.display = "block";
  }
}

function add() {
  let fomeData;
  let fcheckName;
  let fcheckEmail;
  let fcheckNumber;
  let fcheckAdhar;
  if (
    fName.value.length !== 0 &&
    fEmail.value.length !== 0 &&
    fNumber.value.length !== 0 &&
    fAdhar.value.length !== 0
  ) {
    //  fName
    if (fName.value.length > 2) {
      fcheckName = true;
    } else {
      fcheckName = false;
      let fnameAlert = document.querySelector(".fnamealert");
      fnameAlert.style.display = "block";
      setTimeout(function () {
        fnameAlert.style.display = "none";
      }, 3000);
    }

    // femail
    if (fEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      let fcheck = true;
      if (localStorage.getItem("bookingData") !== []) {
        bookingData.map((arr) => {
          if (arr.fsEmail == fEmail.value) {
            fcheck = false;
          }
        });
      }

      if (fcheck == true) {
        fcheckEmail = true;
      } else {
        fcheckEmail = false;
        let femailAlert2 = document.querySelector(".femailalert2");
        femailAlert2.style.display = "block";
        setTimeout(function () {
          femailAlert2.style.display = "none";
        }, 3000);
      }
    } else {
      checkEmail = false;
      let femailAlert1 = document.querySelector(".femailalert1");
      femailAlert1.style.display = "block";
      setTimeout(function () {
        femailAlert1.style.display = "none";
      }, 3000);
    }

    // Mobile Numebr
    if (
      fNumber.value.match(/^\d{10}$/) &&
      fNumber.value.match(/^(9|8|7|6)\d{9}$/)
    ) {
      fcheckNumber = true;
    } else {
      fcheckNumber = false;

      let fnumberAlert = document.querySelector(".fnumberalert");
      fnumberAlert.style.display = "block";
      setTimeout(function () {
        fnumberAlert.style.display = "none";
      }, 3000);
    }
    //  Adhar Numebr
    if (fAdhar.value.length == 12) {
      fcheckAdhar = true;
    } else {
      fcheckAdhar = false;
      let fadharAlert = document.querySelector(".fadharalert");
      fadharAlert.style.display = "block";
      setTimeout(function () {
        fadharAlert.style.display = "none";
      }, 3000);
    }
  } else {
    checkPassword = false;
    let floginAlert = document.querySelector(".floginAlert");
    floginAlert.style.display = "block";
    setTimeout(function () {
      floginAlert.style.display = "none";
    }, 3000);
  }

  if (
    fcheckName == true &&
    fcheckEmail == true &&
    fcheckNumber == true &&
    fcheckAdhar == true
  ) {
    let str = JSON.parse(localStorage.getItem("nameEmail"));
    fomeData = {
      fName: document.querySelector(".fname").value,
      fEmail: document.querySelector(".femail").value,
      fUserEmail: str[0].pemai,
      fNumber: document.querySelector(".fnumber").value,
      fAdhar: document.querySelector(".fadhar").value,
      fStatus: "pending",
    };
    let index = JSON.parse(localStorage.getItem("bookingData"));
    if (index && index.length) {
      bookingData.push(fomeData);
      localStorage.setItem("bookingData", JSON.stringify(bookingData));
    } else {
      bookingData.push(fomeData);
      localStorage.setItem("bookingData", JSON.stringify(bookingData));
    }
    let fsuccessSinup = document.querySelector(".fsuccesssinup");
    fsuccessSinup.style.display = "block";
    setTimeout(function () {
      fsuccessSinup.style.display = "none";
      hide();
    }, 2000);
    document.querySelector(".fname").value = "";
    document.querySelector(".femail").value = "";
    document.querySelector(".fnumber").value = "";
    document.querySelector(".fadhar").value = "";
    bookingDataCopy = [...bookingData];
    localStorage.setItem("bookingDataCopy", JSON.stringify(bookingDataCopy));
  }
}
