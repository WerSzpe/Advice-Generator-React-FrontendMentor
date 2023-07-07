import React from 'react';
import styles from "./AdviceCard.module.css";
import DividerMobile from './images/PatternDividerMobile.svg';
/*import DividerDesktop from './images/PatternDividerDesktop.svg';*/
import IconDice from './images/icon-dice.svg';



export default function AdviceCard() {
    const [data, setData] = React.useState(null);
    const url = 'https://api.adviceslip.com/advice';
    
    React.useEffect(() => {
        
        const fetchAdvice = async () => {
            try{
                const res = await fetch(url);
                const newData = await res.json();
                setData(newData.slip)
                console.log(newData.slip)
            } catch (error) {
                console.log(error);
            }
        }
        fetchAdvice();
    }, [])

    return (
        <>
        { data &&
        <div className={styles.cardBack}>
            <div className={styles.advice}>
                <h2>ADVICE {data.id}</h2>
                <p>{data.advice}</p> 
            </div>
            <div className={styles.divider}>
                <img src={DividerMobile} alt='divider'/>
            </div>
            <div className={styles.btnContainer}>
            <button className={styles.btnDice} >
                <img src={IconDice} alt='dice'/>
            </button>
            </div>
        </div>
        }
        </>
        
    )
}