var cheerio = require("cheerio");
var request = require("request");

// First, tell the console what server.js is doing
console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from reddit's webdev board:" +
            "\n***********************************\n");

const scraper = function(ch){
// Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
request("https://www.nytimes.com/", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  let $ = cheerio.load(html);

  var results = [];

  // An empty array to save the data that we'll scrape

$(".theme-summary").each(function(i, element, html){

  const title = $(this).text().trim();

  const link = $(this).children(".story-heading").children("a").attr("href");

  const summary = $(this).children("p.summary").text().trim();

  if (title && link && summary) {

  var storyToRead = {
    title: title,
    link: link,
    summary: summary
  }
  results.push(storyToRead);
}


  // results.push({
  //   title: title,
  //   //summary: summary,
  //   link: link
  // });

});

// $("p.summary").each(function(i, element, html){
//   const summary = $(element).text().trim();
//
//   result2.push({
//     summary: summary
//   })
// })
  // console.log(results);
  // console.log(result2);
  ch(results);
});

}
module.exports = scraper;
