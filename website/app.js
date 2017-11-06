const message = prompt("Choose an Option:\n1:Show messages\n2:Add a message\n3:Delete a message\n0:Quit");

const messages = [
    "message 01",
    "message 02",
    "message 03",
    "message 04",
    "message 05"
]

const output = document.getElementById("output")

if(message == 1){
    for(i=0;i<messages.length;i++)
    {
        let k = i;
        k++;
        output.innerHTML += (k + ": " + messages[i] + "<br>"); 
    }
} else if(message == 2){
    const message2 = prompt("Please Enter a new message:");
    messages.push(message2);
    for(i=0;i<messages.length;i++)
    {
        let k = i;
        k++;
        output.innerHTML += (k + ": " + messages[i] + "<br>"); 
    }
} else if(message == 3){
    let message3 = prompt("Enter the message index (between 1 and 5):")
    parseInt(message3);
    message3--;
    messages.splice(message3,1);
    for(i=0;i<messages.length;i++)
    {
        let k = i;
        k++;
        output.innerHTML += (k + ": " + messages[i] + "<br>"); 
    }
} else if(message == 0){
    output.innerHTML="Good Bye";
} else{
    output.innerHTML="Please refresh your browser and select a correct command.";

}