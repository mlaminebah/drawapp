
import './../Comon.css';

const Color = ({handleClickColor}) => {
    return (
        <div className="color" id="color">
                <div className="color-palette" style={{backgroundColor: "blue"}} onClick={() => handleClickColor("blue")}></div>
                <div className="color-palette" style={{backgroundColor: "red"}} onClick={() => handleClickColor("red")}></div>
                <div className="color-palette" style={{backgroundColor: "green"}} onClick={() => handleClickColor("green")}> </div>
                <div className="color-palette" style={{backgroundColor: "yellow"}} onClick={() => handleClickColor("yellow")}></div>
                <div className="color-palette" style={{backgroundColor: "black"}} onClick={() => handleClickColor("black")}></div>
                <div className="color-palette" style={{backgroundColor: "orange"}} onClick={() => handleClickColor("orange")}></div>
        </div>

    );
}
export default Color;