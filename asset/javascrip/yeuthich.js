var yeuthich = new Array();
var kt = yeuthich.length;

function themvaoyeuthich(x) {
  
  //Lấy ID bằng click  -> DOM
  var getID = x.parentElement.children;
  var id = getID[1].children[0].innerText;
  var yt = new Array(id);
  var title = getID[0].children[0].innerText; //Lấy title
  for (var i = 0; i < yeuthich.length; i++) {
    if (yeuthich[i][0] == id) {
      return alert("Tour" + title + " đã có sẵn trong danh mục yêu thích");
    }
  }
  yeuthich.push(yt);

  alert(title + " đã được thêm vào yêu thích");

  //Lưu giỏ hàng
  sessionStorage.setItem("yeuthich", JSON.stringify(yeuthich));
}

function xoayeuthich_store(x) {
  var mt = x.parentElement;
  var matour = mt.parentElement.children[1].children[1].children[1].innerText;

  alert("Đã xóa Tour: " + matour + " ra khỏi danh sách yêu thích");


  //Xóa sp trong mảng
  var yt = sessionStorage.getItem("yeuthich");
  var yeuthich = JSON.parse(yt);

  for (let i = 0; i < yeuthich.length; i++) {
    if (yeuthich[i][0] == matour) {
      yeuthich.splice(i, 1);
    }
  }
  sessionStorage.setItem("yeuthich", JSON.stringify(yeuthich));

  document.getElementById("yeuthich_index").innerText = yeuthich.length;

  mt.parentElement.remove();
}

//Sắp xếp
function ascending_yeuthich() {
  var yt = sessionStorage.getItem("yeuthich");
  var yeuthich = JSON.parse(yt);

  document.getElementById("likelist").innerHTML = "";
  var xmlhttp = new XMLHttpRequest();
  var url = "asset/data/tour.json";
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      ascending_yeuthich_2(myArr);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  function ascending_yeuthich_2(arr) {
    let i = document.getElementById("sapXepYeuThich").value;
    arr = arr.sort(function (a, b) {
      if (i == "thap_cao") {
        return (
          (a.giatiennguoilon * (100 - a.giamgia)) / 100 -
          (b.giatiennguoilon * (100 - b.giamgia)) / 100
        );
      } else if (i == "cao_thap") {
        return (
          (b.giatiennguoilon * (100 - b.giamgia)) / 100 -
          (a.giatiennguoilon * (100 - a.giamgia)) / 100
        );
      } else if (i == "theogiamgia") {
        return (
          (b.giamgia * b.giatiennguoilon) / 100 -
          (a.giamgia * a.giatiennguoilon) / 100
        );
      }
    });
    threeFamous(arr);
  }
}
