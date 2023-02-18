function triangleRombusPentagon(b,h)
{
    return 0.5*b*h;
}

function rectangleParelleogram(w,l)
{
    return w*l;
}

function ellipse(a,b)
{
    return Math.PI*a*b;
}

function createList(name,val)
{
    const list=document.createElement('li');
    
    let j=name+" "+val+" ";
    list.innerHTML=j+'cm<sup>2</sup>'+'<button type="submit" class="btn btn-primary w-75">Convert to m<sup>2</sup></button>';
    const element=document.getElementById('Output-list');
    element.appendChild(list);
}
function getInputBase()
{
    let b=document.getElementById('Triangle-b');
    let base=b.value;
    console.log(base);
    base=parseFloat(base);
    if(isNaN(base)) {
        alert("please insert positive integer");
        return 0;

    }
     else {
        
        if(base<=0) {
            alert("please insert positive integer");
            return 0;
        }
        else return base;
     }
}

function getInputHeight()
{
    let h=document.getElementById('Triangle-h');
    let height=h.value;
    height=parseFloat(height);
    if(isNaN(height)) {
        alert("please insert positive integer");
        return 0;

    }
     else {
        
        if(height<=0) {
            alert("please insert positive integer");
            return 0;
        }
        else return height;
     }
}
function getInputWidth()
{
    let w=document.getElementById('Triangle-h');
    let width=w.value;
    width=parseFloat(width);
    if(isNaN(width)) {
        alert("please insert positive integer");
        return 0;

    }
     else {
        
        if(width<=0) {
            alert("please insert positive integer");
            return 0;
        }
        else return width;
     }
}
function getInputLength()
{
    let l=document.getElementById('Triangle-h');
    let length=l.value;
    length=parseFloat(length);
    if(isNaN(length)) {
        alert("please insert positive integer");
        return 0;

    }
     else {
        
        if(length<=0) {
            alert("please insert positive integer");
            return 0;
        }
        else return length;
     }
}

