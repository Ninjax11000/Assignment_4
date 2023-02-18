document.getElementById('CalTriangle').addEventListener('click',function(){
    let b=getInputBase();
    let h=getInputHeight();
    const result=triangleRombusPentagon(b,h);
    createList('Triangle', result);

})
document.getElementById('CalRombus').addEventListener('click',function(){
    const result=triangleRombusPentagon(16,8);
    createList('Rombus', result);

})
document.getElementById('CalPentagon').addEventListener('click',function(){
    const result=triangleRombusPentagon(6,10);
    createList('Pentagon', result);

})
document.getElementById('CalRectangle').addEventListener('click',function(){
    let w=getInputWidth();
    let l=getInputLength();
    const result=rectangleParelleogram(w,l);
    createList('Rectangle', result);

})
document.getElementById('Calparallelogram').addEventListener('click',function(){
    const result=rectangleParelleogram(10,12);
    createList('Parallelogram', result);

})
document.getElementById('CalEllipse').addEventListener('click',function(){
    const result=ellipse(10,4);
    createList('Ellipse', result);

})
document.getElementById('blog').addEventListener('click',function(){
    window.location.href='blog.html';

})

