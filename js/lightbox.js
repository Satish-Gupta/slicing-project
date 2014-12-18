// JavaScript Document

var lightBox = document.getElementById('light-box');
var lightBoxButton = document.getElementById('light-box-button');
//var lightBoxImage =  lightBox.getAttribute('src');
var lighBoxCancelButton = document.getElementById('button-cancel');
var thumbnails = document.getElementsByClassName('light-box-button');

//var thumbnailsLink = thumbnailsUL.getElementsByTagName('a');
//console.log(thumbnails, thumbnailsUL, thumbnailsLink)

//for (var i = 0; i < thumbnailsLink.length; i++) {
    var el = lightBoxButton;
console.log(lightBox, lightBoxButton,/* lightBoxImage,*/lighBoxCancelButton);
    el.onclick = (function (el) {
        console.log(el);
        return function () {

//            lightBoxImage.setAttribute("src", lightBoxImage);
            lightBox.style.position = 'absolute';
            lightBox.style.display = "block";
            console.log(lightBox.style.display)
//            lightBoxPreviousButton.onclick = function () {
//                if (i > 0) {
//                    i--;
//                    console.log(i)
//                    lightBoxImage.setAttribute("src", thumbnailsLink[i])
//                }
//            }

//            lightBoxNextButton.onclick = function () {
//                if (i < thumbnailsLink.length - 1) {
//                    i++;
//                    console.log(i);
//                    lightBoxImage.setAttribute("src", thumbnailsLink[i]);
//                }
//            }
            return false;
        };


    })(el, i);
//}


lighBoxCancelButton.onclick = function (el) {
    lightBox.style.display = 'none';
}
