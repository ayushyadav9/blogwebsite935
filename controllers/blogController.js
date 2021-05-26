const Blog = require('../models/blog')


const blog_create = (req,res)=>{
    res.render('create',{title: 'Create Blog'});
}

const blog_view = (req,res)=>{
    Blog.find().sort( {createdAt: -1 })
        .then((result)=>{
            res.render('index' ,{title: 'Blogs',blogs: result});
        })
        .catch((err)=>{
            console.log(err);
        }) 
}

const blog_post =(req,res)=>{
    const blog = new Blog(req.body)

        blog.save()
        .then((result)=>{
            res.redirect('/blogs')
        })
        .catch((err)=>{
            console.log(err);
        })
}

const single_blog_view = (req,res)=>{
    const id = req.params.id
    Blog.findById(id)
        .then((result)=>{
            res.render('singleBlog',{title: result.title,blog: result})
        })
        .catch((err)=>{
            res.render('error')
        })
}

const single_blog_delete = (req,res)=>{
    const id= req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect:'/blogs'})
        })
        .catch((err)=>{
            console.log(err);
        })
}

module.exports = {
    blog_create,
    blog_view,
    blog_post,
    single_blog_view,
    single_blog_delete
}