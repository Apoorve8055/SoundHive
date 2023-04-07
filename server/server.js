import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send({
    Name: "SoundHive",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
