console.log("test")

// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray, punctuation, number) {

    // Each time the for loop executes, you're going to add one more word to this string. Uses 1 to offset the array vs 0 would give you one more than stated. 
    let buildMeUp = ""
    let symbol = punctuation
    for (let i = 1; i < number; i++) {
        symbol = punctuation + symbol
    }



    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp


        if ((i + 1) % 3 === 0) {
            buildMeUp = buildMeUp + " " + theWordArray[i] + symbol
        }
        else {
            buildMeUp = buildMeUp + " " + theWordArray[i]
        }

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
// I want to use a question mark
addExcitement(sentence, "🌈", 3)
