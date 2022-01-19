var lienhe = new Array();
var lh = lienhe.length;

function themvaolienhe(x){
    var get = x.parentElement.parentElement.children;

    var getTen = get[0].children[1].children[0].value;
    var getEmail = get[1].children[1].children[0].value;
    var getSDT = get[2].children[1].children[0].value;
    var getNoiDung = get[3].children[1].children[0].value;
    
    var lh = new Array(getTen,getEmail,getSDT,getNoiDung);

    lienhe.push(lh);

    sessionStorage.setItem("lienhe", JSON.stringify(lienhe));


}