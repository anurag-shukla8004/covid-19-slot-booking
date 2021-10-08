const mTable = document.getElementById("mresponsive-table");
const mTableDetails = document.getElementById("mresponsive-tableDetails");
const editPopup = document.getElementById("editpopup");
const editPopup2 = document.getElementById("editpopup2");
const arrowDown = document.getElementById("arrow-down");
const SlotDetails = document.getElementById("slotdetails");
// const mTableRow = document.querySelector(".mtable-row");

const pagination2 = document.getElementById("pagination-2");
const optionfilter = document.querySelector(".filter");
const afteraccept = document.querySelector(".afteraccept");
const afterreject = document.querySelector(".afterreject");
const slotDate = document.querySelector(".slotdate");
const slotTime = document.querySelector(".slottime");
const rejectRegionBox = document.querySelector(".rejectregionbox");
const slotFieldAlert = document.querySelector(".slotfieldalert");
const acceptFieldAlert = document.querySelector(".acceptfieldalert");
const rejectFieldAlert = document.querySelector(".rejectfieldalert");
const successFieldAlert = document.querySelector(".successfieldalert");
// const optionSelector = document.querySelector(".optionselector");
const pendingform = document.getElementById("lpopup");

pagination2.addEventListener("click", earsetarget);
pagination2.addEventListener("click", target);
// optionSelector.addEventListener("click", selector);

function Pagination() {
  pagination2.innerHTML = "";
  let booking = JSON.parse(localStorage.getItem("booking"));
  const numberOfItems = booking.length;
  const numberPerPage = 5;
  const currentPage = 1;
  const numberOfPages = Math.ceil(numberOfItems / numberPerPage);

  for (var a = 1; a <= numberOfPages; a++) {
    const page = `<li class="page-number" id="page-number"><a href="#">${a}</a></li>`;
    pagination2.innerHTML += page;
  }
}

// sort Name
// bookingDataCopy = [...bookingData];
// localStorage.setItem("bookingDataCopy", JSON.stringify(bookingDataCopy));
// bookingDataCopy.sort((a, b) => {
//   if (a.fName.toLowerCase() < b.fName.toLowerCase()) {
//     return -1;
//   }
// });

function firsttarget() {
  let booking = JSON.parse(localStorage.getItem("booking"));
  const numberOfItems = booking.length;
  mTable.innerHTML = "";
  const numberPerPage = 5;
  const currentPage = 1;
  const numberOfPages = Math.ceil(numberOfItems / numberPerPage);
  var i = 1;
  const trimStart = (i - 1) * numberPerPage;
  const trimEnd = trimStart + numberPerPage;

  booking = JSON.parse(localStorage.getItem("bookingDataCopy"));
  localStorage.setItem("booking", JSON.stringify(booking));

  if (arrowDown.classList == "active") {
    console.log("success");
    booking.sort((a, b) => {
      if (a.fName.toLowerCase() > b.fName.toLowerCase()) {
        return -1;
      }
    });
  } else {
    booking.sort((a, b) => {
      if (a.fName.toLowerCase() < b.fName.toLowerCase()) {
        return -1;
      }
    });
  }
  mTable.innerHTML = "";
  localStorage.setItem("booking", JSON.stringify(booking));

  for (var j = trimStart; trimEnd > j; j++) {
    const tabelRow = ` <li class="mtable-row">
    <div class="col col-1" data-label="Job Id">${booking[j].fUserEmail}</div>
    <div class="col col-2" data-label="Customer Name">${booking[j].fName}</div>
    <div class="col col-3" data-label="Amount">${booking[j].fEmail}</div>
    <div class="col col-4" data-label="Payment Status">${booking[j].fNumber}</div>
    <div class="col col-4" data-label="Payment Status"><button class="pending" value="${booking[j].fEmail}" style="background: ${booking[j].color};"  onclick="pending()">${booking[j].fStatus}</button></div>
  </li>`;
    mTable.innerHTML += tabelRow;
  }
  Pagination();
}

