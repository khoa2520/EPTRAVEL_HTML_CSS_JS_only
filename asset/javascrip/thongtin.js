function cong1() {
  //lấy giá trị của text box
  var t = document.getElementById("textbox1").value;
  //cộng thêm 1đvi rồi gán trở lại cho textbox
  document.getElementById("textbox1").value = parseInt(t) + 1;
}

function cong2() {
  var t = document.getElementById("textbox2").value;
  document.getElementById("textbox2").value = parseInt(t) + 1;
}

function cong3() {
  var t = document.getElementById("textbox3").value;
  document.getElementById("textbox3").value = parseInt(t) + 1;
}

function cong4() {
  var t = document.getElementById("textbox4").value;
  document.getElementById("textbox4").value = parseInt(t) + 1;
}

function tru1() {
  var t = document.getElementById("textbox1").value;
  if (parseInt(t) > 0) {
    document.getElementById("textbox1").value = parseInt(t) - 1;
  }
}

function tru2() {
  var t = document.getElementById("textbox2").value;
  if (parseInt(t) > 0) {
    document.getElementById("textbox2").value = parseInt(t) - 1;
  }
}

function tru3() {
  var t = document.getElementById("textbox3").value;
  if (parseInt(t) > 0) {
    document.getElementById("textbox3").value = parseInt(t) - 1;
  }
}

function tru4() {
  var t = document.getElementById("textbox4").value;
  if (parseInt(t) > 0) {
    document.getElementById("textbox4").value = parseInt(t) - 1;
  }
}

function trove() {
  history.back();
}

//Xử lý thanh toán
var thongtin = new Array();

function themvaothanhtoan(x) {
  //ppc2c1c0c1c0
  var getHoTen =
    x.parentElement.parentElement.children[2].children[1].children[0]
      .children[1].children[0].value;
  var getEmail =
    x.parentElement.parentElement.children[2].children[1].children[1]
      .children[1].children[0].value;
  var getSDT =
    x.parentElement.parentElement.children[2].children[2].children[0]
      .children[1].children[0].value;
  var getDiaChi =
    x.parentElement.parentElement.children[2].children[2].children[1]
      .children[1].children[0].value;

  //ppc2c2c4c0c1c1
  var getSLNguoiLon =
    x.parentElement.parentElement.children[2].children[4].children[0]
      .children[1].children[1].value;
  var getSLTreEm =
    x.parentElement.parentElement.children[2].children[4].children[1]
      .children[1].children[1].value;

  var getSLTreNho =
    x.parentElement.parentElement.children[2].children[5].children[0]
      .children[1].children[1].value;
  var getSLEmBe =
    x.parentElement.parentElement.children[2].children[5].children[1]
      .children[1].children[1].value;

  var matour = unescape(getUrlParams().matour);

  var tt = new Array(
    matour,
    getHoTen,
    getEmail,
    getSDT,
    getDiaChi,
    getSLNguoiLon,
    getSLTreEm,
    getSLTreNho,
    getSLEmBe
  );

  thongtin.push(tt);

  sessionStorage.setItem("thongtin", JSON.stringify(thongtin));
}

function gotoThanhToan(id) {
  var hoten = document.getElementById("hoTen").value;
  var sdt = document.getElementById("sdt").value;
  if (hoten != "" && sdt != "") {
    window.location.href = "thanhtoan.html?id=" + id;
  } else {
    alert("Vui lòng điền thông tin trước khi thanh toán");
  }
}
