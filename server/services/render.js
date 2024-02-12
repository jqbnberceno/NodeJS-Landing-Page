const axios = require('axios');

exports.login = (req,res) => {
    res.render('lol');
}

exports.homeRoutes = (req,res) =>{

    // request

    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        console.log(response)
        res.render('index',{users: response.data});
    })
    .catch(err=>{
        res.send(err);
    })

    
}

exports.add_user = (req,res) => {
    res.render('add_user');
}

exports.update_user = (req,res) => {
    axios.get('http://localhost:3000/api/users',{params:{id: req.query.id}})
    .then(function(userdata){
        res.render("update_user", {user: userdata.data})
    })
    .catch(err => {
        res.send(err);
    })
}

exports.view_user = (req,res) => {
    axios.get('http://localhost:3000/api/users',{params:{id: req.query.id}})
    .then(function(userdata){
        res.render("view_user", {user: userdata.data})
    })
    .catch(err => {
        res.send(err);
    })
}