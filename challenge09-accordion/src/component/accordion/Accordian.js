import React, { useState } from 'react';
import { questions } from './api';
import './accordian.css';
import MyAccordion from './MyAccordian'

const Accordian = () => {
    const [data, setData] = useState(questions);
    return(
        <>
         <section className='main-div'>
         <h1>react interview question</h1>
        {
            data.map( (curElem) => {
                const { id } = curElem;
                return <MyAccordion key={id} {...curElem} />
            }
            )
        }
        </section>
        </>
    )

}

export default Accordian