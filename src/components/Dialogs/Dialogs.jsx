import React from "react";
// import classes from './Dialogs.module.css';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs_reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage; 

    let dialogElements = state.dialogs.map(dialog => (
        <DialogItem
            name={dialog.name}
            id={dialog.id}
        />
    ))



    let messagesElements = state.messages.map(message => (
        <Message
            message={message.message}
        />
    ))

    let newMessageBody = state.newMessageBody;
    window.state = state;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <h3>Add dialog:</h3>
                    <textarea
                        placeholder="Enter the matrix"
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                    ></textarea>
                    <br />
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

        </div>


    );
}

export default Dialogs;