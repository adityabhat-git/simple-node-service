# simple-node-service
A simple service using Node JS

This would be a simple Web API application created using Node and Express JS.


Using **Mock Data** would give u a clear picture of DB artifacts. You can us Mongo/SQL/ or any other DB with this project.

The mock data provided can be used to create data of your own.

Whenever you want to run this application on your machine, please make sure of the following things.
1) You should have Node JS installed on your system. In order to do that you can visit the NODE JS website and download the LTS(Long Term Support) version ( URL - https://nodejs.org/en/ ).

2) You should have an IDE installed on your system. In this case I would prefer using Visual Studio Code.
Believe me!!! It is the best IDE to work with. You will enjoy it.

3) Now that you are good with installation part, clone this repository to your local using GIT bash(this is what I prefer, if you are familiar with any other tool , you can use that).

4) Make sure that post cloning you are having "package.json" file present in your local repo( the place where you would clone this repository)
    * In case you are not aware of how to clone a repository from GIT HUB, please follow these simple guidelines - 
        - Download and install GIT SCM from the URL - https://git-scm.com/ .
        - After installation open the folder/drive where you want to clone your repo. In my case I am using E:\ drive.
        - Right click on it and you would be able to see two options - "Git GUI here" and "Git Bash here". Click on the second option (Git Bash here).
        - Now when the bash window is open with the folder being the root write the following command to clone the repo to that folder.
            git clone "repoUrl" . for example - git clone https://github.com/adityabhat-git/simple-node-service.git 
        - Now you are have cloned the repo and ready with the code.

5) Open CMD on the folder where you have cloned the repo and type "code ." . This would open your repo in VS Code.

6) Open the terminal in VS Code and run the command "npm install" and this would install all the packages on your local which are present as dependencies in the package.json file.

7) Package.json file can be created by running a simple command " npm init -y " .This would generate your package.json where you can save all the different dependencies / packages u would be needing to run this project. 

8) We would be using below NPM packages for our project 
    - body-parser - u can have detailed description of this on url - https://www.npmjs.com/package/body-parser .
    - cors - for Cross Origin Resource Sharing. Details of this are present on the url - https://www.npmjs.com/package/cors .
    - express - Details on Url - https://www.npmjs.com/package/express .
    -
