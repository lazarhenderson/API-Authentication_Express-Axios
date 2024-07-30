# User Authentication Management for API Access

This project demonstrates various methods of user authentication for accessing an API. The levels of authentication implemented are:

- **No Auth:** Free access to the API.
- **Basic Auth:** Requires a username and password from the user to access the API.
- **API Key Authorization:** Uses an API key to grant access to API results.
- **Bearer Token:** Uses a Bearer Token to grant access to API results.

## Technologies Used

1. **Express:** A web application framework for Node.js to create the server and handle routes.
2. **Axios:** A promise-based HTTP client for making API requests.
3. **EJS:** A templating engine for rendering HTML views.
4. **CSS:** Basic styling for the frontend.
5. **Basic Authentication:** Secure API requests using a username and password.
6. **API Key Authentication:** Secure access to API endpoints using an API key.
7. **Bearer Token Authentication:** Secure API requests using a Bearer token.
8. **Node.js:** A JavaScript runtime environment for executing server-side code.

## Authentication Methods

### Basic Authentication

To register via Postman:

```http
POST https://secrets-api.appbrewery.com/register
```

**Request Body:**

```json
{
  "username": "jackbauer",
  "password": "IAmTheBest"
}
```

### API Key Authorization

Generate an API key to gain access to the API:

```http
GET https://secrets-api.appbrewery.com/generate-api-key
```

**Example Response:**

```json
{
  "apiKey": "0e0b33ea-3f30-4f6c-a7ae-a9dc6a5d77f9"
}
```

### Bearer Token

Create a Bearer Token using Postman:

```http
POST https://secrets-api.appbrewery.com/get-auth-token
```

**Request Body (must match your registered username & password):**

```json
{
  "username": "jackbauer",
  "password": "IAmTheBest"
}
```

## How to Run

Ensure Node.js is installed on your PC. Then follow these steps:

1. Navigate to the project directory.
2. Install the required NPM packages:

   ```bash
   npm install
   ```

3. Run the code:

   ```bash
   node index.js
   ```

4. Open your web browser (Google Chrome, Safari, Firefox, Opera) and navigate to:

   ```http
   https://localhost:3000/
   ```

5. Use the project!
