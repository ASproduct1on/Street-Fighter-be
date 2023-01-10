Ryu asked a student to implement the ability to add fighters and change their characteristics. Ryu also wants to be able to see who exactly is using the app.

Ryu already has sign-in and sign-up pages, as well as pages for creating and viewing fighter statistics, however there is no backend part.

## Start the project

- ** For the first start ** you need to run

```
. build-start.sh
```

(the executable file `build-start.sh` is in the root folder of the project)

- After that you can start using the command

```
npm start
```

### Project specification

- In the client folder there is a small react application, which includes views for sign-up, sign-in, adding and selecting fighters. The main purpose of this project is to show how a client works with a server. Requests from a client can be viewed in the Network tab in the Chrome Dev tools. When developing the backend, use Postman to test the API.
- The config folder contains a database configuration. The database.json file is used as the database.
- The middlewares folder contains functions that run and handle the request before controllers in the routes folder.
- The repositories folder contains classes for interacting with the database for each entity. You can read about the repository pattern [here](https://shawnmc.cool/2015-01-08_the-repository-pattern)
- The routes folder contains controllers for each entity. This is the entry point for a request to the backend part of the application.
- The services folder contains classes for handling requests according to business logic for each entity. It is very important that controllers remain clean and all business logic is located in services. This allows you to write more readable code and reuse it efficiently.
- The models folder contains models of main application entities. Models describe in what form entities are stored in the database.
- index.js is the entry point to the application and handles the configuration of the server itself.

## Task

You need to implement a REST API for user and fighter entities.

```
    USER:
        GET /api/users
        GET /api/users/:id
        POST /api/users
        PUT /api/users/:id
        DELETE /api/users/:id

    FIGHTER
        GET /api/fighters
        GET /api/fighters/:id
        POST /api/fighters
        PUT /api/fighters/:id
        DELETE /api/fighters/:id
```

---

For create/update entities requests, you need to implement validation via middlewares. Validation rules are defined by entities in the models folder. It is necessary to validate:

- Presence of fields:
  - When creating a user - all fields are required, except for `id`
  - When creating a fighter - all fields are required, except for `id` and `health`
  - When updating a user or a fighter - at least one field from the model must be present
- Id in the request body should NOT be present
- The presence of any extra fields (not from the `models` folder) is not allowed
- Fields format:
  - email - allow only @gmail domain
  - phoneNumber: +380xxxxxxxxx
  - power - number, 1 <= power <= 100
  - defense - number, 1 <= defense <= 10
  - health - number, 80 <= health <= 120, optional (default - 100)
  - password - string, min 3 characters

All additional validations are welcome.
** You cannot use third-party libraries for validations **

---

You will also need to implement `response.middleware` to return the server response according to the following rules:

- If everything went well - return the 200 status code and JSON with response data
- Errors
  _ Request errors (validation, handling issues) - return the 400 status code and JSON with an error
  _ If requested data is not found - return the 404 status code and JSON with an error
  Format of JSON errors

```
{
    error: true,
    message: ''
}
```

---

The database **should not** contain:

- Users with the same "email"
- Users with the same "phoneNumber"
- Fighters with the same "name"
  (all fields are case insensitive)

---

Try to provide brief but clear error messages, for example:

- User not found
- User entity to create isn't valid

---

During the implementation of the homework, it is very important to consider project structure and layers:

- repositories - work with the database
- services - handle business logic of the application
- routes - receive requests and send responses

### Additional task

- Add the functionality for the fight from the previous task
- Implement saving the fight and viewing their history

[Starter](https://github.com/BinaryStudioAcademy/lecture-starter-nodejs)
