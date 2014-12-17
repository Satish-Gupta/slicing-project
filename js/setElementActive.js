/**
 * Created by sg_2 on 16-12-2014.
 */

var tabsParent = document.getElementsByClassName('tabs');
//console.log(tabsParent);
//console.log(tabsParent[0]);
for(var i = 0; i < tabsParent.length; i++) {
    var tabs = tabsParent[i].getElementsByTagName('li');
    var activationClassName = 'active-tab';
    var updateSubElements = true;
    setElementActive(tabs,tabsParent[i],activationClassName,updateSubElements);

//    console.log('tabs:' + tabs.length);
}
var menuParent = document.getElementsByClassName('menu-list');
//console.log(tabsParent);
//console.log(tabsParent[0]);
for(var i = 0; i < menuParent.length; i++) {
    var menuItem = menuParent[i].getElementsByTagName('li');
    var activationClassName = 'menu-active';
    var updateSubElements = false;
    var element = setElementActive(menuItem,menuParent[i],activationClassName,updateSubElements);
//    console.log('tabs:' + tabs.length);
    //    console.log(element.getElementsByTagName('ul'));
    console.log(element,'dj');
}
function setElementActive(elements,parent,activationClassName,updateSubelements) {
    console.log('fhgfh');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        console.log(element);
        element.onclick = (function (element) {
            console.log('inside onclick');
            return function () {
                console.log('zzz');
                for (var i = 0; i < elements.length; i++) {
                    var c = elements[i].className.split(" ");
                    console.log(c);
                    for (var j = 0; j < c.length; j++) {
                        if (c[j] == activationClassName && updateSubelements) {
                             var elementSubList = elements[i].getElementsByTagName('ul')[0];
                            if(elementSubList) {
                                elementSubList.style.display = 'none';
                            }
                            console.log("foundddddd");
                            break;
                        }
                    }
                    removeClass(elements[i], activationClassName);
                }
//            var classNames = (tab.parentNode).className.split(" ");
//                console.log(classNames)
                console.log(element);
                console.log(element.parentNode);
                console.log(parent);
                console.log(activationClassName);
                console.log(element.hasChildNodes());
                if (element.parentNode == parent) {
                    console.log('aaaa');
                    addClass(element, activationClassName);
                    console.log(element.children);
                    console.log(element.getElementsByTagName('ul'),'s');
                        if(!updateSubelements && element.getElementsByTagName('ul').length != 0) {
                            removeClass(element,activationClassName);
                        }
                    element.children[0].style.display = 'block';

                   return element;

                }
//        }
//            for(var i=0; i < classNames.length; i++) {
//
//                if(classNames[i] == 'tabs') {
//                    addClass(tab,activationClassName);
//                    console.log(tab.children);
//                    tab.children[0].style.display = 'block';
//                    break;
//                }
//            }

            }
            return false;
        })(element);
    }
}
