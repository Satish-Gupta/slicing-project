/**
 * Created by sg_2 on 01-12-2014.
 */

function Animator() {
    var frequency = 50;
    var counter = 0;
    this.element;
    this.properties;
    this.duration;
    this.callback;
    this.intervalId;
    var elementTop;
    var elementMarginLeft;
    var that = this;

    this.animate = function (el, properties, duration, callback) {
        that.element = el;
        that.properties = properties;
        that.duration = duration;
        that.callback = callback;
        that.intervalId = setInterval(that.move,frequency);
        elementTop = that.element.offsetTop;
        elementMarginLeft = that.element.offsetLeft;
    }
    this.move = function() {
        counter++;
        var val = 0;
        if(that.properties.width) {
            val = that.properties.width / (that.duration / frequency) * counter;
            that.element.style.width = val + "px";
        }
        if(that.properties.height) {
            val = that.properties.height / (that.duration / frequency) * counter;
            that.element.style.height = val + "px";
        }
        if(that.properties.marginLeft) {  // false when marginTop is zero

            if (elementMarginLeft < that.properties.marginLeft) {
                var val = elementMarginLeft + (that.properties.marginLeft - elementMarginLeft) / (that.duration / frequency) * counter;
                that.element.style.marginLeft = val + "px";
            } else {
                var val = elementMarginLeft - (elementMarginLeft - that.properties.marginLeft) / (that.duration / frequency) * counter;
                that.element.style.marginLeft = val + "px";
            }

        }
        if(that.properties.color) {
            var color = parseInt(that.properties.color,16);
            val = color / (that.duration / frequency) * counter;
//            console.log('val',val);
            var hexcolor = val.toString(16);
            that.element.style.backgroundColor = "#" + hexcolor;
//            console.log('color',hexcolor);
        }
        if(that.properties.marginTop) {  // false when marginTop is zero

            if (elementTop < that.properties.marginTop) {
                var val = elementTop + (that.properties.marginTop - elementTop) / (that.duration / frequency) * counter;
                console.log(elementTop, ((elementTop - that.properties.marginTop) / (that.duration / frequency)), val)
                that.element.style.marginTop = val + "px";
            } else {
                var val = elementTop - (elementTop - that.properties.marginTop) / (that.duration / frequency) * counter;
                console.log(elementTop,"dkd", ((elementTop - that.properties.marginTop) / (that.duration / frequency)), val)
                that.element.style.marginTop = val + "px";
            }

        }
//        if(that.properties.marginTop) {
//            var temp = that.properties.marginTop - that.element.offsetTop;
//            console.log(that.properties.marginTop," ",that.element.offsetTop," ",temp);
//            var top = 0;
////            if(temp < 0) {
////                top = temp;
////            }
//            val =  temp / (that.duration / frequency) * counter;
//            console.log(val);
//            console.log('top',that.element.style.top)
//            that.element.style.marginTop = (that.element.offsetTop + val) + "px";
//        }


        if(counter >= (that.duration / frequency)) {
            clearInterval(that.intervalId);
            that.callback();
            console.log(that.intervalId);
        }
    }
    this.pause = function() {
        clearInterval(that.intervalId);
    }
    this.finish = function() {
        clearInterval(that.intervalId);
        that.element.style.marginLeft = that.properties.marginLeft + "px";
    }
}

//var a = new Animator();
//var element = document.getElementById('box1');
//var property = {marginLeft: 1,width: 300, height:300,color:'F30',marginTop:1};
//a.animate(element, property, 1000, function() {
//    console.log('done');
//});
//setTimeout(a.pause,500);