function slotDetails() {
  mTableDetails.innerHTML = "";
  web.style.display = "none";
  SlotDetails.style.display = "block";
  var bookingDataCopy = JSON.parse(localStorage.getItem("bookingDataCopy"));
  var str = JSON.parse(localStorage.getItem("nameEmail"));
  console.log(Data);
  bookingDataCopy.map((value) => {
    if (str[0].pemai == value.fUserEmail) {
      if (value.bookedTime) {
        const tabelRow = ` <li class="mtable-row">
    <div class="col col-1" data-label="Job Id">${value.fEmail}</div>
    <div class="col col-2" data-label="Customer Name">${value.fName}</div>
    <div class="col col-3" data-label="Amount">${value.fNumber}</div>
    <div class="col col-4" data-label="Payment Status">${value.bookedDate}  ${value.bookedTime}</div>
    <div class="col col-4" data-label="Payment Status"><button class="pending" value="${value.fEmail}" style="background: ${value.color}; disabled">${value.fStatus}</button></div>
  </li>`;
        mTableDetails.innerHTML += tabelRow;
      }
      if (value.region) {
        const tabelRow = ` <li class="mtable-row">
    <div class="col col-1" data-label="Job Id">${value.fEmail}</div>
    <div class="col col-2" data-label="Customer Name">${value.fName}</div>
    <div class="col col-3" data-label="Amount">${value.fNumber}</div>
    <div class="col col-4" data-label="Payment Status" style="overflow: scroll;">${value.region}</div>
    <div class="col col-4" data-label="Payment Status" ><button class="pending" value="${value.fEmail}" style="background: ${value.color};" disabled">${value.fStatus}</button></div>
  </li>`;
        mTableDetails.innerHTML += tabelRow;
      }
      if (!value.region && !value.bookedTime) {
        const tabelRow = ` <li class="mtable-row">
    <div class="col col-1" data-label="Job Id">${value.fEmail}</div>
    <div class="col col-2" data-label="Customer Name">${value.fName}</div>
    <div class="col col-3" data-label="Amount">${value.fNumber}</div>
    // <div class="col col-4" data-label="Payment Status">Pending</div>
    <div class="col col-4" data-label="Payment Status"><button class="pending" value="${value.fEmail}" style="background: ${value.color};" disabled">${value.fStatus}</button></div>
  </li>`;
        mTableDetails.innerHTML += tabelRow;
      }
    }
  });
}

function earsetarget() {
  mTable.innerHTML = "";
}
function target(e) {
  let booking = JSON.parse(localStorage.getItem("booking"));
  const numberOfItems = booking.length;
  mTable.innerHTML = "";
  const numberPerPage = 5;
  const currentPage = 1;
  const numberOfPages = Math.ceil(numberOfItems / numberPerPage);
  const item = e.target;
  let i = item.children[0].innerText;
  const trimStart = (i - 1) * numberPerPage;
  const trimEnd = trimStart + numberPerPage;

  booking = JSON.parse(localStorage.getItem("booking"));

  for (var j = trimStart; trimEnd > j; j++) {
    const tabelRow = ` <li class="mtable-row">
  <div class="col col-1" data-label="Job Id">${booking[j].fUserEmail}</div>
  <div class="col col-2" data-label="Customer Name">${booking[j].fName}</div>
  <div class="col col-3" data-label="Amount">${booking[j].fEmail}</div>
  <div class="col col-4" data-label="Payment Status">${booking[j].fNumber}</div>
  <div class="col col-4" data-label="Payment Status"><button class="pending" value="${booking[j].fEmail}" style="background: ${booking[j].color};"  onclick="pending()">${booking[j].fStatus}</button></div>
</li>`;
    mTable.innerHTML += tabelRow;
  }
}

function logoutPage() {
  if ((lContent.style.display = "flex")) {
    container.style.display = "block";
    first.style.display = "block";
    lContent.style.display = "none";
    optionfilter.innerHTML = "";
    earsetarget();
  }

  if ((web.style.display = "block")) {
    container.style.display = "block";
    first.style.display = "block";
    web.style.display = "none";
  }
  localStorage.removeItem("pageUpdateData");
}

function filter() {
  optionfilter.innerHTML = "";
  var option = `<option class="optionselector">All</option>`;
  optionfilter.innerHTML += option;
  let Data = JSON.parse(localStorage.getItem("Data"));
  localStorage.setItem("Data", JSON.stringify(Data));

  Data.map((value, index) => {
    if (value.sStatus == "user") {
      const i = Data[index].sEmail;
      var option = `<option class="optionselector">${i}</option>`;
      optionfilter.innerHTML += option;
    }
  });
}

