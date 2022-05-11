const router = require('express').Router();
//import todo models
const todoItemsModel = require('../models/todoitems');

//frist route
router.post('/api/item', async (req,res)=>{
    try {
      const newItem = new todoItemsModel({
        item:req.body.item
      }) 
      const saveItem = await newItem.save()
      res.status(200).json('item added successfuly')
    } catch (error) {
        res.json(err);
    }
})

//second route get data from data base
router.get('/api/items', async (req,res)=>{
    try {
      const allTodoItems = await todoItemsModel.find({}) 
      
      res.status(200).json(allTodoItems) //retrn all items in dabase to json fromate
    } catch (error) {
        res.json(err);
    }
})


//update items
router.put('/api/item/:id', async (req,res)=>{
    try {
      //find item by id
      const updateItem = todoItemsModel.findByIdAndUpdate(req.params.id,{$set:req.body}); 
      
      res.status(200).json('Item updated') //retrn all items in dabase to json fromate
    } catch (error) {
        res.json(err);
    }
})

//delete items
router.delete('/api/item/:id', async (req,res)=>{
    try {
      //find item by id and delete
      const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id); 
      
      res.status(200).json('Item Deleted') //retrn all items in dabase to json fromate
    } catch (error) {
        res.json(err);
    }
})


module.exports = router; 