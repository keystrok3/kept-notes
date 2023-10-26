import '../assets/css/NewNote.css';

const NewNote = () => {


    return (
        <div className="new-note" style={{
            // backgroundColor: '#363636',
            // color: '#fff',
            height: '100vh',
            
        }}>
            <div className="top-bar"></div>

            <div className="note-area">
                <div className="textbox">
                    <input type="text" placeholder="Title" />
                </div>
                <div className="textarea">
                    <textarea name="note" id="note" placeholder='Note'></textarea>
                </div>
            </div>
        </div>
    );
};

export default NewNote;