/**
 * Created by sg_2 on 16-12-2014.
 */
// JavaScript Document

function addClass(element, cl) {
    var c = element.className.split(" ");
    console.log(c);
    var found = false;
    for(var i=0; i < c.length; i++) {
        if( c[i] == cl) {

            found = true;
            console.log("found");
            break;
        }
    }
    if( found == false) {
        console.log("wasn't found");
        element.className +=(" " + cl);
    }
    else {

    }
}

function removeClass(element, cl) {
    var c = element.className.split(" ");
    console.log(c);
    var index =	c.indexOf(cl);
//	console.log(index);
    console.log(element.className);
    element.className = "";
    for(var i=0; i < c.length; i++) {
        if( i != index ) {
            element.className += c[i];
            if(i < c.length-1) {
                element.className += " ";
            }
        }
    }
}