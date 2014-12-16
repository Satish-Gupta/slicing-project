/**
 * Created by sg_2 on 16-12-2014.
 */

var tabWrapper = document.getElementsByClassName('content-bottom')[0];
var tabs = tabWrapper.getElementsByTagName('li');
var mClassName = 'active-tab';
for(var i = 0;i < tabs.length; i++) {
    var tab = tabs[i];

    tab.onclick = (function(tab) {
        console.log('inside onclick');
        return function() {
            for(var i = 0;i < tabs.length;i++) {
                var c = tabs[i].className.split(" ");
                console.log(c);
                for(var j=0; j < c.length; j++) {
                    if( c[j] == mClassName) {

                        tabs[i].children[0].style.display = 'none';
                        console.log("foundddddd");
                        break;
                    }
                }
                removeClass(tabs[i],mClassName);
            }
            console.log(tab);
            var classNames = (tab.parentNode).className.split(" ");
            console.log(classNames)
            for(var i=0; i < classNames.length; i++) {

                if(classNames[i] == 'tabs') {
                    addClass(tab,mClassName);
                    console.log(tab.children);
                    tab.children[0].style.display = 'block';
                    break;
                }
            }

        }
    })(tab);
}
console.log(tabs);