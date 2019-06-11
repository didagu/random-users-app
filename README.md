# RandomUsersApp

Simple application displaying information from a list of random users in a table as well as extended information for each of the users

## Project setup
Run the command below to install the dependencies
```
npm install
```
### Create environment variables
You will need to create an account on [https://randomuser.me] and created a .env file at the root of the project with the contents as below
```
VUE_APP_ROOT_API=https://randomuser.me/api/
VUE_APP_SEED=<RANDOM-API-USER-NAME>
```

### Compiles and hot-reloads for development
```
npm run serve
```
The application is now running on
```
locahost:8080
```

### Login Credentials
You can login using any of the credentials below:
```
username: "admin"
password: "admin"

username: "abas-erp"
password: "abas-erp"
``` 

### Run your unit tests
```
npm run test:unit
```

### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
