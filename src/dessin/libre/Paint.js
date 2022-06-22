
import './Comon.css';
import Canvas from './Canvas';
import Choice from './Choice';
import { useRef } from 'react';

function Paint() {
  
  const handleClickSizeRef = useRef (null);
  const handleClickColorRef = useRef (null);
  const handleClickActionsRef = useRef (null);
  const handleClickTypeRef = useRef (null);

  return (
    <div className="paint">
        <Choice 
          handleClickSize={(actionSize)=> handleClickSizeRef.current (actionSize)}
          handleClickColor={(color) => handleClickColorRef.current (color)}
          handleClickActions={(actions) => handleClickActionsRef.current (actions)}
          handleClickType = {(type) => handleClickTypeRef.current (type)}
        />
        <Canvas  
          width  = {645} 
          height = {395} 
          handleClickSizeRef={handleClickSizeRef}
          handleClickColorRef={handleClickColorRef}
          handleClickActionsRef = {handleClickActionsRef}
          handleClickTypeRef={handleClickTypeRef}
        />
        
    </div>
  );
}

export default Paint;
