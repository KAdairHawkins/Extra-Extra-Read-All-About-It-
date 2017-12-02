var cheerio = require("cheerio");
var request = require("request");

// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from reddit's webdev board:" +
            "\n***********************************\n");


// Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
request("https://www.nytimes.com/", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  let $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
let results = [];
let result2 = [];

$("article.story").each(function(i, element, html){

  const title = $(element).text().trim();

  const link = $(element).children(".story-heading").children("a").attr("href");

  //const summary = $(element).children(".summary").text().trim();

  results.push({
    title: title,
    //summary: summary,
    link: link
  });

});

$("p.summary").each(function(i, element, html){
  const summary = $(element).text().trim();

  result2.push({
    summary: summary
  })
})
  console.log(results);
  console.log(result2);
});
