# Notes

Instead of runnning the asynchronous calls in parallel, I made sure they only ran one at a time for the sake of reading the output. However, if the goal was to try to get the results as fast as possible I could begin the log sources as soon as possible (and probably throttle the max amount running based on CPU recources) and let them start as soon as possible.

There will definately be bottle necks in merging 1K - 1M log sources, especially with the asynch method because of the time it takes to return results for each entry. One solution would be parallelization of the processes, like I mentioned earlier.

# Your Task

Imagine you are given a set of log sources.  Each source is comprised of N log entries.  Each entry is a simple javascript object with a timestamp and message.  You don't know how many log entries each source has, BUT you do know that the entries within each source are sorted chronologically (that last bit is important).

Your mission is to print out all of the entries, across all of the sources, in chronological order.  You don't need to store the final collection of all the entries, literally just print them to console.  Some things to keep in mind:

* You don't know how long each log source is.  What if it had millions of entries and was terabytes in size?  (In other words, reading the entirety of a log source into memory probably won’t work well.)
* Some log sources could contain logs from last year, some from yesterday, you won't know the timeframe of a log source until you start looking.
* Consider what would happen when you're asked to merge 1K log sources, or even 1M log sources.  Where might your bottlenecks arise?

There are two parts of the challenge which you'll see when you dive into things.  You can get started with things by running `npm start`.

We expect candidates to spend 1-3 hours on this exercise.  By the way, you may use any third party modules you like, and by all means feel free to ask questions!


## Submission

Simply create a GitHub repo and name it something fun (please don't give it the same name as this repo).  Then email us a link!
