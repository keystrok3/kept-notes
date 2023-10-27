import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/NewNote.css';
import { useState } from 'react';

const NewNote = () => {

    const [ title, setTitle ] = useState("");
    const [ note, setNote ] = useState("");
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
                backgroundColor: 'inherit'
            })
        })
        .then(res => res.json())
        .then(navigate('/'));
    };


    return (
        <div className="new-note" style={{
            // backgroundColor: '#363636',
            // color: '#fff',
            height: '100vh',
            
        }}>
            <div className="top-bar">
                <Link type='button' to={'/'}>Back</Link>

                <button className='pin-button' onClick={handleSetPin}>Pin</button>
            </div>

            <div className="note-area">
                <div className="textbox">
                    <input onChange={handleChangeTitle} type="text" placeholder="Title" />
                </div>
                <div className="textarea">
                    <textarea onChange={handleChangeNote} name="note" id="note" placeholder='Note'></textarea>
                </div>
            </div>

            <div className="action-bar">
                <button onClick={handlePublish} className='submit-note'>Publish</button>
            </div>
        </div>
    );
};

export default NewNote;