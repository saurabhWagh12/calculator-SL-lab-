var a = '0' 
var b = 0
var ans=0
var symb = []
let arr = []
var result = document.getElementById('result') 

function appendToResult(num){     
    if(a==='0'){
        a = num
        console.log(a)
        result.innerHTML = a
    }else{
        a += num
        console.log(a)
        result.innerHTML = a

    } 
}

function clearResult(){
    a = '0' 
    b = 0
    symb = []
    arr = []
    result.innerHTML = ""
}

function symbol(sym){
    result.innerHTML = sym
    symb[b] = sym
    arr[b] = parseFloat(a)
    a = '0'
    b++
    console.log(arr)
    console.log(symb)
}

function single(key,value,prevValue){
    switch(key){
            case '+':
                ans = (value+prevValue)
                result.innerHTML = ans
                break;
            
            case '-':
                ans = (prevValue-value)
                result.innerHTML = ans
                break;
            
            case '*':
                ans = (prevValue*value)
                result.innerHTML = ans
                break;
            
            case '/':
                ans = (prevValue/value)
                result.innerHTML = ans
                break;    
    }
}

function calculate(){
    console.log(arr)
    console.log(symb)
    console.log(a)
    a = parseFloat(a)
  
    if(arr.length>1){
        for(var i=0;i<arr.length-1;i++){
            ans = arr[i]
            switch(symb[i]){
            case '+':
                ans += (arr[i+1])
                break;
            
            case '-':
                ans -= (arr[i+1])
                break;
            
            case '*':
                ans *= (arr[i+1])
                break;
            
            case '/':
                ans /= (arr[i+1])
                break;    
            }
        }
        single(symb[symb.length-1],a,ans)
    }else{
        single(symb[0],a,arr[0])
    }
    
}
