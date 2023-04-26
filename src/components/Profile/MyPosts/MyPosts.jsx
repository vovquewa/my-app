import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post
                    message='Hi, how are you?'
                    likesCount='0'
                    img_url='https://variety.com/wp-content/uploads/2020/08/0-thumb.jpg?w=681&h=383&crop=1'
                />
                <Post
                    message="It's my first post"
                    likesCount='10'
                    img_url='https://static1.pocketlintimages.com/wordpress/wp-content/uploads/149551-tv-feature-what-is-the-best-order-to-watch-the-x-men-movies-image1-y5wpzep24w.jpg?q=50&fit=contain&w=943&h=&dpr=1.5'
                />
                <Post
                    message="It's my 2 post"
                    likesCount='20'
                    img_url='https://los40mx00.epimg.net/los40/imagenes/2021/09/23/cinetv/1632407274_510548_1632407716_gigante_normal.jpg'
                />

            </div>
        </div>

    );
}

export default MyPosts;