import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const addnote = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const clearnote = () =>{
        document.getElementById("note-form").reset();
    }
    return (
        <div>
            <h1>Add a Note</h1>
            <form className="row g-1" id='note-form'>
                <div className="form-floating mb-2 col-md-8 pe-1">
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="titleHere" onChange={onChange} placeholder="name@example.com" />
                    <label htmlFor="title" className="form-label">Title</label>
                </div>

                <div className="form-floating mb-2 col-md-4 ps-1">
                    <input type="text" className="form-control" id="tag" name="tag" aria-describedby="tagHere" onChange={onChange} placeholder="General" />
                    <label htmlFor="tag" className="form-label">Tag</label>
                </div>
                
                <div className="form-floating mb-2">
                    <textarea className="form-control" id="description" rows="5" name="description" style={{"height": "150px"}} onChange={onChange} placeholder="Enter description"></textarea>
                    <label htmlFor="description" className="form-label">Description</label>
                </div>
            </form>
            <button type="submit" className="btn btn-success" onClick={addnote}>Add Note</button>
            <button type="reset" className="btn btn-danger float-end" onClick={clearnote}>Clear All</button>
        </div>
    )
}

export default AddNote