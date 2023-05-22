let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likesCount: 0,
            img_url: 'https://variety.com/wp-content/uploads/2020/08/0-thumb.jpg?w=681&h=383&crop=1'
        },
        {
            id: "2",
            message: "It's my first post",
            likesCount: 10,
            img_url: 'https://static1.pocketlintimages.com/wordpress/wp-content/uploads/149551-tv-feature-what-is-the-best-order-to-watch-the-x-men-movies-image1-y5wpzep24w.jpg?q=50&fit=contain&w=943&h=&dpr=1.5'
        },
        {
            id: "3",
            message: "It's my 2 post",
            likesCount: 20,
            img_url: 'https://los40mx00.epimg.net/los40/imagenes/2021/09/23/cinetv/1632407274_510548_1632407716_gigante_normal.jpg'
        }
    ],
    newPostText: 'Проделать аналогичное упраждение для Messages'
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 10,
                img_url: 'https://variety.com/wp-content/uploads/2020/08/0-thumb.jpg?w=681&h=383&crop=1'
            }
            // поскольку реакт не перерисовывает компоненту, если не изменился state, то мы создаем копию state, изменяем ее и возвращаем вместо исходного state
            let StateCopy = { ...state };
            StateCopy.posts = [...state.posts];
            StateCopy.posts.push(newPost);
            StateCopy.newPostText = ''
            return StateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let StateCopy = { ...state };
            StateCopy.newPostText = action.newText;
            return StateCopy
        }
        default:
            return state
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default profileReducer;