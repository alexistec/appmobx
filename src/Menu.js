import React from "react";
import {inject,observer} from 'mobx-react';
import {Modal,Button} from 'react-bootstrap';

class Menu extends React.Component{
    
    constructor(props){
        super(props);
        //this.publicarPosts = this.publicarPosts.bind(this);
        this.state={
            titulo:'',
            description:'',
            iduser:'',
            usuario:'',
            listPostUser:[]
        }

        this.listPost = this.listPost.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    publicarPosts =()=>{
        //const {PostsStore} = this.props;
        
        if(this.state.iduser !=0){
            this.props.PostsStore.publicarPost({
                idpost:10,
                titulo:this.state.titulo,
                image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiA0G6DOZ9Gb6OtdQ9MelKrododBLGgfU2zxdqouD10RlFlX4n',
                description : this.state.description,
                iduser     : this.state.iduser,
                created   :this.state.usuario
            });
        }else{
            alert("Debes seleccionar un user");
        }
    }

    selectUser(event){
        
        const idusuario = event.target.value;
        if(idusuario !== 0){
            this.setState({
                iduser : idusuario,
                usuario:event.target.options[event.target.selectedIndex].text
            })
        }
    }


    listPost =(idusuario,user)=>{
        this.setState({
            showModal:true,
            usuario:user
        });
        //add post
        this.setState({
            listPostUser:this.props.PostsStore.getPostUser(idusuario)
        })
        
    }
    closeModal(){
        this.setState({
            showModal:false
        })
    }
    
    render(){
        //const {PostsStore} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{marginTop:10}}>
                        <h3>Post</h3>
                        <form>
                            <select className="form-control" name='iduser' value={this.state.iduser} onChange={this.selectUser.bind(this)}>
                                <option value="0">Elegir author</option>
                                {
                                    this.props.PostsStore.users.map((usuario,item)=>
                                    <option key={item+1}  data-id={usuario.users} value={usuario.id}>{usuario.users}</option>
                                )}
                            </select><br/>
                            <input type="text" name="titulo" className="form-control" placeholder="Titulo" 
                            onChange={this.handleChange.bind(this)} value={this.state.titulo} /><br/>
                            <textarea className="form-control" rows="3" placeholder="post" name="description" onChange={this.handleChange.bind(this)}></textarea><br/>
                            <button type="button" onClick={()=>this.publicarPosts()} className="btn btn-primary btn-lg btn-block">Publicar</button>
                        </form>
                    </div>
                    <div className="col-md-6" style={{marginTop:10}}>
                        {this.props.PostsStore.posts.map((post,item)=>
                            <div className="card" key={item+1}>
                                <div className="media">
                                    <div className="media-left">
                                        <a href="#">
                                            <img style={{width:180,height:100}} className="media-object" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiA0G6DOZ9Gb6OtdQ9MelKrododBLGgfU2zxdqouD10RlFlX4n" alt="..."/>
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">{post.titulo}</h4>
                                        <p>{post.description}</p>
                                        <span>Created : <a href="#" onClick={()=>this.listPost(post.iduser,post.created)}><strong>{post.created}</strong></a></span>
                                    </div>
                                </div>
                            </div> 
                        )}
                    </div>
                </div>
                <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Post user {this.state.usuario}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       {this.state.listPostUser.map((post,item)=>
                            <div key={item+1}>
                                <h4>{post.titulo}</h4>
                                <p>{post.description}</p>
                            </div>
                        )}
                    </Modal.Body>    
                </Modal>
            </div>
        )
    }
}


export default inject("PostsStore")(Menu);