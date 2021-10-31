import React from 'react';
import './Guide.css'

const Guide = () => {
    return (
        <div>
            <h1 className="text-center">Our Guide</h1>
            <div className ="guide-container container">
                <img className ="img-style m-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExCDOJzkQbHlTG1ARksA8D_qtC8Ox4j-C_w&usqp=CAU" alt="" />
                <img  className ="img-style m-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hVBySrhHHoN3Uo1o-mPBB9xr3UzvP5Ov_Q&usqp=CAU" alt="" />
                <img  className ="img-style m-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OMLzgLlEqw-unuZcLpfoz5xpnuKNlhsEhQ&usqp=CAU" alt="" />

            </div>
        </div>
    );
};

export default Guide;