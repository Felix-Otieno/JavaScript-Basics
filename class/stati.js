class MyClass {
    static myStaticField;
    static myStaticMethod() {
        console.log("Static is the member of the class not instance of it");
    }
}
const myClassInstance = new MyClass();
MyClass.myStaticMethod()