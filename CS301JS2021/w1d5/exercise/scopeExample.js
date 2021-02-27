function f() {
    let a = 1, b = 20, c;
    console.log(a + " " + b + " " + c); // 1 20 undefined
    function g() {
    let b = 300, c = 4000;
    console.log(a + " " + b + " " + c); // 1 300 4000
    a = a + b + c;
    console.log(a + " " + b + " " + c); // 4301 300 4000
    }
    console.log(a + " " + b + " " + c); // 1 20 undefined
    g();
    console.log(a + " " + b + " " + c); // 4301 20 undefined
    }
    f();
  
   


   

