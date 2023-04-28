Docker images for basic web servers. 

Topcoder RDM competition sample submissions / starter packs. 
Feel free to use for personal / POC projects as well.

Properties:
* Each folder contains a minimal web server with a particular language + server library combination
* Each server contains:
  * the code for a mock API call, as well as 
  * the code for hosting a single static web page
* The API and the web page are hosted through port 8080

Usage:
To run and test an app, run
```
docker-compose down -v && docker-compose up --build
```
within the "sample-and-tester" folder. This spins up your code within the "code" folder, and then tests it against the tests in the "tester" container. The TC automated tester can be thought to function similar to this. 

When you are happy with the code in your "code" folder, compress it into code.zip and submit that to the RDM challenge.

If you want to add your own starter pack submission, just send a PR with your addition.
