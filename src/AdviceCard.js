import React from 'react';
import styles from "./AdviceCard.module.css";
import DividerMobile from './images/PatternDividerMobile.svg';
/*import DividerDesktop from './images/PatternDividerDesktop.svg';*/
import IconDice from './images/icon-dice.svg';

export default function AdviceCard() {

    const [data, setData] = React.useState({ id: 0, advice: 'Click the button to get an advice!' });
    const url = "https://api.adviceslip.com/advice";
   
    const fetchAdvice = async () => {
        try {

            

            const response = await fetch(url);
            if(!response.ok) {
                throw new Error('Request failed');
            }
            const data = await response.json();
            setData({
                id:data.slip.id,
                advice: data.slip.advice
            })
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <>
        { data &&
        <div className={styles.cardBack}>
            <div className={styles.advice}>
                <h2>ADVICE {data.id} </h2>
                <p>{data.advice}</p> 
            </div>
            <div className={styles.divider}>
                <img src={DividerMobile} alt='divider'/>
            </div>
            <div className={styles.btnContainer}>
            <button className={styles.btnDice} onClick={fetchAdvice}>
                <img src={IconDice} alt='dice'/>
            </button>
            </div>
        </div>
        }
        </>
        
    )
}