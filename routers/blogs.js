const express = require('express')
const blogController = require('../controllers/blogController')
const router = express.Router()

//create
router.get('/create',blogController.blog_create)
// All blogs
router.get('/', blogController.blog_view)
// Post request coming from create Blog
router.post('/',blogController.blog_post)
// Single Blog
router.get('/:id',blogController.single_blog_view)
// Delete that Blog
router.delete('/:id',blogController.single_blog_delete)


module.exports = router;