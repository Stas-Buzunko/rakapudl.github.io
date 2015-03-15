var result = function(base) {
    if(changeCheckbox.checked === true) {
        div.value = base[random1(base.length)];
        div.value = div.value + " " + base[random1(base.length)];
    }else{
        div.value = base[random1(base.length)];
    }
};

var random1 = function(max) {
    return Math.round(Math.random() * (max - 0));

};