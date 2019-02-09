![logo](http://globalex.dot5hosting.com/designware/VueJS_logo_dev.png)

# Taskware Taller No 3

This front-end project is done with VueJs that connects to a back-end RESP-API developed in nodeJS.

## Requirements

VueJS project need a NodeJS API.
nodeJS API there is not in this project. You must clone the other repository.

```shell
you can get NodeJS Api in Link bellow:
https://github.com/habborge/taller01
```

## Project setup

In order to work with Taskware you have to clone te repository.

```shell
git clone https://github.com/habborge/taskware.git && cd taskware
```

After you need install some node modules, to do this, you just need run a simple command

```shell
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Considerations

- http://yourdomainname:8080/#/

### Routes to use:

#### Task Routes

```
`Task List`
http://yourdomainname:8080/#/taskslist

`Task Update`
http://yourdomainname:8080/#/updatetask/:id

`Task Delete`
http://yourdomainname:8080/#/deletetask/:id
```

#### User Routes

```
`User List`
http://yourdomainname:8080/#/userslist

`User Update`
http://yourdomainname:8080/#/updateuser/:id

`User Delete`
http://yourdomainname:8080/#/deleteuser/:id
```
