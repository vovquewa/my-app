import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.img_url} alt='forest' className={classes.image} />
            <div>
                {props.message}
            </div>
            <div>
                <span>
                    Likes {props.likesCount}
                </span>
            </div>
        </div>

    );
}

export default Post;