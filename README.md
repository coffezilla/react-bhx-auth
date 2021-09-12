# react-bhx-auth

Authentication is one of the most time-consuming things to do when you have to deal with web projects. This projects is a ReactJS authentication using [JWT (json web token)](https://jwt.io/) with REST calls to a server. 

There's a backend folder inside the project with PHP pages (Apache server) for login.

The token is saved locally using [local storage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage).

## Dependencies
- Axios

## Feat

- ReactJS with create-react-app
- Typescript
- JWT - Token
- PHP backend
- REST
- [Axios](https://www.npmjs.com/package/axios)

## How to use

In order to use this project get the component's folder (components/Auth) and the helper's folder. In components, the component Auth has two main functions:

- serverLoginUser: to send a post request to login
- getAuth: get the current status of the user.

## Login form

In the example inside this project you can test one form login but you can pretty much use the form validator you like.

## Local storage

When the user loggin successfully, the component save a json inside the local storage.

```json
{
  "auth": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiaHhzaXRlcyIsImVtYWlsIjoiZm9vQG1haWwuY29tIn0.Sk0VtWo_UNSaW-TfGjvMGpiOwxx4cz9SEDkjx70MZvE",
    "email": "foo@mail.com",
    "timestamp": "2020-09-02 21:14:13"
  }
}
```

## Backend

Even though is not the main purpose, inside this project you will find a backend folder with PHP files.

You can put this folder inside your [localhost](http://localhost) and change the endpoint inside the components folder. The default value for this is pointing to some BHX Sites path with the same file but you can do this locally or even try use NodeJS instead of PHP (Apache).

### Htaccess

PHP - Apache: In order to make the authorization call using apache, provide the htaccess configuration in the header:

```
<IfModule mod_rewrite.c>
    RewriteEngine On
    SetEnvIf Authorization .+ HTTP_AUTHORIZATION=$0
</IfModule>
```

### Fake data inside PHP

For testing purposes you will need to put **foo@mail.com** as e-mail and **123** as password.

Inside the PHP (login.php) page you will find the a simple checker to check if the login is correct.

```php
// fake database return
$DATABASE_PASSWORD = md5('123');
$DATABASE_EMAIL = 'foo@mail.com';
```

### JWT serverKey

In order to use JWT you have to define a key (string). Set this inside the PHP page (auth.php)

```php
// JWT config
$JWTServerkey = '123123';
```

## Example

![login.gif](react-bhx-auth%209006df9d7f2a492388f768486923f721/login.gif)
