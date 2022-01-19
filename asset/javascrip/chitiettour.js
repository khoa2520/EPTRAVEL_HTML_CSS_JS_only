function goThongTin(matour) {
    window.location.href = "detail.html?matour=" + matour;
}
function goThongtin(id) {
    window.location.href = "thongtin.html?matour=" + id;
}
var xmlhttp = new XMLHttpRequest();
var url = "asset/data/tour.json";
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();
function myFunction(arr) {
    var div = "<div class='tong'>";
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].ma_tour == matour) {
            div += "<div class='container-x1'><div class='row--tour'><div class='row--tour__left'><p class='tour-item__code'>Mã tour: <b>" +
                arr[i].ma_tour + "</b></p><h3 class='tour-item__title'>" +
                arr[i].ten_tour + "</h3><div class='short-rating'><div class='rating'><span id='icon'><img src='./asset/images/ICON/heart_w.png' alt='tym'></span><label>100</label></div><button onclick='themyeuthich_chitiettour(this)' class='yeuthich'><span id='icon'><img src='./asset/images/ICON/plus.png'alt='plus'></span> Thêm vào yêu thích</button></div></div><div class='row--tour__right'><div class='tour-item__price--current__number'><span id='tour-item__price--current__number'>" +
                formatNumber(arr[i].giatiennguoilon) + "đ</span>/Khách</div><div class='tour-item__price--addcart'><button  class='btn btn-book' onclick=" +
                "goThongtin(" +
                "'" +
                arr[i].ma_tour +
                "'" +
                ")" +
                "><span id='icon'><img src='./asset/images/ICON/cart.png' alt='Đặt hàng'></span>   Đặt ngay</button><button class='btn btn-block' onclick='window.location.href="+'"lienhe.html"'+"'>Liên hệ tư vấn</button></div></div></div></div><div class='tour--detail'><div class='row--tour--img'><div class='tour--img__first'><img id='img-tour' src='" +
                arr[i].images[1] + "' alt='YT'></div><div class='tour--img__last'><div class='tour--img'><div class='img margin-img' style='margin-right: 10px;'><img id='img-tour' src='" +
                arr[i].images[2] + "' alt='BD'></div><div class='img'><img id='img-tour' src='" +
                arr[i].images[3] + "' alt='VHL'></div></div><div class='tour--img' style='margin-top:10px'><img id='img-tour' src='" +
                arr[i].images[4] + "' alt='TA'></div></div></div><div class='row--content'><div class='motatour--content'>" +
                arr[i].noidungchitiet + "</div><div class='overviewtour--content'><div class='box-order'><div class='time'><p>Ngày khởi hành: <b>" +
                arr[i].ngaykhoihanh + "</b></p><p>Thời gian: <b>" +
                arr[i].thoigian + "</b></p><p>Nơi khởi hành: <b> " +
                arr[i].noikhoihanh + "</b></p><p> Phương tiện di chuyển: <b> " +
                arr[i].phuongtiendichuyen + "</b></p><p>Số chỗ còn nhận: <b>" +
                arr[i].sochoconnhan + "</b></p></div><div class='calendar'><div class='calendar-box'><span id='icon'><img src='asset/images/ICON/calenda.png' alt='calendar'></span><label><a href='tourdulich.html'> Ngày khác</a></label></div></div></div><div class='box-diemthamquan'><h4>Các điểm tham quan</h4><p>" +
                arr[i].diadiemthamquan + "</p></div><div><h4>Khách sạn</h4><p>" +
                arr[i].khachsan + "</p></div></div></div></div><div class='row--lichtrinh'><h3>Lịch trình</h3><hr><div class='row--lichtrinh__item'>" +
                arr[i].lichtrinh + "</div>"
        }
    }
    div += "</div>";
    document.getElementById("chitiettour-content").innerHTML = div;
}
var yeuthich = new Array();
function themyeuthich_chitiettour(x) {
    if (localStorage.getItem("User_login") === null) {
        alert("Cần phải đăng nhập trước khi thêm vào Yêu Thích");
        document.getElementById("modal__container").style.display = "flex";
    } else {
        //Lấy ID bằng click  -> DOM
        var id = x.parentElement.parentElement.children[0].children[0].innerHTML;
        // alert(id);
        var yt = new Array(id);
        var title = x.parentElement.parentElement.children[1].innerText; //Lấy title
        // alert(title);
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
}




