let button = document.querySelectorAll("button");
let input = document.querySelector("input");
let string = 0;
let operator = ["*" , "+" , "/" , "-", "%"];

function evalute(string) 
{
    let operator = ["*", "+", "/", "-", "%"];
    if (operator.includes(string[0]) || operator.includes(string[string.length - 1])) 
    {
        return "Error";
    }
    for(let i = 1; i<string.length; i++)
    {
        if(operator.includes(string[i]) && operator.includes(string[i-1]))
        {
            return "Error";
        }
    }    
    try 
    {
        return eval(string);
    } 
    catch 
    {
        return "Error";
     }
}

button.forEach((btn) =>{
    if(btn.innerText!="=" && btn.innerText!="DEL" && btn.innerText!="AC")
    {
        btn.addEventListener("click" , () =>{
        console.log(btn.innerText);
        input.value = input.value + btn.innerText;
    })
    }
    else if(btn.innerText=="AC")
    {
        btn.addEventListener("click" , () => {
        input.value = "";
        console.log(btn.innerText);
    })
    }
    else if(btn.innerText=="=")
    {
        btn.addEventListener("click" , () => {
        string = input.value;
        input.value = evalute(string);
    })
    }
    else if(btn.innerText=="DEL") {
    btn.addEventListener("click", () => {
        input.value = input.value.slice(0, -1);
    });
}

})
