function login(x) {
  var xmlhttp_u = new XMLHttpRequest();
  var url_u = "asset/data/user.json";

  xmlhttp_u.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myArr_u = JSON.parse(this.responseText);
      user(myArr_u);
    }
  };

  xmlhttp_u.open("GET", url_u, true); //ra lệnh
  xmlhttp_u.send(); //thực hiênn

  function user(arr) {
    var div = "";
    var i;
    var eMail = x.parentElement.children[2].value;
    var mk = x.parentElement.children[8].value;
    // alert(getUserID);
    var valid = true;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].eMail == eMail && arr[i].matKhau == mk) {
        alert("Đăng nhập thành công :v");
        document.getElementsByClassName("modal")[0].style.display = "none";
        document.getElementById("user-icon").style.backgroundImage =
          "url(" + "'" + arr[i].avar_img + "'" + ")";
        document.getElementById("user-icon").style.backgroundPosition =
          "center";
        document.getElementById("user-icon").style.backgroundSize = "45px";
        document.getElementById("user-icon").style.borderRadius = "50px";
        document.getElementById("user-icon").style.border = "1px solid white";
        document.getElementById("user-icon").style.width = "36px";
        var user = new Array();
        var u = new Array(
          arr[i].userID,
          arr[i].hoTen,
          arr[i].eMail,
          arr[i].diDong,
          arr[i].diaChi,
          arr[i].avar_img
        );

        user.push(u);

        localStorage.setItem("User_login", JSON.stringify(user));

        valid = true;

        //mode Đăng xuất
        var dangXuat_attri =
          'document.getElementById("user-icon").style.backgroundImage = "' +
          "url('./asset/images/ICON/user.png')" +
          '";document.getElementById("user-icon").style.backgroundSize = "32px"; document.getElementById("user-icon").style.border = "none";document.getElementById("dangnhap__id").innerText = "Đăng Nhập";document.getElementById("modal__container").style.display="flex";document.getElementById("modal__container").style.display="flex";document.querySelector("#user-block").style.display = "none";localStorage.removeItem("User_login");document.getElementById("yeuthich_index").style.display="none"';

        document.getElementById("dangnhap__id").innerText = "Đăng Xuất";
        document
          .getElementById("dangnhap")
          .setAttribute("onclick", dangXuat_attri);



        break;
      } else {
        valid = false;
      }
    }
    if (valid == false) {
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  }
}
