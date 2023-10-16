// let person = {
//     name :"samarth",
//     city : "new delhi",

//     //methods -> functions
//     describe : function des(){
//         console.log("this is a object method");
//         //return "Description complete.";
//     }
// }

//console.log(person);//{ name: 'samarth', city: 'new delhi', describe: [Function: des] }    
// console.log(person.name);
// console.log(person.describe); //wrong //[Function: des] bcz this is method

//console.log(person.describe());
//this is a object method
//undefined

// However, it also returns undefined because the describe function does not explicitly return a value.

// In JavaScript, when a function doesn't have a return statement or when it has a return statement without a value, it implicitly returns undefined. That's why you see "this is an object method" followed by undefined in your output.


// --------------------------------------

// let person = {
//     // property 
//     naam : "samarth vohra",
//     city : "new delhi" ,

//     //methods -> functions
//      describe : function describe(){
     
//     // describe : function desc(){
    
//     //describe : function (){
//         console.log("hi my name is samarth")
//     }
// }
//describe();//wrong  describe is not defined

//person.describe();//hi my name is samarth

// desc()//wrong
// person.desc();//wrong bcz you can not call using function name, only can call using key



//------------------------------


let person = {
    // property 
    naam : "samarth vohra",
    city : "new delhi" ,
    
    describe : function (){
        console.log(`hi goutam`);
        console.log(`hi ${person.naam}`);
        console.log(`hi ${this.naam}`);
        
        //return person;//undefined
    }
}

//person.describe()
// hi goutam
// hi samarth vohra
// hi samarth vohra


// let ans = person.describe(); //by defualt undefined is returned if you not return any value from fun
// console.log(ans);


//without return 
// hi goutam
// hi samarth vohra
// hi samarth vohra
// undefined


//with return 
// hi goutam
// hi samarth vohra
// hi samarth vohra
// {
//   naam: 'samarth vohra',
//   city: 'new delhi',
//   describe: [Function: describe]
// }


// let marks = {
//     dsa: 55,
//     web: 85,
//     ml: 90,
//     totalMarks: function(){
//         return 55 + 85 + 90;
//     }
// }
 //console.log(marks);
 //console.log(marks.totalMarks());


// let marks = {
//     dsa: 55,
//     web: 85,
//     ml: 90,
//     totalMarks: function(){
//         return this.dsa + this.web + this.ml;
//     }
// }
//  console.log(marks);
//  console.log(marks.totalMarks());//230


let marks = {
    dsa: 55,
    web: 85,
    ml: 90,
    totalMarks: function(fine){
        return this.dsa + this.web + this.ml - fine;
    }
}
 console.log(marks);
 console.log(marks.totalMarks(50));//180