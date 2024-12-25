//this in js represent obj
/* value of this keyword : outside fn/obj*/
var a = 10
console.log('this:',this);//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
function add(){

}
console.log('window.a',window.a); //10
console.log('a',a);// 10
console.log('this.a',this.a);// 10

var ab ={
    name:"xyz"   
}
console.log(this.ab)//{name:'xyz'}
/*inside reg fn*/
var x =10
function display(){
console.log('thiskw inside reg fn',this.x);//10
}
display();

/*inside a method*/
var a=30
var movie={
    name:'RRR',
    getName: function(){
        console.log('this inside obj',this); //{ name:'RRR',getName: f}
    }
}
movie.getName();



