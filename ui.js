let cubuk = document.getElementById('cubuk'); 
let html = document.documentElement;
let yukseklik = html.scrollHeight
// -----------------------------------------------------------------------
function guncelle(){
    let yukaridanYukseklik = html.scrollTop + html.clientHeight;
    let genislik = (yukaridanYukseklik / yukseklik) * 100 + '%';

    cubuk.style.width = genislik;
};
//-----------------------------------------------------------------------
window.addEventListener('scroll', guncelle);
guncelle();
$(document).ready(function() {
    $(".renkSec li a").click(function() {
    $('link#temaRenk').attr('href', $(this).data('css'));
    });
});
//-----------------------------------------------------------------------
var Text = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  Text.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
 
  
  window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-words');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new Text(elements[i], JSON.parse(toRotate), period);
      }
    }
  };
