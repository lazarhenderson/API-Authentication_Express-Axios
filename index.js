import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "121x32132x2qsdaa!!!1231!@";
const yourPassword = "1231(&*B8aa8ns87";
const yourAPIKey = "8c3f8e85-7340-46d1-8d59-61899f7052b6";
const yourBearerToken = "c897ac96-30f9-4138-bf63-f243f664a117";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.

  try {
    // Use async/await to make the GET request
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/random"
    );

    // Handle the successful response here
    // console.log("Data from the API:", response.data);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    // Handle any errors here
    console.error("Error status:", error.response.status);
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908

  try {
    // Use async/await to make the GET request with basic authentication
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/all?page=2",
      {
        auth: {
          username: yourUsername,
          password: yourPassword,
        },
      }
    );

    // Handle the successful response here
    // console.log("Data from the API:", response.data);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    // Handle any errors here
    console.error("Error status:", error.response.status);
  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  let url = `https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`;

  try {
    // Use async/await to make the GET request
    const response = await axios.get(url);

    // Handle the successful response here
    // console.log("Data from the API:", response.data);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    // Handle any errors here
    console.error("Error status:", error.response.status);
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402

  try {
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/secrets/42",
      {
        headers: {
          Authorization: `Bearer ${yourBearerToken}`,
        },
      }
    );

    // Handle the successful response here
    // console.log("Data from the API:", response.data);
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    // Handle any errors here
    console.error("Error status:", error.response.status);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
