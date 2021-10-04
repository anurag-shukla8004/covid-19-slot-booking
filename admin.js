const mTable = document.getElementById("mresponsive-table");
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

const numberOfItems = bookingData.length;
const numberPerPage = 3;
const currentPage = 1;
const numberOfPages = Math.ceil(numberOfItems / numberPerPage);

// pagination2.innerHTML += `<li class="page-number prev"><a class="apage-number" href="#">&laquo;</a></li>`;
for (var a = 1; a <= numberOfPages; a++) {
  const page = `<li class="page-number" id="page-number"><a href="#">${a}</a></li>`;
  pagination2.innerHTML += page;
}
// pagination2.innerHTML += `<li class="page-number prev"><a href="#">&raquo;</a></li>`;

// sort Name
bookingDataCopy = [...bookingData];
localStorage.setItem("bookingDataCopy", JSON.stringify(bookingDataCopy));
bookingDataCopy.sort((a, b) => {
  if (a.fName.toLowerCase() < b.fName.toLowerCase()) {
    return -1;
  }
});

function firsttarget() {
  var i = 1;
  const trimStart = (i - 1) * numberPerPage;
  const trimEnd = trimStart + numberPerPage;

  for (var j = trimStart; trimEnd > j; j++) {
    const tabelRow = ` <li class="mtable-row">
    <div class="col col-1" data-label="Job Id">${bookingDataCopy[j].fUserEmail}</div>
    <div class="col col-2" data-label="Customer Name">${bookingDataCopy[j].fName}</div>
    <div class="col col-3" data-label="Amount">${bookingDataCopy[j].fEmail}</div>
    <div class="col col-4" data-label="Payment Status">${bookingDataCopy[j].fNumber}</div>
    <div class="col col-4" data-label="Payment Status"><button class="pending" value="${bookingDataCopy[j].fEmail}" style="background: ${bookingDataCopy[j].color};"  onclick="pending()">${bookingDataCopy[j].fStatus}</button></div>
  </li>`;
    mTable.innerHTML += tabelRow;
  }
}

function earsetarget() {
  mTable.innerHTML = "";
}
function target(e) {
  const item = e.target;
  let i = item.children[0].innerText;
  const trimStart = (i - 1) * numberPerPage;
  const trimEnd = trimStart + numberPerPage;

  for (var j = trimStart; trimEnd > j; j++) {
    const tabelRow = ` <li class="mtable-row">
  <div class="col col-1" data-label="Job Id">${bookingDataCopy[j].fUserEmail}</div>
  <div class="col col-2" data-label="Customer Name">${bookingDataCopy[j].fName}</div>
  <div class="col col-3" data-label="Amount">${bookingDataCopy[j].fEmail}</div>
  <div class="col col-4" data-label="Payment Status">${bookingDataCopy[j].fNumber}</div>
  <div class="col col-4" data-label="Payment Status"><button class="pending" value="${bookingDataCopy[j].fEmail}" style="background: ${bookingDataCopy[j].color};"  onclick="pending()">${bookingDataCopy[j].fStatus}</button></div>
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
  const option = `<option class="optionselector">All</option>`;
  optionfilter.innerHTML += option;
  Data.map((value, index) => {
    const i = Data[index].sEmail;
    const option = `<option class="optionselector">${i}</option>`;
    optionfilter.innerHTML += option;
  });
}

function changeFunc() {
  earsetarget();

  let a = 0;
  var selectBox = document.getElementById("selectBox");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  bookingDataCopy.map((value, index) => {
    if (bookingDataCopy[index].fEmail == selectedValue) {
      a = a + 1;
    }
  });
  bookingDataCopy.map((value, index) => {
    if (bookingDataCopy[index].fUserEmail == selectedValue) {
      const tabelRow = ` <li class="mtable-row">
      <div class="col col-1" data-label="Job Id">${bookingDataCopy[index].fUserEmail}</div>
      <div class="col col-2" data-label="Customer Name">${bookingDataCopy[index].fName}</div>
      <div class="col col-3" data-label="Amount">${bookingDataCopy[index].fEmail}</div>
      <div class="col col-4" data-label="Payment Status">${bookingDataCopy[index].fNumber}</div>
      <div class="col col-4" data-label="Payment Status"><button class="pending" value="${bookingDataCopy[index].fEmail}" style="background: ${bookingDataCopy[index].color};"  onclick="pending()">${bookingDataCopy[index].fStatus}</button></div>
    </li>`;
      mTable.innerHTML += tabelRow;
    }
  });
  if (selectedValue == "All") {
    earsetarget();
    firsttarget();
  }
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
}

function sortName() {
  const item = this.event.target;
  if (item.children[0].classList == "active") {
    bookingDataCopy = [...bookingData];
    bookingDataCopy.sort((a, b) => {
      if (a.fName.toLowerCase() > b.fName.toLowerCase()) {
        return -1;
      }
    });
    mTable.innerHTML = "";
    firsttarget();
    console.log("decending");
  } else {
    bookingDataCopy = [...bookingData];
    bookingDataCopy.sort((a, b) => {
      if (a.fName.toLowerCase() < b.fName.toLowerCase()) {
        return -1;
      }
    });
    mTable.innerHTML = "";
    firsttarget();
  }
}

if (localStorage.getItem("pageUpdateData")) {
  if (localStorage.pageUpdateData.length == 9) {
    container.style.display = "none";
    first.style.display = "none";
    web.style.display = "block";
  }
  if (localStorage.pageUpdateData.length == 7) {
    container.style.display = "none";
    first.style.display = "none";
    lContent.style.display = "flex";
    filter();
    firsttarget();
  }
}
