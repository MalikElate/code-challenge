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

4. create a mysql db named code challenge
5. run: php artisan serve
6. cd client, npm install the dependencies
7. (within client) run npm start
