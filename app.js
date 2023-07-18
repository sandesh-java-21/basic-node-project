import chalk from "chalk";
import express from "express";
import chalkAnimation from "chalk-animation";

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (error) => {
  if (error) {
    console.log(
      chalk.blue("Something went wrong while starting the server: ", error)
    );
  } else {
    const rainbow = chalkAnimation.rainbow(
      `Server Is Running On PORT: ${PORT}`
    );
    rainbow.start();
  }
});
