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
    this.init = function() {

        that.sliderBlock = document.getElementById('banner-container');
        that.sliderUL = document.getElementById('banner-list');
    //    this.bannerListElements = this.sliderULElement.getElementsByTagName('li');
        that.bannerWidth = this.sliderUL.style.width;
        that.bannerHeight = this.sliderUL.style.height;
        that.sliderULLeftMargin = 0;
        that.sliderULChilrens = that.sliderUL.children;

        that.prevButton = document.getElementsByClassName('banner-nav-left');
        that.nextButton = document.getElementsByClassName('banner-nav-right');
//        that.prevButton = document.createElement('img');
//        that.nextButton = document.createElement('img');
//        that.prevButton.setAttribute("class","banner-navigation-left");
//        that.prevButton.setAttribute("id","banner-navigation-left");
//        that.nextButton.setAttribute("class","banner-navigation-right");
//        that.nextButton.setAttribute("id","banner-navigation-right");
        console.log(that.nextButton);
        console.log(that.prevButton);
//        that.prevButtonImg = 'banner-navigation-left.png';
//        that.nextButtonImg = 'banner-navigation-right.png';
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

        that.intervalId = setInterval(that.animateBanner,30);
//        that.putButtons();
    };

//    this.putButtons = function() {
//        console.log(that.bannerHeight)
//        that.prevButton.setAttribute('src',"images/"+that.prevButtonImg);
//        that.prevButton.style.top = 200 + "px";
//        that.prevButton.style.left = "10px";
//        that.nextButton.setAttribute('src',"images/"+that.nextButtonImg);
//        that.nextButton.style.width = 11 + "px";
//        that.nextButton.style.height = 11 + "px";
//        that.nextButton.style.top = 200 + 'px';
//        that.nextButton.style.left = "880px";
//        that.sliderBlock.appendChild(that.prevButton);
//        that.sliderBlock.appendChild(that.nextButton);
//    }

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
                    that.sliderULLeftMargin -= 5;
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
var s = new Slider();
s.init();

