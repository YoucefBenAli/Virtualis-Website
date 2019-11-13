var Pictures = ["url('Wallpaper1.jpg')", "url('Wallpaper2.jpg')", "url('Wallpaper3.jpg')", "url('Wallpaper4.jpg')", "url('Wallpaper5.jpg')", "url('Wallpaper6.jpg')", "url('Wallpaper9.jpg')", "url('Wallpaper10.jpg')", "url('Wallpaper11.jpg')", "url('Wallpaper12.jpg')", "url('Wallpaper13.jpg')", "url('Wallpaper14.jpg')", "url('Wallpaper15.jpg')"]


function ChangeBg() {
    var nav = document.getElementById("Nav");
    var rand = Pictures[Math.floor(Math.random() * Pictures.length)];
    nav.style.transition="all 3s";
    nav.style.backgroundImage = rand;
    /*document.body.style.transition = "all 3s";
    document.body.style.backgroundImage = rand;*/
}

window.setInterval(function(){
    ChangeBg()
  }, 3500);
