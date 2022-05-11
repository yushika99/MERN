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
        res.json(err)
    }
})


module.exports = router; 