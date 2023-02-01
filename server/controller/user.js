const user = require("../model/dbModel");

// get all the data
const getAllData = async (req, res) => {
  try {
    const users = await user.find({});
    //    console.log(users)
    res.status(200).json({ users });
  } catch (error) {
    console.log(error.message);
  }
};

// add user data in the database
const addData = async (req, res) => {
  try {
    
    const adduser = await user.create({
      name: req.body.name,
      position: req.body.position,
    });
    res.status(200).json(adduser);
  } catch (error) {
    console.log(error)
   
  }
};

// only get one data
const singleData = async (req, res) => {
  const { id } = req.params; 
  console.log(id);
  const singleData = await user.findById(id);
  res.status(200).json(singleData);
};

// deleting the data
const delData = async (req, res) => {
  const { id } = req.params;
  await user.findByIdAndDelete(id);
  res.send("done");
};
// updating the data
const updateData =  async (req,res)=>{
  try {
    const {id} = req.params
    // console.log(id)
    // const updatedUser = await user.findByIdAndUpdate(id,({name:"daku",position:"terrorist"}))
    const updatedUser = await user.findByIdAndUpdate(id,({      
      name: req.body.name,
      position: req.body.position,
    }))
    res.status(200).json(updatedUser)
  } catch (error) {
     res.status(404).send(error.message)
  }
}
 


module.exports = { getAllData, addData, singleData, delData ,updateData};
