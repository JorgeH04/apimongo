const express = require('express');
const router = express.Router();
const Task = require('../models/task.js');


router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
  //res.render('index.hbs', {
  //  tasks
 // });
});

router.post('/add', async (req, res, next) => {
  const task = new Task(req.body);
  await task.save();
  //res.redirect('/');
  res.json({
    'status': 'data saved'
  });
});



router.delete('/:id', async (req, res, next) => {
  //  const { id } = req.params;
    await Task.findByIdAndRemove(req.params.id);
    res.json({
      'status': 'data deleted'
    });
  });

  router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(req.params.id);
    res.render('edit', {
      task
    });
  });  

  router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Task.update({_id: id}, req.body);
    res.redirect('/');
  }); 

module.exports = router;
