import express from "express";

const app = express();
app.use(express.json());

//Dummy data
let dataDummy = [
    { id: 1, name: "ucup" },
    { id: 2, name: "rucup" },
];

//method get
app.get("/users", (req, res) =>{
    res.json(dataDummy);
});

//method get by id
app.get("/users/:id", (req, res) => {
    const {id} = req.params;
    const userId = dataDummy.find((item) => item.id == id);
    console.log(userId);
    if(userId){
        res.status(200).json({msg: "succsess", data: userId});
    }

    if(!userId){
        res.status(404).json({msg: "user tidak ditemukan"})
    };
})


//method post
app.post("/users", (req, res) => {
    const { name } = req.body;
    const newUser = { id: dataDummy.length + 1, name:name };
    dataDummy.push(newUser)
    res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {

})



app.listen(5001, () => console.log("Server running on http://localhost:5001"))