import {decorate,observable,action} from 'mobx';

class PostsStore {
    users = [{
        id:1,
        users:'Alexis quionez',
        profile:''
    },{
        id:2,
        users:'Gonzalez Pedro',
        profile:''
    },{
        id:3,
        users:'Berg nataly',
        profile:''
    }];

    posts = [];


    publicarPost = (posts)=>{
        this.posts.push(posts);
    }
}

decorate(PostsStore,{
    posts:observable,
    publicarPost:action
})

const postsStore = new PostsStore();


export default postsStore;