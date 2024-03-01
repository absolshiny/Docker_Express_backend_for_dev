# Docker_Express_backend_for_dev
## This project
 A simple express app that runs in a Docker container  so you can have a reference  on the files required, without having to install node or anything else
 I find that working with docker is quite usefull but one of my main issues is that all the joy is taken out when I have to isntall the required libraries, framework, lenguage to initiate my project
 so I decided to start this simple endevour just copy this repo and you can start with your back end project! Thought you are probably gonna have to deal with all the network issues it entiles working with docker 
 I would suggest to use docker compose but it is not necessary to do install it to run this specefic project, just Docker would be enought. Docker compose is used to deal with the connections with your DB for example (the back end would not connect to it if it is also running on a docker container)

 ## COMMANDS
 - Build the image:

       docker build -t backend_express .

- Run the image :
  
      docker run -p 3000:3000 backend_express

  ## How to use it:

1.-ge the repo
2.- modify it to your needs
3.- build the image
4.- run the image
5.- If you want to add more features or fix bugs repeat step 2 to 4
