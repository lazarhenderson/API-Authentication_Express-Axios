The project demonstrates how to manage authentication of users for accessing an API.

The levels of authentication are:

- No Auth: free access to API
- Basic Auth: require username and password from user to give access to API
- API Key Authorisation: use an API key to give access to an API result
- Bearer Token: use a Bearer Token to give access to an API result

Technology used in project:

1. Express: Web application framework for Node.js to create server and handle routes.
2. Axios: Promise-based HTTP client for making API requests.
3. EJS: Templating engine for rendering HTML views.
4. CSS: Basic styling for the frontend.
5. Basic Authentication: Username and password for secure API requests.
6. API Key Authentication: API key for secure access to API endpoints.
7. Bearer Token Authentication: Bearer token for secure API requests.
8. Node.js: JavaScript runtime environment for executing the server-side code

BasicAuth:

- Need to register via Postman

  POST https://secrets-api.appbrewery.com/register
  Request Body:
  {
  "username": "jackbauer",
  "password": "IAmTheBest"
  }

API Key Authorisation:

- Need to generate an API key to gain access to API
  GET https://secrets-api.appbrewery.com/generate-api-key
  Example Response:

{
"apiKey": "0e0b33ea-3f30-4f6c-a7ae-a9dc6a5d77f9"
}

Bearer Token:

- Need to create Bearer Token using Postman
  POST https://secrets-api.appbrewery.com/get-auth-token

Request Body (must be the same as your username & password for when you registered previously):
{
"username": "jackbauer",
"password": "IAmTheBest"
}

How to run (ensure Node is installed on PC):

1. Ensure in the correct directory
2. Install NPM packages - npm i
3. Run code: node index.js
4. Now go to your web browsing application (Google Chrome, Safari, Firefox, Opera) and type in "localhost:3000/"
5. Use the project!
