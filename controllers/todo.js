const Todo = require("../models/todo")


//getTodoById
exports.getTodoById =(req,res,next,id) =>{

    Todo.findById(id).exec((err,todoo) => {

        if(err)
        {
            return res.status(400).json({
                error: "Todo not found"
            })
        }

        req.Todo = todoo;
        next();
    })
}


//list all todo items 

exports.getAllTodos = (req,res) => {
    
    Todo.find().exec((err, todos) => {
        if(err)
        {
            return res.status(400).json({
                error: "NO TODOS FOUND"
              });
        }
        res.json(todos);
    })
}






//Create a todo item  

exports.addTodo = (req,res) =>{

    const todo = new Todo(req.body)
    todo.save((err,todo) => {

        if(err)
        {
            return res.status(400).json({
                error: "Todo insert error something went wrong ",err
            })
        }
        res.json({ todo })
    })

}

//update a todo item based on its id 
exports.updateTodoById = (req,res) => {

    const todo = req.Todo;
    todo.text = req.body.text;


    todo.save((err,updatedTodo) => {
        if(err)
        {
            return res.status(400).json({
                error: "Fail to update Todo  ",err
            })   
        }
        res.json(updatedTodo)
    })

}

//delete a todo item based on its id 
exports.removeTodoById = (req,res) =>{

    const todo = req.Todo;

    todo.remove((err , removeTodo) => {
        if(err)
        {
            return res.status(400).json({
                error: "Fail to delete Todo",err
            })   
        }
        res.json({
            message:`Success Delete ${removeTodo}`
        })

    } )

}