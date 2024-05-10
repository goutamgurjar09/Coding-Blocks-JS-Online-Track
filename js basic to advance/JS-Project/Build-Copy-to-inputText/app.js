let inputtext = document.querySelector('#copyInput')


function copyText(){
    inputtext.select()
    document.execCommand('copy')
}






// execCommand() is a method in JavaScript that is used to perform various clipboard-related operations 
//and  text formatting in the browser It was part of the Document Object Model (DOM) and was primarily used with editable content, such as in contentEditable elements.

// Here is a brief overview of execCommand():

// Usage:
// document.execCommand(command, showUI, value);
// command: A string representing the command to be executed (e.g., 'copy', 'cut', 'paste', 'bold', 'italic', etc.).
// showUI: A Boolean indicating whether the browser should provide UI feedback for the execution of the command.
// value: A value associated with some commands (e.g., the font name or size).

// Text Formatting: 'bold', 'italic', 'underline', 'strikethrough', etc.
// Clipboard Operations: 'cut', 'copy', 'paste'.