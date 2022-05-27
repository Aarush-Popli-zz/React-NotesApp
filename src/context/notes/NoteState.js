import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const host = "http://localhost:5000";
    const notesInitial = [];
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

    const getNote = async () =>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4OGNjNDRhZTc3ZjYwYjQ2ZmI0MDVhIn0sImlhdCI6MTY1MzEzNjc1Mn0.gbebe88KS49OzYrHrfkEL6iULt9tuUHx0O5goDNg7gE'
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }

    const addNote = async (title, description, tag) =>{
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4OGNjNDRhZTc3ZjYwYjQ2ZmI0MDVhIn0sImlhdCI6MTY1MzEzNjc1Mn0.gbebe88KS49OzYrHrfkEL6iULt9tuUHx0O5goDNg7gE'
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = await response.json();
        
        let note = {
            "_id": "6289136ac84a3cb875f0cfbc",
            "user": "6288cc44ae77f60b46fb405a",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-05-21T16:29:30.332Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
        console.log(json)
    }

    const deleteNote = async (id) =>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4OGNjNDRhZTc3ZjYwYjQ2ZmI0MDVhIn0sImlhdCI6MTY1MzEzNjc1Mn0.gbebe88KS49OzYrHrfkEL6iULt9tuUHx0O5goDNg7gE'
            }
        });
        const json = response.json();
        console.log(json)
        const newNotes = notes.filter((notes)=>{return notes._id !== id})
        setNotes(newNotes)
    }

    const editNote = async (id, title, description, tag) =>{
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4OGNjNDRhZTc3ZjYwYjQ2ZmI0MDVhIn0sImlhdCI6MTY1MzEzNjc1Mn0.gbebe88KS49OzYrHrfkEL6iULt9tuUHx0O5goDNg7gE'
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = response.json();
        
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element._id === id){
                element.title = title;
                element.description = description;
                element.tag = tag;
            } 
        }
        console.log(json)
    }
    return (
        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote, getNote, showAlert, alert}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;