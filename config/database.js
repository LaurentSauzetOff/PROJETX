const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.gqhf0e9.mongodb.net/social-network",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log("Failed to connect to mongodb"));
