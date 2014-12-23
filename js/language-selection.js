/**
 * Created by sg_2 on 22-12-2014.
 */

var languageUl = document.getElementsByClassName('language-list');
var languageBlock = document.getElementsByClassName('language-selection-block')[0];
var isListVisible = false;
for(var i = 0;i < languageUl.length; i++) {
    var langUl = languageUl[i];
    var languages = langUl.getElementsByTagName('li');

        for(var i = 0;i < languages.length; i++) {

            var lang = languages[i];
            lang.onclick = function(lang) {
               return function() {


                   console.log('lang clicked');
                   var selectOption = document.getElementById('shown-option');

                   var img = selectOption.getElementsByTagName('img');
                   var country = selectOption.getElementsByTagName('span');

                   if(isListVisible) {
                       langUl.style.overflow = 'hidden';
                       isListVisible = false;
                       languageBlock.style.background = 'url(images/bg-language-selection.png) 134px 3px no-repeat';
                   } else {
                       langUl.style.overflow = 'visible';
                       isListVisible = true;
                       languageBlock.style.background = 'url(images/bg-language-selection-down.png) 134px 3px no-repeat';
                   }

                   console.log((lang.getElementsByTagName('img'))[0].getAttribute('src'));
                    var clickedImg = lang.getElementsByTagName('img')[0];
                   img[0].setAttribute('src', clickedImg.getAttribute('src'));
                   var clickedSpan = lang.getElementsByTagName('span')[0];
                   country[0].innerHTML = clickedSpan.innerHTML;

                   var languageSelect = document.getElementById('language-select');
                    for(var j = 0;j < languageSelect.options.length; j++) {
                        var option = languageSelect.options[j];

                        if(option.value == (clickedSpan.getElementsByTagName('a'))[0].innerHTML) {
                            languageSelect.selectedIndex = j;
                        }
                    }
                   return false;
               }
            }(lang);
        }
}

