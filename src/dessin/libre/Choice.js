import './Comon.css'
import Type from './type/Type';
import Size from './size/Size';
import Color from './color/Color';
import Actions from './actions/Actions';

const Choice = ({
    handleClickSize,
    handleClickColor,
    handleClickActions,
    handleClickType}) => {
    
    return (
        <div className="choice">
            <Type handleClickType={handleClickType}/>
            <Size handleClickSize={handleClickSize}/>
            <Color handleClickColor={handleClickColor}/>
            <Actions  handleClickActions={handleClickActions}/>
        </div>
    );
}
export default Choice;