import './../Comon.css';

const Size = ({handleClickSize}) => {
    
    return (
        <div className="size" id="size">
            <div className="plus" id="plus" onClick={() => handleClickSize("+")}><i className="fa-solid fa-plus fa-2x"></i></div>
            <div className="moins" id="moins" onClick={() => handleClickSize("-")}><i className="fa-solid fa-minus fa-2x"></i></div>
        </div>
    );
}
export default Size;