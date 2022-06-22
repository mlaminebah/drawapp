
import './../Comon.css';

const Type = ({handleClickType}) => {
    

    return (
        <div className="type" id="type">
             <input type="radio" name="pen-type" value="pencil" id="pen-pencil" onClick={ e => handleClickType(e.target.value)} defaultChecked={true}/>
             <label htmlFor="pen-pencil"><i className="fa fa-pencil"></i></label>
             <input type="radio" name="pen-type" value="brush" id="pen-brush" onClick={ e => handleClickType(e.target.value)}/>
             <label htmlFor="pen-brush"><i className="fa fa-paintbrush"></i></label>    
        </div>
    );
}
export default Type;