/**
 * Created by sg_2 on 01-12-2014.
 */


function Slider() {
    this.sliderBlock;
    this.sliderUL;
    this.nextButton;
    this.prevButton;
    this.counter = 0;
    var that = this;
    var animatePause = false;
    this.intervalId;
    this.init = function(sliderBlock,sliderUL,prevButton,nextButton,width) {

        that.sliderBlock = sliderBlock;
        that.sliderUL = sliderUL
        that.bannerWidth = this.sliderUL.style.width;
        that.bannerHeight = this.sliderUL.style.height;
        that.sliderULLeftMargin = 0;
        that.sliderULChilrens = that.sliderUL.children;

        that.prevButton = prevButton;
        that.nextButton = nextButton;
        that.prevButton.onclick = function() {
            console.log(that.sliderULChilrens.length-1);
            console.log('insside prev button onclick');
            if(that.sliderULLeftMargin < 0) {
                that.slideLeft();
            }
        }

        that.nextButton.onclick = function() {
            console.log('insside next button onclick');
            if(that.sliderULLeftMargin > -((that.sliderULChilrens.length-1) * 900)){
                that.slideRight();
            }
        }

        that.intervalId = setInterval(that.animateBanner,20);
    };

    this.slideLeft = function() {
        that.sliderULLeftMargin = -Math.floor(Math.abs(that.sliderULLeftMargin) / 1009) * 1009;
            that.sliderUL.style.marginLeft = that.sliderULLeftMargin + "px";
    }

    this.slideRight = function() {
        that.sliderULLeftMargin = -(Math.floor(Math.abs(that.sliderULLeftMargin / 1009)) * 1009 + 1009);
        console.log(that.sliderULLeftMargin);
        that.sliderUL.style.marginLeft = that.sliderULLeftMargin + "px";
    }

    this.animateBanner = function(){
        if(that.sliderULLeftMargin % 1009 == 0) {
            that.animatePause = true;
//            console.log('pause');
            setTimeout(animate,400)
//            console.log(that.sliderULLeftMargin)
        } else {
            animate();
        }
        if(Math.abs(that.sliderULLeftMargin) >= 1009) {
//            console.log('dfjl')
//            clearInterval(that.intervalId);
            that.sliderULLeftMargin = 0;
        }
        function animate() {
                if (that.sliderULLeftMargin > -1009) {
                    that.sliderULLeftMargin -= 10;
                    that.sliderUL.style.marginLeft = that.sliderULLeftMargin + "px";
                }
        }
    }

}
var prevButton = document.getElementsByClassName('banner-nav-left');
var nextButton = document.getElementsByClassName('banner-nav-right');
//console.log(prevButton);
//prevButton.onclick = function() {
//    console.log('djfld');
//}
var sliderBlock = document.getElementById('banner-container');
var sliderUL = document.getElementById('banner-list');
var s = new Slider();
s.init(sliderBlock, sliderUL,prevButton,nextButton,1009);

