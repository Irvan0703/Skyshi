const Todo = require('./model');

const store = async(req, res) =>{
    const {activity_group_id, title, is_active, priority} = req.body;
   
    try {
        await Todo.sync();
        const todo = await Todo.create({activity_group_id, title, is_active, priority});

        res.json({
            status: "Success",
            message: "Success",
            data:
                {
                    id: todo.id,
                    activity_group_id: todo.activity_group_id,
                    title: todo.title,
                    is_active: todo.is_active,
                    priority: todo.priority,
                    created_at: todo.createdAt,
                    updated_at: todo.updatedAt,
                    deleted_at: null
                }
            
        });
    } catch(e) {
        res.send(e);
    }
}

const view = async(req, res) =>{
    try {
        const product = await Todo.findAll({
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
                    activity_group_id: product[0].activity_group_id,
                    title: product[0].title,
                    is_active: product[0].is_active ? 1 : 0,
                    priority: product[0].priority,
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
        const product = await Todo.findAll();
        let data = [];

        for(let i = 0; i < product.length; i++){
            data[i] = 
            {
                id: product[i].id,
                activity_group_id: product[i].activity_group_id,
                title: product[i].title,
                is_active: product[i].is_active ? 1 : 0,
                priority: product[i].priority,
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
    const {activity_group_id, title, is_active, priority} = req.body;
    
    try {
        await Todo.sync();
        await Todo.update({activity_group_id, title, is_active, priority}, {
            where: {
                id: req.params.id
            }
        });
        const product = await Todo.findAll({
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
                    activity_group_id: product[0].activity_group_id,
                    title: product[0].title,
                    is_active: product[0].is_active ? 1 : 0,
                    priority: product[0].priority,
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
         await Todo.destroy({
            where: {
                id: req.params.id
              }
        });
        res.json({
            "status": "Success",
            "message": "Success",
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