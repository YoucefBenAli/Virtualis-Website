var Pictures = ["url('./Pictures/Wallpaper1.jpg')", "url('./Pictures/Wallpaper2.jpg')", "url('./Pictures/Wallpaper3.jpg')", "url('./Pictures/Wallpaper4.jpg')", "url('./Pictures/Wallpaper5.jpg')", "url('./Pictures/Wallpaper6.jpg')", "url('./Pictures/Wallpaper9.jpg')", "url('./Pictures/Wallpaper10.jpg')", "url('./Pictures/Wallpaper11.jpg')", "url('./Pictures/Wallpaper12.jpg')", "url('./Pictures/Wallpaper13.jpg')", "url('./Pictures/Wallpaper14.jpg')", "url('./Pictures/Wallpaper15.jpg')"]

window.onscroll = function() {BackToTop()};
function BackToTop() {
    var Top = document.getElementById("Scroll");
    var vw = window.innerWidth;
    var vh = window.innerHeight;
  if (document.body.scrollTop > 0.40*vh || document.documentElement.scrollTop > 0.40*vh) {
    Top.style.display = "block";
  } else {
    Top.style.display = "none";
  }
}



function ChangeBg() {
    var nav = document.getElementById("Nav");
    var current = nav.style.backgroundImage
    var rand = Pictures[Math.floor(Math.random() * Pictures.length)];
    while (rand == current) {
        var rand = Pictures[Math.floor(Math.random() * Pictures.length)];s
    }
    nav.style.transition="all 3s";
    nav.style.backgroundImage = rand;
}

window.setInterval(function(){
    ChangeBg()
  }, 3500);
