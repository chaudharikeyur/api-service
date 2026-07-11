import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/" , (req , res)=>{
    return res.json({message : "Hey there! Keyur this side! How are you doing bro?"})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
