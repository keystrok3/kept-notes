

import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/NewNote.css';
import { useEffect, useState } from 'react';
import Colourpicker from '../components/Colourpicker';

const EditNote = () => {

    const [ title, setTitle ] = useState("");
    const [ note, setNote ] = useState("");
    const [ backgroundColor, setBackgroundcolor ] = useState("");
    const [ pinned, setPinned ] = useState(false);

    const navigate = useNavigate();

    const location = useLocation();

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    };

    const handleChangeNote = (e) => {
        setNote(e.target.value)
    };

    const handleSetPin = () => {
        setPinned(!pinned);
    };


    /** Handles click event in EditNote by changing background color 
     * in specific NodeCard and EditNnote components
    */
    const handlePickColour = (value) => {
        setBackgroundcolor(value);
    };

    const handleDelete = () => {
        fetch(`http://localhost:3000/posts/${location.state.id}`, {
            method: 'DELETE'
        })
        .then(navigate('/'));
    };


    const handleEdit = () => {
        fetch(`http://localhost:3000/posts/${location.state.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                title: title,
                note: note,
                pinned: pinned,
                backgroundColor: backgroundColor
            })
        })
        .then(res => res.json())
        .then(navigate('/'));
    };

    useEffect(() => {
        setBackgroundcolor(location.state.backgroundColor)
        setNote(location.state.note);
        setTitle(location.state.title);
        setPinned(location.state.pinned);

    }, [])

    return (
        <div className="new-note" style={{
            height: '100vh',
            backgroundColor: backgroundColor
        }}>
            <div className="top-bar">
                <Link type='button' to={'/'}>Back</Link>

                <button className='pin-button' onClick={handleSetPin}>Pin</button>
            </div>

            <div className="note-area">
                <div className="textbox">
                    <input 
                        onChange={handleChangeTitle} 
                        type="text" 
                        placeholder="Title" 
                        value={title}    
                    />
                </div>
                <div className="textarea">
                    <textarea 
                        onChange={handleChangeNote} 
                        name="note" 
                        id="note" 
                        placeholder='Note'
                        value={note}
                    ></textarea>
                </div>
            </div>

            <div className="action-bar">
                <button 
                    onClick={ handleEdit } 
                    className='submit-note'
                >Publish</button>

                <button onClick={ handleDelete }>Delete</button>

                <Colourpicker onColor={ handlePickColour }/>
            </div>
        </div>
    );
};

export default EditNote;