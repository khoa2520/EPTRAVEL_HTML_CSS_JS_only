window.onload= function(){
 
  $(document).ready(function () {
    $(".slider-one").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
    });
  });
  
  $(document).ready(function () {
    $(".slider-three").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true,
      autoplay: false,
      autoplaySpeed: 7000,
      responsive: [
        {
          breakpoint: 1242,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1010,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ],
      prevArrow:
        '<button type="button" class="slick-prev pull-left"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next pull-right"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></button>',
    });
  });
  
  $(document).ready(function () {
    $(".home__hot-tour--item").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 1242,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1010,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ],
      prevArrow:
        '<button type="button" class="slick-prev pull-left"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next pull-right"><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></button>',
    });
  });
  var us = localStorage.getItem("User_login");
var user = JSON.parse(us);
  if (user.length == 1) {
    document.getElementsByClassName("modal")[0].style.display = "none";
    document.getElementById("user-icon").style.backgroundImage =
      "url(" + "'" + user[0][5] + "'" + ")";
    document.getElementById("user-icon").style.backgroundPosition = "center";
    document.getElementById("user-icon").style.backgroundSize = "45px";
    document.getElementById("user-icon").style.borderRadius = "50px";
    document.getElementById("user-icon").style.border = "1px solid white";
    document.getElementById("user-icon").style.width = "36px";
  }

  //mode Đăng xuất
  var dangXuat_attri = 'document.getElementById("user-icon").style.backgroundImage = "' +
  "url('./asset/images/ICON/user.png')" +
  '";document.getElementById("user-icon").style.backgroundSize = "32px"; document.getElementById("user-icon").style.border = "none";document.getElementById("dangnhap__id").innerText = "Đăng Nhập";document.getElementById("modal__container").style.display="flex";document.getElementById("modal__container").style.display="flex";document.querySelector("#user-block").style.display = "none";localStorage.removeItem("User_login");document.getElementById("yeuthich_index").style.display="none"'

  document.getElementById("dangnhap__id").innerText = "Đăng Xuất";
  document.getElementById("dangnhap").setAttribute('onclick', dangXuat_attri)

   // Xử lý hiển thị số tour yêu Thích
   var yt_index = sessionStorage.getItem("yeuthich");
   var yeuthich_index = JSON.parse(yt_index);
   if (sessionStorage.getItem("yeuthich") === null||yeuthich_index.length == 0) {
     document.getElementById("yeuthich_index").style.display = "none";
   } else {
     document.getElementById("yeuthich_index").style.display = "block";
     document.getElementById("yeuthich_index").innerHTML = yeuthich_index.length;
   }
}