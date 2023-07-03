const QUOTEBANK = [
    {
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison"
    },
    {
        text: "You can observe a lot just by watching.",
        author: "Yogi Berra"
    },
    {
        text: "A house divided against itself cannot stand.",
        author: "Abraham Lincoln"
    },
    {
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe"
    },
    {
        text: "Fate is in your hands and no one else",
        author: "Byron Pulsifer"
    },
    {
        text: "Be the chief but never the lord.",
        author: "Lao Tzu"
    },
    {
        text: "Nothing happens unless first we dream.",
        author: "Carl Sandburg"
    },
    {
        text: "Well begun is half done.",
        author: "Aristotle"
    }
]

window.onload = init;
function init() {
    generateQuote()
}

function generateQuote() {
    let quoteSize = QUOTEBANK.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomData = QUOTEBANK[randomIndex];

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22";

    //Add quote
    let quoteInApiformat = randomData.text.replace(/ /g, "%20");
    twitterLink += quoteInApiformat;
    //Add author
    let authorInApiformat = randomData.author.replace(/ /g, "%20");
    twitterLink += "-" + authorInApiformat;


    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = randomData.text;
    document.getElementById("author").innerText = randomData.author;
}