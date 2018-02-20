var Watcher = require("feed-watcher"),
  feed = "http://www.abc.net.au/news/feed/51120/rss.xml",
  interval = 60; // seconds

// if not interval is passed, 60s would be set as default interval.
var watcher = new Watcher(feed, interval);

// Check for new entries every n seconds.
watcher.on("new entries", function(entries) {
  entries.forEach(function(entry) {
    console.log(entry.title);
    console.log(entry.link);
  });
});

// Start watching the feed.
watcher
  .start()
  .then(function(entries) {
    console.log(entries);
  })
  .catch(function(error) {
    console.error(error);
  });
