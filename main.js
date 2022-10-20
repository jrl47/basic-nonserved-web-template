// Printing to the console is easy! To open the console in chrome, just hit ctrl+shift+j and click the Console tab
console.log("Hello World!")

// Let's "get" our UI elements. First, just a text field (so we can change it when a button is pressed).
let textDisplay1 = document.getElementById("textDisplay1")
//  ^js variable name                      ^ id of element in HTML (can be same or different from js variable name)

// Now let's "get" a button. Same deal as before.
let button1 = document.getElementById("button1");

// Setting up the button to run a particular function when clicked is not too hard!
// First, let's define the function; what will it do? It will modify the text display we got:
function exampleFunction() {
    textDisplay1.innerText = "lol whoever clicked that button is a loser";
}
//                      ^if your function needs to take in inputs, they would go in these parentheses

// Then, we "give" the function to the button using BUTTON_NAME_HERE.addEventListener()
button1.addEventListener("click", exampleFunction);

// Now it's ready to go!
// Note: when you are "passing" a function like this, you just write its name, "exampleFunction" in this case.
// BUT, if you want to CALL a function (as opposed to just "set it up" to be clicked), write "exampleFunction();".
// And, if for example it was a function that took in a number and a string, it'd be "exampleFunction(1, "test");".

// I also included a Timer utility class that I use in any project that needs a timer.
// It's kind of complicated so I've set up an example here that you might play with. (No need to look in timer.js!)

let timer = new Timer(1000); // the number in the parens is the # of milliseconds between ticks

// Let's define a variable to "count up"
let secondsPassed = 0;

// And a function to increment the variable!
function incrementTime() {
    secondsPassed++; // the ++ operator adds one to any numerical variable in many languages
}

// Setting up a function to run to the timer is similar to setting up a function for when a button is clicked.
timer.addTickCallback(incrementTime);

// Maybe we want the time to be displayed too.
// I'll use this as an opportunity to show how you can create a function within one line for simple stuff.
timer.addTickCallback( () => {textDisplay3.innerText = secondsPassed;} );

// In that last example, "() => {}" just lets you put ANYTHING in the {} and that's what the function will do.