function pending() {
  const item = this.event.target;
  const val = item.attributes[1].value;
  localStorage.setItem("currentStatus", val);

  pendingform.style.display = "block";
  const get = localStorage.getItem("currentStatus");
  item.parentElement.parentElement.setAttribute("value", val);
}

function afterAccept() {
  afteraccept.style.display = "block";
  afterreject.style.display = "none";
}
function afterReject() {
  afteraccept.style.display = "none";
  afterreject.style.display = "block";
}

function submitslot() {
  const changepending = document.querySelector(".pending");
  if (
    afteraccept.style.display == "none" &&
    afterreject.style.display == "none"
  ) {
    slotFieldAlert.style.display = "block";
    setTimeout(() => {
      slotFieldAlert.style.display = "none";
    }, 3000);
  } else {
    // after accept
    if (
      afteraccept.style.display == "block" &&
      afterreject.style.display == "none"
    ) {
      if (slotDate.value !== "" && slotTime.value !== "") {
        // statusUpdate();
        let Date = slotDate.value;
        let Time = slotTime.value;
        const currentEmail = localStorage.getItem("currentStatus");
        console.log("afterAccept -->", currentEmail);
        const updatedBookingData = bookingDataCopy.map((ele, index) => {
          console.log("f", index);
          if (ele.fEmail === currentEmail) {
            const btnvalue = mTable.children[index].children[4].children[0];
            btnvalue.style.background = "green";
            btnvalue.innerText = "Accept";

            return {
              ...ele,
              fStatus: "Accept",
              color: "green",
              bookedDate: Date,
              bookedTime: Time,
            };
          }
          bookingData = [...bookingDataCopy];
          localStorage.setItem("bookingData", JSON.stringify(bookingData));
          return ele;
        });
        localStorage.setItem(
          "bookingDataCopy",
          JSON.stringify(updatedBookingData)
        );
        successFieldAlert.style.display = "block";
        setTimeout(() => {
          successFieldAlert.style.display = "none";
          pendingform.style.display = "none";
        }, 2000);
      } else {
        acceptFieldAlert.style.display = "block";
        setTimeout(() => {
          acceptFieldAlert.style.display = "none";
        }, 3000);
      }
    }
    // after reject
    if (
      afteraccept.style.display == "none" &&
      afterreject.style.display == "block"
    ) {
      if (rejectRegionBox.value !== "") {
        let region = rejectRegionBox.value;
        const currentEmail = localStorage.getItem("currentStatus");
        console.log("afterReject -->", currentEmail);
        const updatedBookingData = bookingDataCopy.map((ele, index) => {
          if (ele.fEmail === currentEmail) {
            mTable.children[index].children[4].children[0].style.background =
              "Red";
            mTable.children[index].children[4].children[0].innerText = "Reject";

            return {
              ...ele,
              fStatus: "Reject",
              color: "Red",
              region: region,
            };
          }
          return ele;
        });
        localStorage.setItem(
          "bookingDataCopy",
          JSON.stringify(updatedBookingData)
        );

        successFieldAlert.style.display = "block";
        setTimeout(() => {
          successFieldAlert.style.display = "none";
          pendingform.style.display = "none";
        }, 2000);
      } else {
        rejectFieldAlert.style.display = "block";
        setTimeout(() => {
          rejectFieldAlert.style.display = "none";
        }, 3000);
      }
    }
  }
  let cbr = [];
  cbr = JSON.parse(localStorage.getItem("bookingDataCopy"));
  localStorage.setItem("bookingData", JSON.stringify(cbr));
  slotTime.value = "";
  slotDate.value = "";
  rejectRegionBox.value = "";
}

