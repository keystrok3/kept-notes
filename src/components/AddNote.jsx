import { Link } from "react-router-dom";


const AddNote = () => {

    return (
        <Link style={{
            border: '1px solid #000',
            padding: '.25em',
            fontWeight: 'bolder',
            fontSize: '2rem',
            borderRadius: '5px',
            position: 'fixed',
            bottom: '2em',
            right: '3em',
            textDecoration: 'none',
            color: '#000'
        }} type="button" to={'/newnote'}>+</Link>
    )
};

export default AddNote;