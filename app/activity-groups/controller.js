const Activity = require('./model');


const store = async(req, res) =>{
    const {email,title} = req.body;
    
    try {
        await Activity.sync();
        const activity = await Activity.create({email,title});

        res.send({
            status: "Success",
            message: "Success",
            data: {
                id: activity.id,
                email: activity.email,
                title: activity.title,
                created_at: activity.createdAt,
                updated_at: activity.updatedAt,
                deleted_at: null
            }
        });
    } catch(e) {
        res.send(e);
    }
}

const view = async(req, res) =>{
    try {
        const product = await Activity.findAll({
            where: {
                id: req.params.id
              }
        });
        res.send({
            status: "Success",
            message: "Success",
            data:
                {
                    id: product[0].id,
                    email: product[0].email,
                    title: product[0].title,
                    created_at: product[0].createdAt,
                    updated_at: product[0].updatedAt,
                    deleted_at: null
                }
            
        });
    } catch (err) {
        console.log(err);
    }
}

const index = async(req, res) =>{
    try {
        const product = await Activity.findAll();
        data = [];
        for(let i = 0; i < product.length; i++){
            data[i] = {
                id: product[i].id,
                email: product[i].email,
                title: product[i].title,
                created_at: product[i].createdAt,
                updated_at: product[i].updatedAt,
                deleted_at: null
        }
        }
        res.send({
            status: "Success",
            message: "Success",
            data
        });
    } catch (err) {
        console.log(err);
    }
}

const update = async(req, res) =>{
    const {email,title} = req.body;
   
    try {
        await Activity.sync();
        const upd = await Activity.update({email,title}, {
            where: {
                id: req.params.id
            }
        });

        const product = await Activity.findAll({
            where: {
                id: req.params.id
              }
        });
        res.send({
            status: "Success",
            message: "Success",
            data:
                {
                    id: upd.id,
                    email: product[0].email,
                    title: product[0].title,
                    created_at: product[0].createdAt,
                    updated_at: product[0].updatedAt,
                    deleted_at: null
                }
            
        });
    } catch(e) {
        res.send(e);
    }
}

const destruct = async(req, res) =>{
    try {
         await Activity.destroy({
            where: {
                id: req.params.id
              }
        });
        res.send({
            "status": "Not Found",
            "message": `Activity with ID ${req.params.id} Not Found`,
            "data": {}
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    store,
    view,
    index,
    update,
    destruct
}