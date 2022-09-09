function sayMessage(message){
    console.log(message);
}

function sayMessage(){
    console.log("Default Message");
}

sayMessage("Hello!");


var sayMessage = new Function("message", "console.log(message);");

sayMessage = new Function("console.log(\"Default Message\");");

sayMessage("Hello!")

