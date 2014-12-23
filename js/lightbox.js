// JavaScript Document

var lightBox = document.getElementById('light-box');
var lightBoxButton = document.getElementById('light-box-button');
//var lightBoxImage =  lightBox.getAttribute('src');
var lighBoxCancelButton = document.getElementById('button-cancel');
var thumbnails = document.getElementsByClassName('light-box-button');


    var el = lightBoxButton;
console.log(lightBox, lightBoxButton,/* lightBoxImage,*/lighBoxCancelButton);
    el.onclick = (function (el) {
        console.log(el);
        return function () {

            lightBox.style.position = 'absolute';
            lightBox.style.display = "block";
            console.log(lightBox.style.display)

            return false;
        };


    })(el, i);


lighBoxCancelButton.onclick = function (el) {
    lightBox.style.display = 'none';
}
