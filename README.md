# globomatics-ui

dependencies needed : 
  1) Node package Manager:
    $ npm -v

  2) Node js:
    $ node -v

  3) Yarn :      https://yarnpkg.com/en/docs/install
    $ yarn --version    

  4) Angular cli :
    $ npm install -g @angular/cli  

  5) tell angularCLI to use the yarn tool as the main dependency manager:
    $ yarn gobal add @angular/cli     or
    $ ng set --global packageManager=yarn

  6) find the angular, angular cli version :
    $ ng version  


Create angular repo with routing using angular CLI:
    $ ng new globomatics-ui --routing 

Start up the app: 
    $ npm start     or
    $ ng serve

Creating a service in project: 
    -> go to root of project (C://pluralsight/Spring Angular/globomatics-ui/globomatics-ui)
    $ ng g service services/globomatics

Creating a component in project: 
    -> go to root of project (C://pluralsight/Spring Angular/globomatics-ui/globomatics-ui)
    $ ng g component components/admin    