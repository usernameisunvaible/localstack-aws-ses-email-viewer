import app from "./app.js";

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
