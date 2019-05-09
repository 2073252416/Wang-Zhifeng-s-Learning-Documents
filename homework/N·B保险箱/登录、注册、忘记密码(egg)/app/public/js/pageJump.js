window.onload=function(){
    setInterval(go,1000);
};
var a = 3;
function go(){
    a -- ;
}
if(a=0){
    this.ctx.render('ceshi')
}