import React from "react";
import './Rodape.css'

interface Props {
    titulo: string;
    titulo2: string;
    titulo3: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
    item6: string;
    item7: string;
    item8: string;
    item9: string;
    item10: string;
    item11: string;
    item12: string;
    item13: string;
    item14: string;
    item15: string;
}
function Rodape(items: Props){
    return (    
    <div className="rodape">

        <div className="coluna1">
       <div className="titulo">{items.titulo}</div>
        <div className="items">
        <div>{items.item1}</div>
        <div>{items.item2}</div>
        <div>{items.item3}</div>
        <div>{items.item4}</div>
        <div>{items.item5}</div>
        </div>
        </div>

        <div className="coluna2">
       <div className="titulo">{items.titulo2}</div>
        <div className="items">
        <div>{items.item6}</div>
        <div>{items.item7}</div>
        <div>{items.item8}</div>
        <div>{items.item9}</div>
        <div>{items.item10}</div>
        </div>
        </div>

        <div className="coluna3">
       <div className="titulo">{items.titulo}</div>
        <div className="items">
        <div>{items.item11}</div>
        <div>{items.item12}</div>
        <div>{items.item13}</div>
        <div>{items.item14}</div>
        <div>{items.item15}</div>
        </div>
        </div>

        
    </div>
);

}

export default Rodape;