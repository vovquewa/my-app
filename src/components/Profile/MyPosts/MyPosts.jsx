import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
// import rerenderEntireTree from "../../../index";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile_reducer";



const MyPosts = (props) => {

    let postsElements = props.posts.map(post => (
        <Post
            message={post.message}
            likesCount={post.likesCount}
            img_url={post.img_url}
        />
    ))

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        // props.updateNewPostText('');


    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    

    let newPostElement = React.createRef();

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;