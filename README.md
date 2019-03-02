== Scaffolding ==
$npm install
sudo npm install express-generator --global
express . 
mkdir env/development > touch config.json (mongo db url)
mkdir lib (dbms mongo files)
mkdir media_app (express app folder)
move express folders to media_app/*

== Grunt ==
touch gruntfile.js (configure to watch and lint router files)

== Nodemon ==
touch nodemon.json (watch express stuff and lib, ignore the rest)

== Update Start Scripts ==
update package.json scripts to start the bash script from ./media_app/bin/www

== Start the Web App ==
nodemon