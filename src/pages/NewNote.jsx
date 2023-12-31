import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/NewNote.css';
import { useState } from 'react';
import Colourpicker from '../components/Colourpicker';

const NewNote = () => {

    const [ title, setTitle ] = useState("");
    const [ note, setNote ] = useState("");
    const [ backgroundColor, setBackgroundcolor ] = useState("");

    const [ pinned, setPinned ] = useState(false);

    const navigate = useNavigate();

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    };

    const handleChangeNote = (e) => {
        setNote(e.target.value)
    };

    const handleSetPin = () => {
        setPinned(!pinned);
    };


    const handlePickColour = (value) => {
        setBackgroundcolor(value);
    };


    const handlePublish = () => {
        fetch('http://localhost:3000/posts', {
            method: 'POST',
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
                    onClick={ handlePublish } 
                    className='submit-note'
                >Publish</button>

                <Colourpicker onColor={ handlePickColour }/>
            </div>
        </div>
    );
};

export default NewNote;