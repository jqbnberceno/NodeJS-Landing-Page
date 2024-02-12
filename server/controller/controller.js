const Userdb = require('../model/model');
var userdb = require ('../model/model');

// create and save new user
exports.create = (req,res) => {
    //validate
    if(!req.body){
        res.status(400).send({message: "Cannot be empty"});
        return;
    }

// new user
    const user = new Userdb({ 
        name: req.body.name,
        uploader: req.body.uploader,
        description: req.body.description,
        address: req.body.address
    })

    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user');
        })
        .catch(err =>{
            res.status(500).send({
                message:err.message || "Error occured"
            });
        });

}

// retrieve

exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

// update

exports.update = (req,res) => {
    if(!req.body){
        return res
        .status(400)
        .send({message: "Data to update cannot be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data=>{
        if(!data){
            res.status(404).send({message: `Cannot Update user with ${id}. Maybe user not found!`})

        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Error Update user Information"})
    })
}


// delete

exports.delete = (req,res) => {

    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({message : `Cannot Delete with id ${id}. Maybe is is wrong`})
        }else{
            res.send({
                message: "User Deleted!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message: "Could not delete user with id" + id
        });
    });
 
}