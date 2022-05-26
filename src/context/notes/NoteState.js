import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const notesInitial = [
        {
            "_id": "6289136ac84a3cb875f0cfbc",
            "user": "6288cc44ae77f60b46fb405a",
            "title": "First Note",
            "description": "Added first note",
            "tag": "personal",
            "date": "2022-05-21T16:29:30.332Z",
            "__v": 0
        },
        {
            "_id": "6289136ac84a3cb875f0cfba",
            "user": "6288cc44ae77f60b46fb405a",
            "title": "First Note",
            "description": "Added first note",
            "tag": "personal",
            "date": "2022-05-21T16:29:30.332Z",
            "__v": 0
        },
        {
            "_id": "6289136ac84a3cb875f0cfbb",
            "user": "6288cc44ae77f60b46fb405a",
            "title": "First Note",
            "description": "Added first note",
            "tag": "personal",
            "date": "2022-05-21T16:29:30.332Z",
            "__v": 0
        },
        {
            "_id": "6289136ac84a3cb875f0cfbd",
            "user": "6288cc44ae77f60b46fb405a",
            "title": "First Note",
            "description": "Added first note",
            "tag": "personal",
            "date": "2022-05-21T16:29:30.332Z",
            "__v": 0
        },
        {
            "_id": "6289136ac84a3cb875f0cfqb",
            "user": "6288cc44ae77f60b46fb405a",
            "title": "First Note",
            "description": "Added first note",
            "tag": "personal",
            "date": "2022-05-21T16:29:30.332Z",
            "__v": 0
        },
        {
            "_id": "6289136ac84a3cb875f0cfed",
            "user": "6288cc44ae77f60b46fb405a",
            "title": "First Note",
            "description": "Added first note",
            "tag": "personal",
            "date": "2022-05-21T16:29:30.332Z",
            "__v": 0
        }
    ]
    const [alert, setAlert] = useState(null);
    const showAlert= (message, type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1000);
    }
    const [notes, setNotes] = useState(notesInitial)

    const addNote = (title, description, tag) =>{
        let note = {
            "_id": "6289136ac84a3cb875f0cfbd",
            "user": "6288cc44ae77f60b46fb405a",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-05-21T16:29:30.332Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    const deleteNote = (id) =>{
        const newNotes = notes.filter((notes)=>{return notes._id !== id})
        setNotes(newNotes)
    }

    const editNote = (id, title, description, tag) =>{
      
    }
    return (
        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote, showAlert, alert}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;