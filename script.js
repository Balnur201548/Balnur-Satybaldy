
/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/

let messageWords = []
let theMostFrequentWord;
let numberOfWordsInTheMessage = 0;

document.getElementById("submit").addEventListener("click", function()
{
    let message = document.getElementById("message").value;
    var messageWords = message.split(/[. -?|]/);

    for(var i = 0; i < messageWords.length; i++)
    {
        if(messageWords[i] === "")
        {}
        else
        {
            numberOfWordsInTheMessage = numberOfWordsInTheMessage + 1;
        }
    }

    for(var i = 0; i < messageWords.length; i++)
    {
        messageWords[i] = messageWords[i].toLowerCase();
    }    

    var counter = 0;
    var counterOfRecentWord = 0;

    for(var i = 0; i < messageWords.length; i++)
    {
        for(var j = 0; j < messageWords.length; j++)
        {
            if(messageWords[i] === messageWords[j])
            {
                counter = counter + 1;
            }
            if(counter > counterOfRecentWord)
            {
                counterOfRecentWord = counter;
                theMostFrequentWord = messageWords[i];
            }

            counter = 0;
        }
    }    

    console.log(`The most frequent word of the message is "${theMostFrequentWord}"`);
    console.log(`The number of words in the message is ${numberOfWordsInTheMessage}`);

    var randomObject = randomPhrasesAndPictures[Math.floor(Math.random() * (randomPhrasesAndPictures.length))];
    console.log(randomObject);

    $('#phrase').empty();
    $('#picture').empty();  

    $('#phrase').append(randomObject.phrase);
    $('#picture').attr("src", randomObject.imageURL);
});

// Random phrases and its pictures (represented as an array of objects)
const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]