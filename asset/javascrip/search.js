function formatNumber(num) {
  var n = Number(num);
  return n.toLocaleString("vi");
}

function searchFunc() {
  let menusearch = document.querySelector("#menu__search");

  let menuitems = Array.from(document.querySelectorAll(".menu__item"));
  menusearch.value = menusearch.value.toLowerCase();

  menuitems.forEach(function (el) {
    let text = el.innerText.toLowerCase();
    if (text.indexOf(menusearch.value) > -1) {
        document.querySelector('#search__list').style.display = 'block';
        el.style.display = "flex";
    } else el.style.display = "none";

    if (menusearch.value == "") {
      el.style.display = "none";
    document.getElementById('search__list').style.display = 'none'
    }
  });
}

var xmlhttp = new XMLHttpRequest();
var url = "asset/data/tour.json";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    loadSearch(myArr);
  }
};

xmlhttp.open("GET", url, true); //ra lệnh
xmlhttp.send(); //thực hiênn

function loadSearch(arr) {
  var i;
  var div = '';
  for (i = 0; i < arr.length; i++) {
    div +='<li onclick="gotoChiTiet('+ "'" +arr[i].ma_tour + "'" +')" class="menu__item"><img src="'+ arr[i].images[3] +'" width="150px" alt="Error"><span><span>'+ arr[i].ten_tour +'</span></br><span id="giatien">'+ formatNumber(arr[i].giatiennguoilon) +'đ</span><span>Mã tour: '+ arr[i].ma_tour +'</span></span></span></li>'
      
  }

  div += "</div>";
  document.getElementById("search__list").innerHTML = div;
}

function gotoChiTiet(id){
    window.location.href = "chitiettour.html?matour=" +  id
}


function searchFunc_yeuthich() {
  let menusearch = document.querySelector("#menusearch");
  
  
  let menuitems = Array.from(document.querySelectorAll(".yeuthich-tourbox"));
  

  menusearch.value = menusearch.value.toLowerCase();


  menuitems.forEach(function (se) {
    let text = se.innerText.toLowerCase();
    if (text.indexOf(menusearch.value) > -1) {
        document.querySelector('#likelist').style.display = 'block';
        se.style.display = "flex";
    } else se.style.display = "none";

    if (menusearch.value == "") {
    document.getElementById('likelist').style.display = 'block !important'
    }
  });
}