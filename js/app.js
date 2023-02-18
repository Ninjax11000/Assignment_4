document.getElementById('CalTriangle').addEventListener('click',function(){
    let b=getInputBase();
    let h=getInputHeight();
    const result=triangleRombusPentagon(b,h);
    createList('Triangle', result);

})
document.getElementById('CalRombus').addEventListener('click',function(){
    const result=triangleRombusPentagon(16,8);
    createList('Triangle', result);

})
document.getElementById('CalPentagon').addEventListener('click',function(){
    const result=triangleRombusPentagon(6,10);
    createList('Triangle', result);

})