**Important Note**

*This is also a Scheduled Command (it runs on local with "php artisan delete:exhibits") which is created to empty the saved entries of Files. It is being called on 1st day of every month at 3 a.m.*

**Requirements**
*  PHP 7.2
    
    For Ubuntu  : [PHP](https://tecadmin.net/install-php-7-on-ubuntu/)
    
    For Windows : [XAMPP](https://www.apachefriends.org/download.html)

**Box Test Account**

    Email: `pilottest0007@gmail.com`
    
    Password: `Uimatic@279`
    
**For Staging Purpose Only**

1. Go to [Box Account Dev Console](https://app.box.com/developers/console) and open "My Apps -> TestApp".

2. Click on "Configuration" from left sidebar.

3. Head to "OAuth 2.0 Redirect URI" and update "http://localhost:8000/box/callback" with "<SERVER_URL>/box/callback".

4. Finally, head to "CORS Domains" on same page and update "http://localhost:8000" with Server URL

**Setup**

1. Go to [localhost/phpmyadmin](localhost/phpmyadmin) and create a new Database naming: `box-api`

2. Open terminal, run `cd /var/www/html/box-api` and run the following commands in it:

    `composer install`

    `cp .env.example .env`

    `php artisan key:generate`

3. Open `.env` file and update

    *Database*
    
    `DB_DATABASE=box-api`
    
    `DB_USERNAME=root`             // Change accordingly
    
    `DB_PASSWORD=root`             // For windows it may be empty or change accordingly
    
    
    *Box Creds*
    
    `BOX_AUTHORIZATION_URL=https://account.box.com/api/oauth2/authorize`

    `BOX_AUTHENTICATION_URL=https://api.box.com/oauth2/token`

    `BOX_CLIENT_ID=pfvvytcuxjj6rmqod4qhw57nk9k586tj`

    `BOX_CLIENT_SECRET=4wNyWn7O780wClKcbX6Pia4Zzhvvp2Cp`

    `BOX_REDIRECT_URI=http://localhost:8000/box/callback`      // Replace "http://localhost:8000" with Server URL
    
    *Mail*
    
    `MAIL_DRIVER=smtp`
    
    `MAIL_HOST=smtp.gmail.com`
    
    `MAIL_PORT=587
    `
    `MAIL_USERNAME=manager.virtualdepositions@gmail.com`
    
    `MAIL_PASSWORD=CaptainPrice@933`
    
    `MAIL_FROM_ADDRESS=manager.virtualdepositions@gmail.com`
    
    `MAIL_FROM_NAME=Support`
    
4. Run

    `git fetch`
    
    `git checkout dev`
    
    `git pull origin dev`
    
    `composer dump-autoload`
    
    `php artisan storage:link`
    
    `php artisan migrate`

    `npm install`

    `npm run prod`
    
5. Serve the application using `php artisan serve`. Go to the browser, open: [localhost:8000](localhost:8000)
