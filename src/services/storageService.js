
function store(key, any) {
    localStorage[key] = JSON.stringify(any);
}

function load(key) {

    let str = localStorage[key] || null;
    return JSON.parse(str)
}

export default{
    store,
    load
}