function changeFunc() {
  earsetarget();

  let a = 0;
  var selectBox = document.getElementById("selectBox");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  var booking = JSON.parse(localStorage.getItem("bookingDataCopy"));
  booking.map((value, index) => {
    if (booking[index].fEmail == selectedValue) {
      a = a + 1;
    }
  });
  localStorage.setItem("booking", JSON.stringify(booking));
  booking = JSON.parse(localStorage.getItem("booking"));
  book = [...bookingData];
  if (selectedValue !== "All") {
    var sort = book.filter((value) => {
      if (value.fUserEmail == selectedValue) {
        return value;
      }
    });
    if (arrowDown.classList == "active") {
      console.log("success");
      sort.sort((a, b) => {
        if (a.fName.toLowerCase() > b.fName.toLowerCase()) {
          return -1;
        }
      });
    } else {
      sort.sort((a, b) => {
        if (a.fName.toLowerCase() < b.fName.toLowerCase()) {
          return -1;
        }
      });
    }
    localStorage.setItem("booking", JSON.stringify(sort));

    booking = JSON.parse(localStorage.getItem("booking"));
    booking.map((value, index) => {
      if (booking[index].fUserEmail == selectedValue) {
        const tabelRow = ` <li class="mtable-row">
      <div class="col col-1" data-label="Job Id">${booking[index].fUserEmail}</div>
      <div class="col col-2" data-label="Customer Name">${booking[index].fName}</div>
      <div class="col col-3" data-label="Amount">${booking[index].fEmail}</div>
      <div class="col col-4" data-label="Payment Status">${booking[index].fNumber}</div>
      <div class="col col-4" data-label="Payment Status"><button class="pending" value="${booking[index].fEmail}" style="background: ${booking[index].color};"  onclick="pending()">${booking[index].fStatus}</button></div>
    </li>`;
        mTable.innerHTML += tabelRow;
      }
    });
    Pagination();
  }
  // allllll
  if (selectedValue == "All") {
    // mTable.innerHTML = "";
    // var booking = JSON.parse(localStorage.getItem("bookingDataCopy"));
    // localStorage.setItem("booking", JSON.stringify(bookingDataCopy));

    // if (arrowDown.classList == "active") {
    //   console.log("success");
    //   booking.sort((a, b) => {
    //     if (a.fName.toLowerCase() > b.fName.toLowerCase()) {
    //       return -1;
    //     }
    //   });
    // } else {
    //   booking.sort((a, b) => {
    //     if (a.fName.toLowerCase() < b.fName.toLowerCase()) {
    //       return -1;
    //     }
    //   });
    // }
    // mTable.innerHTML = "";
    // localStorage.setItem("booking", JSON.stringify(booking));

    // booking = JSON.parse(localStorage.getItem("booking"));
    // booking.map((value, index) => {
    //   const tabelRow = ` <li class="mtable-row">
    //     <div class="col col-1" data-label="Job Id">${booking[index].fUserEmail}</div>
    //     <div class="col col-2" data-label="Customer Name">${booking[index].fName}</div>
    //     <div class="col col-3" data-label="Amount">${booking[index].fEmail}</div>
    //     <div class="col col-4" data-label="Payment Status">${booking[index].fNumber}</div>
    //     <div class="col col-4" data-label="Payment Status"><button class="pending" value="${booking[index].fEmail}" style="background: ${booking[index].color};"  onclick="pending()">${booking[index].fStatus}</button></div>
    //   </li>`;
    //   mTable.innerHTML += tabelRow;
    //   // localStorage.setItem("booking", JSON.stringify(bookingDataCopy));
    // });
    // Pagination();
    firsttarget();
  }
}

function sortName() {
  changeFunc();
}

function editpopup() {
  editPopup.style.display = "block";
  editPopup2.style.display = "block";
  let str = JSON.parse(localStorage.getItem("nameEmail"));
  let dta = JSON.parse(localStorage.getItem("Data"));
  dta.map((value) => {
    if (value.sEmail == str[0].pemai) {
      document.querySelector(".ename").value = value.sName;
      document.querySelector(".eemail").value = value.sEmail;
      document.querySelector(".epassword").value = value.sPassword;
      document.querySelector(".ename2").value = value.sName;
      document.querySelector(".eemail2").value = value.sEmail;
      document.querySelector(".epassword2").value = value.sPassword;
    }
  });
}

