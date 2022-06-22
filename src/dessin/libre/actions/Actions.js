import './../Comon.css'

const Actions = ({handleClickActions}) => {
    return (
        <div className="actions" id="actions">
            <span id="erase" className="erase" onClick={() =>  handleClickActions ("erase")}><i className="fa-solid fa-eraser fa-2x" ></i></span>
            <span id="clear" className="clear" onClick={() =>  handleClickActions ("clear")}><i className="fa-solid fa-times fa-2x"></i></span>
            <span id="save" className="save"   onClick={() =>  handleClickActions ("save")}><i className="fa-solid fa-floppy-disk fa-2x"></i></span>
        </div>
    );
}
export default Actions;