var result = function(base , base1) {
    if(changeCheckbox.checked === true) {
        div.value = base[random1(base.length)];
        div.value = div.value + " " + base1[random1(base1.length)];
    }else{
        div.value = base[random1(base.length)];
    }
};

var random1 = function(max) {
    return Math.round(Math.random() * (max - 1));

};