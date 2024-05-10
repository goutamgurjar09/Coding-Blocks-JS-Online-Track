//Execution Context:-

//Execution Context is an environment in which our js code is executed and eveluated  bcz js code need an environment to execute the code
//by default js engine/browser creates the globel execution context before it starts to execute any code
//Ec it's a environment jha pr js ka code run hota hai
//when a js engine (means crome browser engine(v8)) executes a script/code , it creates a execution context.
//and each execution context has two phases:
//1.  creation phase(MCP/Memory allocation) and 2. Code execution phase

//Note:- jb bhi aap js code likhte ho bo by default GEC me store ho chuka hota hai

//Execution stack:- Execution stack , also known as calling stack  ->ita a stack with a LIFo(Last in First Out) which is used to store all the execution context created during the code execution
//ex:-1.

var a = 10;
function add(){
    var b = 5;
    var c = 7;
    var total = b + c;
    return total;
}
function showMsg(uname){
   var greet = `hello ${uname} good bye!`
   return greet;

}
var adresult = add();
console.log(adresult)
var showMsgRes =  showMsg("kavya");
console.log(showMsgRes)

//in first step GEC create hoga uske ander 2 phse bnege MCP and CEP
// and first time sbhi variable ko undefined mark/(memory allocate ki jati hai as a placeholder undefined) kiya jayega by js engine 
//and first time function pura ka pura mcp me bhej diya jayega jb tk bo call nhi hota

//-----------------------------------------------------------
//                       GEC                                 |
//-------------|----------------|-------------|--------------
//             |MCP Phase       |  CEP/Ep Ph. |
//-------------|----------------|-------------|--------------
            // |   a->un.       |  
            // |                |  
            // |   add(){...}   |  
            // | (pura fun hold | 
            // |  in mcp)       
            // |  
            // |showMsg(){....}
            // |
            // |                |
            // | adresult-un.   |             
            // |showMsgRes-un.  |             
            // |                |             
            // |                |             

//in next step-> ab mcp ka kaam khtm ab CEP ki bari jaise hi CEP execute hoga vese hi Memory me a/variable ki value aa jayegi->ab fir se 10 line se start krege ab Memory/mcp 

//ab line 11 se 16 and 17 se 21 ko skip krege bcz abi dono function ko call nhi kiya

//ab line 22 se add fun ko call krge and jb bhi function call hoga tb new execution context create hoga (function ka) use(phle bale) CEP ke ander
//-----------------------------------------------------------
//                             GEC                          |
//-------------|----------------|-------------|--------------
//             |MCP Phase       |  CEP/EP     |
//-------------|----------------|-------------|--------------
            // |   a->10        |  -------------------------- 
            // |                |  | MCP         |      CEP
            // |                |  --------------------------
            // |   add(){...}   |  | b = un.     |      
            // | (pura fun hold |  | c = un.     | 
            // |  in mcp)       |  | total= un.  |
            // |                |  |             |
            // |showMsg(){....} |  |             |
            // |                |  |             |
            // |                |  |             |
            // | adresult-un.   |  |             
            // |                |  |           
            // |                |  |           
            // |                |  |       


//in next step -> is step me jaise hi hmara CEP execute hoga vese hi mcp me sare variable ko value mil jayegi /memory allocate ho jayegi variable ke liye

//-----------------------------------------------------------
//                             GEC                          |
//-------------|----------------|-------------|--------------
//             |MCP Phase       |  CEP/EP     |
//-------------|----------------|-------------|--------------
            // |   a->10        |  -------------------------- 
            // |                |  | MCP         |      CEP
            // |                |  --------------------------
            // |   add(){...}   |  | b = 5     |  return total;  
            // | (pura fun hold |  | c = 7     |
            // |  in mcp)       |  | total= 12 |
            // |                |  |           |
            // |showMsg(){....} |  |           |
            // |                |  |           |
            // |                |  |
            // |now adresult-12 |  |            
            // | and return it  |  |           
            // | on console     |  |           
            // |                |  |       

//in next step -> ab jaise hi fun ne return kiya total=12-> ye 12 adresult(line 22) me jake return ho jayega console pr  or vese hi function ka EC(execution context) bhi delete ho jayega bcz ab iska kaam khtm ho gya

