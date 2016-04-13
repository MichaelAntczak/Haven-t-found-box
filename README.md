This is a workaround for the problem we had to implement the "Haven't found what you're looking for?" box on the results page on DiscoverEd page. 
Here is our catalogue service page: http://discovered.ed.ac.uk/  

It was originally developed by the Oxford University team, as it can be seen here (scroll to the bottom of the page): http://bit.ly/solo-oxford

Original solution was server side. We don't have access to the Primo servers, so the workaround involves attaching a JS script to the footer of Brief Results page. The whole logic, CSS is in one script: 

js/EUL_HF_box.js

This is still work in progress. At the testing stage at the moment in our sandbox view. 