function editProfile() {
  let count = 0;
  let fcheckName;
  let fcheckEmail;
  let fcheckPassword;
  if (
    eName.value.length !== 0 &&
    eEmail.value.length !== 0 &&
    ePassword.value.length !== 0
  ) {
    //  fName
    if (eName.value.length > 2) {
      fcheckName = true;
    } else {
      fcheckName = false;
      let fnameAlert = document.querySelector(".enamealert");
      fnameAlert.style.display = "block";
      setTimeout(function () {
        fnameAlert.style.display = "none";
      }, 3000);
    }

    // femail
    if (eEmail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      let fcheck = true;
      let str = JSON.parse(localStorage.getItem("nameEmail"));
      Data.map((arr) => {
        if (arr.sEmail == eEmail.value) {
          fcheck = false;
          console.log("false");
        }
      });
      if (str[0].pemai == eEmail.value) {
        fcheck = true;
        console.log("true");
      }
      if (fcheck == true) {
        fcheckEmail = true;
      } else {
        fcheckEmail = false;
        let femailAlert2 = document.querySelector(".eemailalert2");
        femailAlert2.style.display = "block";
        setTimeout(function () {
          femailAlert2.style.display = "none";
        }, 3000);
      }
    } else {
      checkEmail = false;
      let femailAlert1 = document.querySelector(".eemailalert1");
      femailAlert1.style.display = "block";
      setTimeout(function () {
        femailAlert1.style.display = "none";
      }, 3000);
    }

    // Password
    if (ePassword.value.length > 3) {
      fcheckPassword = true;
    } else {
      fcheckPassword = false;
      let passwordAlert = document.querySelector(".epasswordalert");
      passwordAlert.style.display = "block";
      setTimeout(function () {
        passwordAlert.style.display = "none";
      }, 3000);
    }
  } else {
    checkPassword = false;
    let floginAlert = document.querySelector(".eloginAlert");
    floginAlert.style.display = "block";
    setTimeout(function () {
      floginAlert.style.display = "none";
    }, 3000);
  }

  if (fcheckName == true && fcheckEmail == true && fcheckPassword == true) {
    let newName = document.querySelector(".ename").value;
    let newEmail = document.querySelector(".eemail").value;
    let newPassword = document.querySelector(".epassword").value;

    let str = JSON.parse(localStorage.getItem("nameEmail"));

    const bookData = bookingData.map((ele, index) => {
      if (ele.fUserEmail == str[0].pemai) {
        return {
          ...ele,
          fUserEmail: newEmail,
        };
      }
      return ele;
    });

    localStorage.setItem("bookingData", JSON.stringify(bookData));

    const updatedData = Data.map((ele, index) => {
      if (ele.sEmail == str[0].pemai) {
        console.log("end");
        return {
          ...ele,
          sEmail: newEmail,
          sName: newName,
          sPassword: newPassword,
        };
      }
      return ele;
    });
    localStorage.setItem("Data", JSON.stringify(updatedData));

    let fsuccessSinup = document.querySelector(".esuccesssinup");
    fsuccessSinup.style.display = "block";
    setTimeout(function () {
      fsuccessSinup.style.display = "none";
      hide();
    }, 2000);
    pne = {
      pname: newName,
      pemai: newEmail,
    };
    let profilename = [pne];
    localStorage.setItem("nameEmail", JSON.stringify(profilename));
    str = JSON.parse(localStorage.getItem("nameEmail"));
    userName.innerText = str[0].pname;
    userEmail.innerText = str[0].pemai;
    document.querySelector(".ename").value = newName;
    document.querySelector(".eemail").value = newEmail;
    document.querySelector(".epassword").value = newPassword;
    localStorage.setItem("bookingDataCopy", JSON.stringify(bookingData));
    localStorage.setItem("booking", JSON.stringify(bookingDataCopy));
    var data = JSON.parse(localStorage.getItem("Data"));
    localStorage.setItem("DataCopy", JSON.stringify(data));
    filter();
  }
}

