
/**
 * 
 * @param {string} str 
 */

function apply(str) {
    const obj = {};
    const className = str.split(' ')

    //for height
    const h = className.filter((c=>c.includes("h-")));
    h.forEach((d,i)=>  obj.height = +h[i].split("-")[1]);

    // for width
    const w = className.filter((c=>c.includes("w-")));
    w.forEach((d,i)=>  obj.width = +w[i].split("-")[1]);

    // for bg
    const bg = className.filter((c=>c.includes("bg-")));
    bg.forEach((d,i)=>  obj.backgroundColor = bg[i].split("-")[1]);

    

    return obj;
}


export  {apply} ;