let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let SEND_MESSAGE = 'SEND-MESSAGE';

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

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}



let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it-kamasutra?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' }
            ],
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Victor' },
                { id: 6, name: 'Valera' }
            ],
            newMessageBody: '',
            
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 10,
                img_url: 'https://variety.com/wp-content/uploads/2020/08/0-thumb.jpg?w=681&h=383&crop=1'
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            let newMessage = {
                id: 6,
                message: body
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscriber(this._state)
        } 
    }
}



window.store = store;
export default store;

