const express = require("express")
const router = express.Router()

const { getAllTodos ,getTodoById ,addTodo ,updateTodoById ,removeTodoById} = require("../controllers/todo")

router.param("todoId",getTodoById)



//@desc     get all todos
//@route    GET /api/gettodos

router.get("/gettodos", getAllTodos)



//@desc     Add Todo to database
//@route    POST  /api/addtodo

router.post("/addtodo", addTodo)


//@desc  Update Todo in database 
//@route PUT /api/update/:todoId

router.put("/update/:todoId" , updateTodoById)


//@desc  Delete Todo by id
//@route Delete /api/delete/:todoId

router.delete("/delete/:todoId", removeTodoById)


module.exports = router;