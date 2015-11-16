// BINS CONSTRUCTOR

var Bin = function(type, size, units, append_div) {

    //variable declaration
    this.type = type;
    this.size = size;
    this.units = 0;

    this.container = document.createElement('div');
    this.container.setAttribute('class','bin');
    this.container.innerHTML = this.type + ', ' +
        this.size + ', ' +
            this.units;

    this.container.addEventListener('click',function(ev){


        console.log('You clicked type: ' + this.type + ' size: ' + this.size + ' units: ' + this.units);
    }.bind(this));

    //finally, append the sucker to the dom
    append_div.appendChild(this.container);
};