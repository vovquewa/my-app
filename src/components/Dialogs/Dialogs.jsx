import React from "react";
// import classes from './Dialogs.module.css';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(dialog => (
        <DialogItem
            name={dialog.name}
            id={dialog.id}
        />
    ))

    let messagesElements = props.state.messages.map(message => (
        <Message
            message={message.message}
        />
    ))

    let addDialog = () => {
        let text = newDialogElement.current.value;
        alert(text)
    }

    let newDialogElement = React.createRef();


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <h3>Add dialog:</h3>
                <textarea ref={newDialogElement}></textarea>
                <br />
                <button onClick={addDialog}>Send</button>
            </div>
        </div>


    );
}

export default Dialogs;