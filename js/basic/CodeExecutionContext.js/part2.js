//Execution Context:-

//Ec it's a environment jha pr js ka code run hota hai
//when a js engine (means crome browser engine(v8)) executes a script/code , it creates a execution context.
//and each execution context has two phases:
//1.  creation phase(MCP/memory allocation) and 2. code execution phase

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

//in next step-> ab mcp ka kaam khtm ab CEP ki bari jaise hi CEP execute hoga vese hi Memory me a ki value aa jayegi->ab fir se 10 line se start krege ab Memory/mcp 

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


//in next step-> is step me jaise hi hmara CEP execute hoga vese hi mcp me sare variable ko value mil jayegi /memory allocate ho jayegi variable ke liye

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


//----------------------------
var username = "hy goutam";
      var person ={
        email : "sam@gmail.com",
        password: "samarth"
      }
console.log(username);//hy goutam


