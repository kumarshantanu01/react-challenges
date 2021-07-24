function add(a,b){
    let sum = a+b;
    return sum;
}

function sub(a,b){
    let diff = a-b;
    return diff;
}

function multi(a,b){
    let multi = a*b;
    return multi;
}

function div(a,b){
    let div = a/b;
    div = div.toFixed(4);
    return div;
}

export {add, sub, multi, div};

