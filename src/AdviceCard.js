import React, { useEffect } from 'react';
import styles from "./AdviceCard.module.css";
import DividerMobile from './images/PatternDividerMobile.svg';
/*import DividerDesktop from './images/PatternDividerDesktop.svg';*/
import IconDice from './images/icon-dice.svg';

const url = 'https://api.adviceslip.com/advice';
    const fetchAdvice = async () => {
        const res = await fetch(url);
        const slipObj = await res.json();
        const newAdvice = {
            id: slipObj.slip.id,
            advice: slipObj.slip.advice
        };
        console.log(newAdvice)
        return newAdvice;
    };

export default function AdviceCard() {

    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    //const [error, setError] = React.useState(null);
    
    useEffect(() => {
        let ignore = false;
        const handleFetchData = async () => {
            setLoading(true);
            setData({});
            const newData = await fetchAdvice();
            if(ignore) return;
            setData(newData);
            setLoading(false);
        };
        handleFetchData();
        return () => {
            ignore=true;
        }
        
    }, [])

    const handleClick = () => {
        setLoading(true);
    };

    return (
        <>
        { data &&
        <div className={styles.cardBack}>
            <div className={styles.advice}>
                <h2>ADVICE {data.id}</h2>
                <p>{loading ? "Please wait" : data.advice}</p> 
            </div>
            <div className={styles.divider}>
                <img src={DividerMobile} alt='divider'/>
            </div>
            <div className={styles.btnContainer}>
            <button className={styles.btnDice} onClick={handleClick}>
                <img src={IconDice} alt='dice'/>
            </button>
            </div>
        </div>
        }
        </>
        
    )
}