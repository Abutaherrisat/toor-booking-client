import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div>
            <h1 className ="text-center">Gallery</h1>
            <div className="galley-container container">
                    <img className="img-style m-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCVaPBllpF4XiktNeVo_fBK-5oyuNBEP-jw&usqp=CAU" alt="" />
                    <img  className="img-style m-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvjlA3Fxzzk8QPTXIE5vzOqqEXyUb5RuetA&usqp=CAU" alt="" />
                    <img  className="img-style m-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUB64-WLQ_bfLYmWlByPp2iwQf4dHZ2Aoisg&usqp=CAU" alt="" />
                    <img  className="img-style m-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4dTJuDLpo_oB6c1jk9ZzzlOgv40O7-T5fg&usqp=CAU" alt="" />
                    <img  className="img-style m-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4T-M9HIJ4Q_GVN_xkaazqqbSSonGkF4KqA&usqp=CAU" alt="" />
                </div>
            
        </div>
    );
};

export default Gallery;