/* eslint-disable react/prop-types */



const Colourpicker = ({ onColor }) => {

    const handleValue = (e) => {
        onColor(e.target.value)
    }

    return (
        <button 
            onClick={ handleValue }
            value={'#f3f3f3'}
            className="colour-picker"
        >
            Color
        </button>
    );
};


export default Colourpicker;