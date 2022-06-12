const Animal = require("../models/Animal");
const { Router } = require("express");
const router = Router();


//GET All Animals
router.get("/", async (req, res) => {
  var animales = await Animal.find({});
  res.status(200).json(animales);
});


//GET a single animal
//--Recieve ID Animal by params-
router.get('/:id', async(req,res)=>{
  const {id}=req.params
  const animalDetail = await Animal.findOne({id});
  res.send(animalDetail);
  })
  

//Create Animal
router.post("/", async (req, res) => {
  try {
    const animal = new Animal(req.body);
    await animal.save();
    res.status(201).send(animal);    
    console.log("entre al try");
  } catch (error) {
    res.status(500).send({ok: false, msg:' Error creating Animal'});
    console.log(error) 
  }
});

//Edit Animal
router.put('/edit/:id', async (req,res)=>{
  const {id}=req.params
  const update= req.body
  const editAnimal= await Animal.findByIdAndUpdate(id,update, {new:true}); 
  res.status(201).send(editAnimal);
});


//Delete Animal
router.delete('/delete/:id', async (req,res)=>{
  const {id}=req.params;
  await Animal.findByIdAndDelete(id); 
  res.send({ok:true});
});

module.exports = router;