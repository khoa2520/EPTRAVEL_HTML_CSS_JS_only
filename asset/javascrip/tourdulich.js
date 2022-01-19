var xmlhttp = new XMLHttpRequest();
var url = "asset/data/tour.json";
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
    myFunction_loc(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function goThongtin(id) {
    window.location.href = "thongtin.html?matour=" + id;
}
function goChiTiet(id) {
  window.location.href = "chitiettour.html?matour=" + id;
}
function myFunction(arr) {
  var div = "<div class='locsanpham-tour'>";
  var i;
  for (i = 0; i < arr.length; i++) {
    var close_del = "";
    var open_del = "";
    var giaSauKM = 0;
    var giaSauKM_element = "";
    var red_style = "";

    // Quốc gia
    var quocgia = "";
    if (arr[i].quocgia == "Tour du lịch trong nước") {
      quocgia = "trongnuoc";
    } else if (arr[i].quocgia == "Tour du lịch nước ngoài") {
      quocgia = "ngoainuoc";
    }

    // Khu vực
    var khuvuc = "";
    khuvuc = removeVietnameseTones(arr[i].khuvuc)
      .replace(/\s/g, "")
      .toLowerCase();
    

    //Điểm đi
    var diemdi = "";
    if (arr[i].noikhoihanh == "TP. Hồ Chí Minh") {
      diemdi = "hcm";
    } else if (arr[i].noikhoihanh == "Hà Nội") {
      diemdi = "hanoi";
    }

    //Điểm đến
    var diemden = "";
    diemden = removeVietnameseTones(arr[i].diemden)
      .replace(/\s/g, "")
      .toLowerCase();

    // Số ngày tour
    var ngaytour = "";
    ngaytour = removeVietnameseTones(arr[i].thoigian)
      .replace(/\s/g, "")
      .toLowerCase();
    if (arr[i].giamgia != 0) {
      open_del = "<del>";
      close_del = "</del>";
      giaSauKM = (arr[i].giatiennguoilon * (100 - arr[i].giamgia)) / 100;
      var giaSauKM_element = "<span>" + formatNumber(giaSauKM) + "đ</span>";
    }else{
      red_style = 'style="color: #ff0000;"'
    }
    
    if (arr[i].giamgia != 0) {
    }

    div +=
      "<div class='tour-item showTour " +
      quocgia +
      " " +
      khuvuc +
      " " +
      diemdi +
      " " +
      diemden +
      " " +
      ngaytour +
      "'><div class='tour-item__image'><img src='" +
      arr[i].images[0] +
      "'alt='" +
      arr[i].ten_tour +
      "'></div><div class='card-body'><div  class='tour-item__title'><h3>" +
      arr[i].ten_tour +
      "</h3></div><div class='detail-content'><p class='tour-item__code'> Mã Tour: <span>" +
      arr[i].ma_tour +
      "</span></p><p class='tour-item__departure'>Nơi khởi hành: <span>" +
      arr[i].noikhoihanh +
      "</span></p><div class='tour-item__price--current__number--old'>Giá " +
      open_del +
      '<span ' + red_style  +'>' +
      formatNumber(arr[i].giatiennguoilon) +
      "đ" +
      close_del +
      "</span>/Khách</div><div class='tour-item__price--current__number' id='tour-item__price--current__number'>" +
      giaSauKM_element +
      "</div></div><div class='tour-item__price--current'><button  class='btn btn-book' onclick=" +
      "goThongtin(" +
      "'" +
      arr[i].ma_tour +
      "'" +
      ")" +
      "><span id='icon'><img src='./asset/images/ICON/cart.png' alt='Đặt hàng'></span> Đặt ngay</button><button class='btn btn-block' onclick='goChiTiet(" +
      '"' +
      arr[i].ma_tour +
      '"' +
      ")'>Xem chi tiết</button></div><button style='z-index: 10;' onclick='themyeuthich_tour(this)' class='yeuthich'><span id='icon'><img src='./asset/images/ICON/plus.png'alt='plus'></span> Thêm vào yêu thích</button></div></div>";
  }
  div += "</div>";
  document.getElementById("category").innerHTML = div;
}
function themyeuthich_tour(x) {
  if (localStorage.getItem("User_login") === null) {
    alert("Cần phải đăng nhập trước khi thêm vào Yêu Thích");
    document.getElementById("modal__container").style.display = "flex";
  } else {
    //Lấy ID bằng click  -> DOM
    var id = x.parentElement.children[1].children[0].children[0].innerText;
    // alert(id);
    var yt = new Array(id);
    var title = x.parentElement.children[0].innerText; //Lấy title
    for (var i = 0; i < yeuthich.length; i++) {
      if (yeuthich[i][0] == id) {
        return alert("Tour" + title + " đã có sẵn trong danh mục yêu thích");
      }
    }
    yeuthich.push(yt);
    alert(title + " đã được thêm vào yêu thích");

    //Lưu giỏ hàng
    sessionStorage.setItem("yeuthich", JSON.stringify(yeuthich));

    document.getElementById("yeuthich_index").style.display = 'block';
    var yt_index = sessionStorage.getItem("yeuthich");
    var yeuthich_index = JSON.parse(yt_index);
    document.getElementById("yeuthich_index").innerHTML = yeuthich_index.length;
  }
}
//sắp xếp tour

function myFunction_loc(arr) {
  var arrKhuVuc_tn = new Array();
  var arrKhuVuc_nn = new Array();

  var arrDiemDen_tn = new Array();
  var arrDiemDen_nn = new Array();

  var arrSoNgayTour = new Array();
  for (i = 0; i < arr.length; i++) {
    if (arr[i].quocgia == "Tour du lịch trong nước") {
      arrKhuVuc_tn.push(arr[i].khuvuc);
      arrDiemDen_tn.push(arr[i].diemden);
    }
    if (arr[i].quocgia == "Tour du lịch nước ngoài") {
      arrKhuVuc_nn.push(arr[i].khuvuc);
      arrDiemDen_nn.push(arr[i].diemden);
    }

    arrSoNgayTour.push(arr[i].thoigian);
  }
  arrKhuVuc_tn = arrKhuVuc_tn.filter(
    (item, index) => arrKhuVuc_tn.indexOf(item) === index
  );
  arrKhuVuc_nn = arrKhuVuc_nn.filter(
    (item, index) => arrKhuVuc_nn.indexOf(item) === index
  );

  arrDiemDen_tn = arrDiemDen_tn.filter(
    (item, index) => arrDiemDen_tn.indexOf(item) === index
  );
  arrDiemDen_nn = arrDiemDen_nn.filter(
    (item, index) => arrDiemDen_nn.indexOf(item) === index
  );

  arrSoNgayTour = arrSoNgayTour.filter(
    (item, index) => arrSoNgayTour.indexOf(item) === index
  );
  var div =
    '<h2>LỌC KẾT QUẢ</h2><div><select onchange="locQuocGia(); " name="quocgia" id="quocgia" class=" select-item"><option value="0" id="op_none">--Chọn quốc gia--</option><option id="op_trongnuoc" value="1">Tour trong nước</option><option value="2" id="op_ngoainuoc">Tour ngoài nước</option></select></div><div ><select onclick="locKhuVuc()" name="khuvuc" id="khuvuc" class=" select-item"><option value="0">--Chọn khu vực--</option>';

  for (var i = 0; i < arrKhuVuc_tn.length; i++) {
    div +=
      '<option class="TrongNuoc-distinguish" value="' +
      arrKhuVuc_tn[i] +
      '">' +
      arrKhuVuc_tn[i] +
      "</option>";
  }
  for (var i = 0; i < arrKhuVuc_nn.length; i++) {
    div +=
      '<option class="NgoaiNuoc-distinguish" value="' +
      arrKhuVuc_nn[i] +
      '">' +
      arrKhuVuc_nn[i] +
      "</option>";
  }

  div +=
    '</select></div><div><select onchange="locDiemDi()" name="diemdi"id="diemdi" class=" select-item"><option value="0">--Điểm đi--</option><option value="Hà Nội">Hà Nội</option><option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option></select></div><div><select onchange="locDiemDen()" name="diemden" id="diemden" class="select-item"><option  value="0">--Điểm đến--</option>';

  for (var i = 0; i < arrDiemDen_tn.length; i++) {
    div +=
      '<option class="TrongNuoc-distinguish" value="' +
      arrDiemDen_tn[i] +
      '">' +
      arrDiemDen_tn[i] +
      "</option>";
  }
  for (var i = 0; i < arrDiemDen_nn.length; i++) {
    div +=
      '<option class="NgoaiNuoc-distinguish" value="' +
      arrDiemDen_nn[i] +
      '">' +
      arrDiemDen_nn[i] +
      "</option>";
  }

  div +=
    '</select></div><div><select name="songaytour" id="songaytour" onchange="locSoNgay()" class="select-item"><option value="0">--Số ngày tour--</option>';

  for (var i = 0; i < arrSoNgayTour.length; i++) {
    div +=
      '<option value="' +
      arrSoNgayTour[i] +
      '">' +
      arrSoNgayTour[i] +
      "</option>";
  }

  div += "</select></div>";
  document.getElementById("locSanPham").innerHTML = div;
}

function locQuocGia() {
  var value = document.getElementById("quocgia").value;
  var tn = document.getElementsByClassName("TrongNuoc-distinguish");
  var nn = document.getElementsByClassName("NgoaiNuoc-distinguish");

  if (value === "0") {
    filterSelection("tour-item");
    document.getElementById("title_dich_mien").innerText = "Tour du lịch ";
    for (i = 0; i < tn.length; i++) {
      tn[i].style.display = "block";
    }
    for (i = 0; i < nn.length; i++) {
      nn[i].style.display = "block";
    }
  } else if (value === "1") {
    filterSelection("trongnuoc");
    document.getElementById("title_dich_mien").innerText =
      "Tour du lịch trong nước";

    for (i = 0; i < tn.length; i++) {
      tn[i].style.display = "block";
    }
    for (i = 0; i < nn.length; i++) {
      nn[i].style.display = "none";
    }
  } else if (value === "2") {
    filterSelection("ngoainuoc");
    document.getElementById("title_dich_mien").innerText =
      "Tour du lịch ngoài nước";

    for (i = 0; i < tn.length; i++) {
      tn[i].style.display = "none";
    }
    for (i = 0; i < nn.length; i++) {
      nn[i].style.display = "block";
    }
  }
}

function locKhuVuc() {
  var value = document.getElementById("khuvuc").value;
  var value_quocgia = document.getElementById("quocgia").value;
  if (value_quocgia === "0") {
    value_quocgia = "tour-item";
  }
  if (value_quocgia === "1") {
    value_quocgia = "trongnuoc";
  }
  if (value_quocgia === "2") {
    value_quocgia = "ngoainuoc";
  }
  document.getElementById("title_dich_mien").innerText = "Du lịch " + value;
  if (value === "0") {
    document.getElementById("title_dich_mien").innerText = "Tour du lịch ";
    filterSelection(value_quocgia);
  }
  if (value === "Miền Nam") {
    filterSelection("miennam");
  }
  if (value === "Miền Bắc") {
    filterSelection("mienbac");
  }
  if (value === "Miền Trung") {
    filterSelection("mientrung");
  }
  if (value === "Châu Á") {
    filterSelection("chaua");
  }
  if (value === "Châu Âu") {
    filterSelection("chauau");
  }
  if (value === "Châu Mỹ") {
    filterSelection("chaumy");
  }
}

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  return str;
}
// Lọc điểm đi
function locDiemDi() {
  var value = document.getElementById("diemdi").value;
  var value_quocgia = document.getElementById("quocgia").value;
  var value_khuvuc = document.getElementById("khuvuc").value;
  if (value_khuvuc != 0) {
    var khuvuc = removeVietnameseTones(value_khuvuc)
      .replace(/\s/g, "")
      .toLowerCase();

    if (value === "0") {
      filterSelection(khuvuc + " tour-item");
    }
    if (value === "Hà Nội") {
      // alert(khuvuc + " hanoi");
      filterSelection(khuvuc + " hanoi");
    }
    if (value === "TP. Hồ Chí Minh") {
      // alert(khuvuc + " hcm");
      filterSelection(khuvuc + " hcm");
    }
  }

  if (value_khuvuc == 0 && value_quocgia == 0) {
    if (value === "0") {
      filterSelection("tour-item");
    }
    if (value === "Hà Nội") {
      filterSelection("hanoi");
    }
    if (value === "TP. Hồ Chí Minh") {
      filterSelection("hcm");
    }
  }
}

function locDiemDen() {
  var value = document.getElementById("diemden").value;
  var arr = document.getElementById("diemden").options;
  var i = 0;
  for (i = 1; i <= arr.length; i++) {
    if (value == arr[i].innerText) {
      filterSelection(
        removeVietnameseTones(arr[i].innerText).replace(/\s/g, "").toLowerCase()
      );
    }
  }
}

function locSoNgay() {
  var value = document.getElementById("songaytour").value;
  var arr = document.getElementById("songaytour").options;
  var i = 0;
  for (i = 1; i <= arr.length; i++) {
    if (value == arr[i].innerText) {
      filterSelection(
        removeVietnameseTones(arr[i].innerText).replace(/\s/g, "").toLowerCase()
      );
    }
  }
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("tour-item");
  if (c == "showTour") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "showTour");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "showTour");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
