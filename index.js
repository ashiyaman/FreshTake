require('./db/db.connect.js')
const Post = require('./models/post.model.js')
const User =  require('./models/user.model.js')

const userData = {
    name: 'Ashiya',
    email: 'ashiya@gmail.com'
}

const addUser = async(userData) => {
    try{
        const user = new User(userData)
        await user.save()
    }
    catch(error){
        console.log(error)
    }
}

//addUser(userData)

const postData = {
    title: 'Greeting',
    content: 'Have a good day!',
    author: '679ce46da9597becff6e88df'
}

const addPost = async(postData) => {
    try{
        const post = new Post(postData)
        await post.save()
        console.log('Post added successfully')
    }
    catch(error){
        console.log(error)
    }
}

//addPost(postData)

const getAllPosts = async() => {
    try{
        const posts = await Post.find().populate('author')
        console.log('All Posts: ', posts)
    }
    catch(error){
        console.log(error)
    }
}

getAllPosts()