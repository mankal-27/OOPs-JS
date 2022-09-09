function sayMessage(message){

    if(arguments.length === 0){
        message = "Default Message";
    }

    console.log(message);
}

sayMessage("Hello!");
sayMessage();