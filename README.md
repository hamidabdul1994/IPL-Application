IPL-Application

Used technology AngularJs framework,Firebase Database, HTML,and BootStrap.

Description about IPL Application:
My project content Several Angular component and some css style.

a)Angular Component:

    1)My Service :(js/services/)
        cacheService.js : content Cache handling and creating cache object using $cacheFactory service
        teamService.js  : Service is capable to catch database from firebase , retrive data from firebase storage, and give back to caller controller
  
    2)Controller :(js/controllers/)
        teamCtrl.js     : this controller is use teamService for fetching data and display the all Team list on view 
        teamInfoCtrl.js : this controller is use teamSerivce for retriving data and display the appropiate data on view screen
    3)Directive :(js/directive/)
        playerDirective.js: directive is display the PlayerInfo in Card Layout form and take input as teamObj from teamInfoCtrl.js controller
  
    4)Module    :("ngMaterial")
        Location is coming from NPM so you have to install using package.json,
    5)Package.json:
        it content some dependacies about IPL-Application
  
