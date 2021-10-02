const mTable = document.getElementById("mresponsive-table");
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
// const optionSelector = document.querySelector(".optionselector");

pagination2.addEventListener("click", earsetarget);
pagination2.addEventListener("click", target);
// optionSelector.addEventListener("click", selector);

const numberOfItems = bookingData.length;
const numberPerPage = 5;
const currentPage = 1;
const numberOfPages = Math.ceil(numberOfItems / numberPerPage);

// pagination2.innerHTML += `<li class="page-number prev"><a class="apage-number" href="#">&laquo;</a></li>`;
for (var a = 1; a <= numberOfPages; a++) {
  const page = `<li class="page-number" id="page-number"><a href="#">${a}</a></li>`;
  pagination2.innerHTML += page;
}
// pagination2.innerHTML += `<li class="page-number prev"><a href="#">&raquo;</a></li>`;

function firsttarget() {
  var i = 1;
  const trimStart = (i - 1) * numberPerPage;
  const trimEnd = trimStart + numberPerPage;

  for (var j = trimStart; trimEnd > j; j++) {
    const tabelRow = ` <li class="mtable-row">
    <div class="col col-1" data-label="Job Id">${bookingData[j].fUserEmail}</div>
    <div class="col col-2" data-label="Customer Name">${bookingData[j].fName}</div>
    <div class="col col-3" data-label="Amount">${bookingData[j].fEmail}</div>
    <div class="col col-4" data-label="Payment Status">${bookingData[j].fNumber}</div>
    <div class="col col-4" data-label="Payment Status"><button class="pending" value="${bookingData[j].fEmail}"  onclick="pending()">${bookingData[j].fStatus}</button></div>
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
  <div class="col col-1" data-label="Job Id">${bookingData[j].fUserEmail}</div>
  <div class="col col-2" data-label="Customer Name">${bookingData[j].fName}</div>
  <div class="col col-3" data-label="Amount">${bookingData[j].fEmail}</div>
  <div class="col col-4" data-label="Payment Status">${bookingData[j].fNumber}</div>
  <div class="col col-4" data-label="Payment Status"><button class="pending" value="${bookingData[j].fEmail}" onclick="pending()">${bookingData[j].fStatus}</button></div>
</li>`;
    mTable.innerHTML += tabelRow;
  }
}

function logoutPage() {
  if ((lContent.style.display = "flex")) {
    container.style.display = "block";
    first.style.display = "block";
    lContent.style.display = "none";
    earsetarget();
  }

  if ((web.style.display = "block")) {
    container.style.display = "block";
    first.style.display = "block";
    web.style.display = "none";
  }
}

function filter() {
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
  bookingData.map((value, index) => {
    if (bookingData[index].fEmail == selectedValue) {
      a = a + 1;
    }
  });
  bookingData.map((value, index) => {
    if (bookingData[index].fUserEmail == selectedValue) {
      const tabelRow = ` <li class="mtable-row">
      <div class="col col-1" data-label="Job Id">${bookingData[index].fUserEmail}</div>
      <div class="col col-2" data-label="Customer Name">${bookingData[index].fName}</div>
      <div class="col col-3" data-label="Amount">${bookingData[index].fEmail}</div>
      <div class="col col-4" data-label="Payment Status">${bookingData[index].fNumber}</div>
      <div class="col col-4" data-label="Payment Status"> <button class="pending" value="${bookingData[index].fEmail}"  onclick="pending()>${bookingData[index].fStatus}</button></div>
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
  console.log(val);
  const pendingform = document.getElementById("lpopup");
  pendingform.style.display = "block";
}

function afterAccept() {
  afteraccept.style.display = "block";
  afterreject.style.display = "none";
}
function afterReject() {
  afteraccept.style.display = "none";
  afterreject.style.display = "block";
}

function submitslot(e) {
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
        statusUpdate();
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
        statusUpdate();
      } else {
        rejectFieldAlert.style.display = "block";
        setTimeout(() => {
          rejectFieldAlert.style.display = "none";
        }, 3000);
      }
    }
  }
}
