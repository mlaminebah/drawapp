import './Comon.css'
import { useRef , useEffect, useState} from 'react';

const Canvas = (
            {   width,height,
                handleClickSizeRef,
                handleClickColorRef,
                handleClickActionsRef,
                handleClickTypeRef
            }) => {
    //objet de référence au canvas
    const canvasRef = useRef (null);
    //objet de réference du contexte
    const contextRef = useRef (null);
    
    const [isDrawing,setISDrawing] = useState(false);

    useEffect(() => {
         
        //return () => {
            handleClickSizeRef.current = handleClickSize;
            handleClickColorRef.current = handleClickColor;
            handleClickActionsRef.current = handleClickActions;
            handleClickTypeRef.current = handleClickType;

            
            const canvas = canvasRef.current;
            if (canvas != null) {
                const ctx = canvas.getContext ("2d");
                ctx.strokeStyle = "black";
                ctx.lineWidth = 2;
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                contextRef.current = ctx;
            }
        //}
    }, []);
    

    //augmenter ou reduire la taille du pinceau
    const handleClickSize = (actionSize) => {
        let lw = contextRef.current.lineWidth;
        if (contextRef.current != null)
            contextRef.current.lineWidth = actionSize === '+' ? lw + 1 : ((lw > 1) ? lw - 1 : 1);
    }
    //je change la couleur du pinceau
    const handleClickColor = (color) => {
        contextRef.current.strokeStyle = color;
    }
    //je gomme, je vide et j'enregistre
    const handleClickActions = (actions) => {
        //gomme
        switch (actions) {
            case "erase"://gommer
                contextRef.current.strokeStyle = "white";
                break;
            case "save"://enregistrer l'image
                dowload (canvasRef.current); 
                break;
            case "clear"://nettoyer
                contextRef.current.clearRect (0,0,canvasRef.current.width,canvasRef.current.height);
                break;
            default:
                break;
        }
        //vider
        //enregistrer l'image
    }
    const changePenType = (contextRef,lineJoin,lineCap,op) => {
        if (contextRef.current != null) {
            contextRef.current.lineJoin = lineJoin;
            contextRef.current.lineCap = lineCap;
            const lwidth = contextRef.current.lineWidth;
            contextRef.current.lineWidth = op === '*' ? lwidth * 20: lwidth / 20;
        }
    }
    //Je choisi le pinceau
    const handleClickType = (type) => {
        switch (type) {
            case "brush":
                changePenType (contextRef,'round','round','*');
                break;
            case "pencil":
                changePenType (contextRef,'','','/');
                break;
            default: break;
        }
    };
    //lorsque je commence à tracer : mouseDown
    const startDrawing = ({nativeEvent}) => {
        console.log ("bonjour",contextRef);
        if (contextRef.current != null) {
            const {offsetX,offsetY} = nativeEvent;
            contextRef.current.beginPath ();
            contextRef.current.moveTo (offsetX,offsetY);
            setISDrawing (true);
        }
        
    }
    //lorsque je finis de tracer : mouseUp
    const finishDrawing = () => {
        if (contextRef.current != null) {
            contextRef.current.closePath ();
            setISDrawing (false);
        }
    }
    //lorsque je trace : mouseMove 
    const draw = ({nativeEvent}) => {
        if (!isDrawing) return;
        if (contextRef.current != null) {
            const {offsetX,offsetY} = nativeEvent;
            contextRef.current.lineTo (offsetX,offsetY);
            contextRef.current.stroke ();
        }
              

    }
    //télécharger l'image
    const dowload = (canvas) =>  {
        /*if(window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob (canvas.msToBlob(),"dessin.png");
        } else {
            const a = document.createElement ("a");
            document.body.appendChild (a);
            a.href =  canvas.toDataURL ();
            a.download = "dessin.png";
            a.click ();
            document.body.removeChild (a);
        }*/
        const image = canvas.toDataURL('image/png');
        console.log (image);
        const link = document.createElement("a");
        link.href = image;
        link.download = "dessin_";
        link.click();
        link.remove ();

    }
    
    return (
        <div className="canvas-wrapper">
            <canvas className="canvas"
                width={width}
                height={height}
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}

            />
        </div>
        
    );
};
export default Canvas;