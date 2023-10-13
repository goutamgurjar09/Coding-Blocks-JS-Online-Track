//How does javascript execute code(gec,mcp and cep) + call stack 
//note : js is single threaded leanuage

//gec-> whenever the js code will be run the gec will be create and inside gec two phaces will be create
//and jha pr gec bnega usko this variable ke ander refer kr doiya jata hai 

//three types of context in js
//1. gec 2. functional exexution context 3. eval execution context

//gec-> globel execution context
//iske ander two phases hote hai
//1.mcp-> memory creation phase //2. cep-> code execution phase

//------------------
//let's understand with example-
let val1 = 10;
let val2 = 2;
function sum(num1,num2){
    let total = num1 + num2;
    return total;
}
let ans1 = sum(val1,val2);
let ans2 = sum(15,5);
console.log(ans1);//12
console.log(ans2);//20
// 12
// 20

//->how does it work

//first-> will make Gec
//then isko this ko refer kiya jata hai
//second-> will make Mcp and mcp ke ander sare variables ko rkha jata hai and unko first time undefind mana jata hai
//------------------------------------------------------------
//                       GEC                                 |
//-------------|----------|-------------|---------------------
//             |MCP Phase |  CEP/Ep Ph. |
//-------------|----------|-------------|---------------------
            // | val1->un.|  val1->10   |
            // | val2->un.|  val2->2    |
            // | sum->def-|             |
            // |//ination |             |
            // |ans1-unde.|             |
            // |ans2-unde.|             |
            // |          |             |
            // |          |             |
//cep me variable ki value mil jaeygi hme and iske  baad line 18-21 ko skip krke bcz hmne function ki defination ko mcp me hold krke rkha hai to direct line no. 22 pr aa jayege

//line 22->ab hm function ko call krege to jb bhi hm fun ko call krte hai tb ek or new execution context create hoga

//and ab iske andr bnega new box create  hoga jise new executional context bolte hai and iske ander variable ke liye alg se sendbox bnta hai and ek excution ke liye alg se thread bnta hai jime execute ho ske apka code
//-------------|----------|-------------|-
//             |          |             |
//-------------|----------|-------------|-
            // | new      |             |
            // | variable |             |
            // |  enviro. |             |
            // |          |             |
            // |   +      |             |
            // |Execution |             |
            // | thread   |             |
            // |          |             |
            // |          |             |
            // |          |             |          
//________________________________________
//ab iske ander bi same two phase bnege mcp and cep
               //sum(val1,val2)
//-------------|----------|-------------|---------------------
//             |MCP Phase |  CEP/Ep Ph. |
//-------------|----------|-------------|---------------------
//line-22 se// | val1->un.|  num1->10   |->line 18 se
            // | val2->un.|  num2->2    |
            // | total->un|  total->12  |->  //ab is toatl ko main GEC ko return kr dete parent ko hai means is fun ke hr baar
            // |          |             |    //iske baad hmara EP delete ho jata hai bcz iska kaam ho gya
            // |          |             |    //now ans1 will be -> 12
            // |          |             |    //and line no- 24 pr ans2 ke liye ek baar again function call hota hai then again
            // |          |             |    //mcp and cep bnega iske liye bcz jb bhi function call hota hai tb mcp and cep create hota hai then again sari same process hogi
            // |          |             |    //and process hone ke baad ans2 = 20


