const { prompt } = require("inquirer");
const { writeFileSync } = require("fs");

const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
    default: "Chad",
  },
  {
    type: "input",
    message: "What is your location?",
    name: "location",
    default: "Arcadia, CA",
  },
  {
    type: "input",
    message: "Tell me a little about yourself",
    name: "bio",
    default: "I'm a software engineer and I like dad jokes.",
  },
  {
    type: "input",
    message: "What is your linkedin URL?",
    name: "linkedin",
    default: "https://www.linkedin.com/in/chad-tao-7b688613b/",
  },
  {
    type: "input",
    message: "Give us an img url for your profile",
    name: "img",
    default:
      "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NjQ2NjMyODQ1OTQ0MTg2/rick-sanchez-character-analysis-not-a-nihilist-but-a-cynic.jpg",
  },
];

prompt(questions).then((response) => {
  console.log("MY RESP --- ", response);

  const htmlTemplate = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My Profile</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <h1 class="text-center p-4">Hi, My name is ${response.name}</h1>
    <div class="d-flex justify-content-center">
      <div class="card" style="width: 18rem">
        <img src="${response.img}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${response.name}</h5>
          <p class="card-text">${response.bio}</p>
          <p class="card-text">I live in ${response.location}</p>
          <a href="${response.linkedin}" class="btn btn-primary">LinkedIn</a>
        </div>
      </div>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
    `;

  writeFileSync("index.html", htmlTemplate);

  console.log("DONE!");
});
