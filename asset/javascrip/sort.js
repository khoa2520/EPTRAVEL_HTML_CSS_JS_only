function ascending() {
    document.getElementById("category").innerHTML = "";
  var xmlhttp = new XMLHttpRequest();
  var url = "asset/data/tour.json";
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      ascending_2(myArr);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  function ascending_2(arr) {
    let i = document.getElementById("sapxep-select").value;
    arr = arr.sort(function (a, b) {
      if (i == "thap-cao") {
        return a.giatiennguoilon*(100-a.giamgia)/100 - b.giatiennguoilon*(100-b.giamgia)/100;
      } else if (i == "cao-thap") {
        return b.giatiennguoilon*(100-b.giamgia)/100 - a.giatiennguoilon*(100-a.giamgia)/100;
      } else if(i =='theogiamgia') {
        return b.giamgia*b.giatiennguoilon/100 - a.giamgia*a.giatiennguoilon/100
      }
    });
    myFunction(arr);
  }
}