function triangleRombusPentagon(b,h)
{
    return 0.5*b*h;
}

function rectangleParelleogram(w,l)
{
    return w*l;
}

function inputValidation(val)
{
    if(isNaN(val)) {
        alert("please insert positive integer");
        return false;

    }
     else {
        
        if(val<=0) {
            alert("please insert positive integer");
            return false;
        }
        else return true;
     }
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
//     if(isNaN(base)) {
//         alert("please insert positive integer");
//         return 0;

//     }
//      else {
        
//         if(base<=0) {
//             alert("please insert positive integer");
//             return 0;
//         }
//         else return base;
//      }
        let check=inputValidation(base);
        if (check===false) return 0;
        else return base;

 }
function getInputHeight()
{
    let h=document.getElementById('Triangle-h');
    let height=h.value;
    height=parseFloat(height);
    // if(isNaN(height)) {
    //     alert("please insert positive integer");
    //     return 0;

    // }
    //  else {
        
    //     if(height<=0) {
    //         alert("please insert positive integer");
    //         return 0;
    //     }
    //     else return height;
    //  }
    let check=inputValidation(base);
        if (check===false) return 0;
        else return height;
}
