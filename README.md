# code-challenge

## Installation 
1. clone down this repo 
2. cd server, the install dependencies 
3. (within the server) update the env file
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:xr0CgXEmh0E2tFz70Bhm4UhIWt63g9CajQ7fStnh3FI=
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=code_challenge
DB_USERNAME=root
DB_PASSWORD=password

4. create a mysql db named code_challenge
5. run: php artisan serve
6. cd client, npm install the dependencies
7. (within client) run npm start


### Table inspections 

1. Create a skills table

create table skills(
   skill_id INT NOT NULL AUTO_INCREMENT,
   skill_name VARCHAR(100) NOT NULL,
   skill_status VARCHAR(100) NOT NULL,
skill_tag VARCHAR(100) NOT NULL,
   PRIMARY KEY ( skill_id )
);

2. create a users table or migrate the table that is already made with laravel breeze 

