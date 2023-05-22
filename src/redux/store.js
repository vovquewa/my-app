import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";

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
            
        },
        sidebar: {}
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
        // обрабатываем action в зависимости от его типа (type) и возвращаем измененный state (новый state)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        // обновляем DOM
        this._callSubscriber(this._state)

    }
}

export default store;

