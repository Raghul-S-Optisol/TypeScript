// Single Inheritance
class superClass{
    output():void{
        console.log("This is a superclass output");
    }
}

class subClass extends superClass{
    output():void{
        console.log("This is a subclass output");
    }  
}

var obj=new subClass();
obj.output();

//multilevel inheritance
class A{
    a():void{
        console.log("class A")
    }
}

class B extends A{
    b():void{
        console.log("class B") 
    }
}

class C extends B{
    c():void{
        console.log("class C")
    }
}

var obj1=new C();
obj1.a();
obj1.b();
obj1.c();
