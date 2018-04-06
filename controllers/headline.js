//Grabs all articles from DB and populate main page with every article
app.get("/", function(req, res) {
    db.Headline.find({})
    .then(function(dbHeadline) {
      return res.render("index", {headline: dbHeadline});
      console.log(dbHeadline);
    })
    .catch(function(err) {
      res.json(err);
    });
  });