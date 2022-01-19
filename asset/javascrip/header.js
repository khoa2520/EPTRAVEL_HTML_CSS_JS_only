function user_block() {
    if (document.getElementById('user-block').style.display == 'none') {
        document.getElementById('user-block').style.display = 'block';
        

    }
    else {
        document.getElementById('user-block').style.display = 'none'
    }
    
}
function user_block_open() {
    document.getElementById('user-block').style.display = 'block';
}
function user_block_close(){
    document.getElementById('user-block').style.display = 'none';
}

function hamburger_o() {
    var n = document.getElementById("nav_id");
    if (n.style.display === 'none') {
        n.style.display = 'block'
        document.getElementById("hamburger-o_i").className = 'fa fa-times'
    } else {
        if(window.innerWidth<750){
            n.style.display = 'none';
            document.getElementById("hamburger-o_i").className = 'fa fa-bars'
        }
       
    }
  }

function close_narHover(id){
    if(window.innerWidth>750){
        document.getElementById(id).style.display='none';
    }
}