//-----------------------------------------------------------
//                             GEC                          |
//-------------|----------------|-------------|--------------
//             |MCP Phase       |  CEP/EP     |
//-------------|----------------|-------------|--------------
            // |   a->10        |  
            // |                |  
            // |                |  
            // |   add(){...}   |    
            // | (pura fun hold |  
            // |  in mcp)       |  
            // |                |  
            // |showMsg(){....} |  
            // |                | 
            // |                |  
            // |now adresult-12 |              
            // | and return it  |             
            // | on console
            // |

//next step-> iske print hone ke just baad line 14 pe ek or variable hai->showMsgRes usme fun ko call kiya hai 
//to fir se same process ek new EC bnega then repeat same process

//-----------------------------------------------------------
//                             GEC                          |
//-------------|----------------|-------------|--------------
//             |MCP Phase       |  CEP/EP     |
//-------------|----------------|-------------|--------------
            // |   a->10        |  -------------------------- 
            // |                |  | MCP         |      CEP
            // |                |  --------------------------
            // |   add(){...}   |  | uname = un   |   
            // | (pura fun hold |  | greet = un.  |
            // |  in mcp)       |  |              |
            // |                |  |              |
            // |showMsg(){....} |  |              |
            // |                |  |              |
            // |                |  |
            // |now adresult-12 |  |            
            // | and return it  |  |           
            // | on console     |  |           
            // |
           //  | showMsgRes=un. |  |  


//next->now ab CEP chlega then memory/mcp me variable ki value aa jayegi mtlb inke liye memory allocate ho jayegi

//-----------------------------------------------------------
//                             GEC                          |
//-------------|----------------|-------------|--------------
//             |MCP Phase       |  CEP/EP     |
//-------------|----------------|-------------|-----------------
            // |   a->10        |  ------------------------------ 
            // |                |  | MCP         |      CEP
            // |                |  -------------------------------
            // |   add(){...}   |  | uname = kavya |  return greet
            // | (pura fun hold |  | greet = hello |  
            // |                |  |  //kavya good |    
            // |  in mcp)       |  |       bye!    |       
            // |                |  |               |
            // |showMsg(){....} |  |              
            // |                |  |               
            // |                |  |
            // |now adresult-12 |  |            
            // | and return it  |  |           
            // | on console     |  |           
            // |                |  |
           //  | showMsgRes=un. |  |  
//and jaise hi CEP ne return greet kiya vese hi->  "hello kavya good bye" from MCP se direct  
//showMsgRes =   "hello kavya good bye"   aa jayegi uske baad  showMsg() function ka EC delete ho jayega bcz iska kaam khtm ho  gya
// or value print ho jayegi 




//------------------------------------
//  this  = "window";

function fun1(){
   var num = 10;
   console.log(num);
   fun2();
   console.log("i will print after  fun3");
}
function fun2(){
  console.log("hy paji");
  fun3();
}

function fun3(){
  console.log("hello bro");
}
fun1();


//Note:Whenever a js code is executed the GEC (anonymous name se)will be created and inside GEC all variabeles and function is present/store-> means  fun1,fun2,fun3  first time in sbka reference GEC me store hoga


//first time GEC create hoga and sare variables and functions will be store/ref. in GEC
//line 205 se jb fun1() call hoga to pointer hmara fun1 pr upr chla jayega  and function calling pr  Ek or new Execution context bnega  
//second time console me value milegi hme 
//then fun2() call hoga now iska ek alg EC bnega then console me value milegi
//then fun3() call hoga now iska ek alg EC bnega then console me value milegi
//Ab yha se phle bale callstack ko remove kr denge fun3() bale bcz uska kaam ho gya and yha se bo fun2() (line-197) pr return back jayega and bha dekhega ydi sb kaam ho gya to uska bhi callstack remove ho jayega and fun1() pr return back ho jayega and bha dekhega (line-195) pr value print krega   and iske callstack bhi remove ho jayega ab
//and reutrn hamara pointer GEC pr aa jayega jha se isko call kiya gya tha 