function editProfile2() {
  let count = 0;
  let fcheckName;
  let fcheckEmail;
  let fcheckPassword;
  if (
    eName2.value.length !== 0 &&
    eEmail2.value.length !== 0 &&
    ePassword2.value.length !== 0
  ) {
    //  fName
    if (eName2.value.length > 2) {
      fcheckName = true;
    } else {
      fcheckName = false;
      let fnameAlert = document.querySelector(".enamealert2");
      fnameAlert.style.display = "block";
      setTimeout(function () {
        fnameAlert.style.display = "none";
      }, 3000);
    }

    // femail
    if (eEmail2.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      let fcheck = true;
      let str = JSON.parse(localStorage.getItem("nameEmail"));
      Data.map((arr) => {
        if (arr.sEmail == eEmail2.value) {
          fcheck = false;
          console.log("false");
        }
      });
      if (str[0].pemai == eEmail2.value) {
        fcheck = true;
        console.log("true");
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
      let femailAlert1 = document.querySelector(".eemailalert12");
      femailAlert1.style.display = "block";
      setTimeout(function () {
        femailAlert1.style.display = "none";
      }, 3000);
    }

    // Password
    if (ePassword2.value.length > 3) {
      fcheckPassword = true;
    } else {
      fcheckPassword = false;
      let passwordAlert = document.querySelector(".epasswordalert2");
      passwordAlert.style.display = "block";
      setTimeout(function () {
        passwordAlert.style.display = "none";
      }, 3000);
    }
  } else {
    checkPassword = false;
    let floginAlert = document.querySelector(".eloginAlert2");
    floginAlert.style.display = "block";
    setTimeout(function () {
      floginAlert.style.display = "none";
    }, 3000);
  }

  if (fcheckName == true && fcheckEmail == true && fcheckPassword == true) {
    let newName = document.querySelector(".ename2").value;
    let newEmail = document.querySelector(".eemail2").value;
    let newPassword2 = document.querySelector(".epassword2").value;

    let str = JSON.parse(localStorage.getItem("nameEmail"));

    const bookData = bookingData.map((ele, index) => {
      if (ele.fUserEmail == str[0].pemai) {
        return {
          ...ele,
          fUserEmail: newEmail,
        };
      }
      return ele;
    });
    console.log(bookingData);
    localStorage.setItem("bookingData", JSON.stringify(bookData));

    const updatedData = Data.map((ele, index) => {
      if (ele.sEmail == str[0].pemai) {
        console.log("end");
        return {
          ...ele,
          sEmail: newEmail,
          sName: newName,
          sPassword: newPassword2,
        };
      }
      return ele;
    });
    localStorage.setItem("Data", JSON.stringify(updatedData));
    let data = JSON.parse(localStorage.getItem("Data"));
    localStorage.setItem("DataCopy", JSON.stringify(data));

    let fsuccessSinup = document.querySelector(".fsuccesssinup");
    fsuccessSinup.style.display = "block";
    setTimeout(function () {
      fsuccessSinup.style.display = "none";
      hide();
    }, 2000);
    pne = {
      pname: newName,
      pemai: newEmail,
    };
    let profilename = [pne];
    localStorage.setItem("nameEmail", JSON.stringify(profilename));
    str = JSON.parse(localStorage.getItem("nameEmail"));
    adminName.innerText = str[0].pname;
    adminEmail.innerText = str[0].pemai;
    document.querySelector(".ename").value = newName;
    document.querySelector(".eemail").value = newEmail;
    document.querySelector(".epassword2").value = newPassword2;
    localStorage.setItem("bookingDataCopy", JSON.stringify(bookingData));
    localStorage.setItem("booking", JSON.stringify(bookingDataCopy));
    filter();
  }
}

function Closeslot() {
  web.style.display = "block";
  SlotDetails.style.display = "none";
}

if (localStorage.getItem("pageUpdateData")) {
  if (localStorage.pageUpdateData.length == 9) {
    container.style.display = "none";
    first.style.display = "none";
    web.style.display = "block";
    let str = JSON.parse(localStorage.getItem("nameEmail"));
    userName.innerText = str[0].pname;
    userEmail.innerText = str[0].pemai;
  }
  if (localStorage.pageUpdateData.length == 7) {
    container.style.display = "none";
    first.style.display = "none";
    lContent.style.display = "flex";
    let str = JSON.parse(localStorage.getItem("nameEmail"));
    adminName.innerText = str[0].pname;
    adminEmail.innerText = str[0].pemai;
    filter();
    changeFunc();
  }
}
