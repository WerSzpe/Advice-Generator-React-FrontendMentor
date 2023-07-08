import React from 'react';
import styles from "./AdviceCard.module.css";
import DividerMobile from './images/PatternDividerMobile.svg';
/*import DividerDesktop from './images/PatternDividerDesktop.svg';*/
import IconDice from './images/icon-dice.svg';

export default function AdviceCard() {

    const [data, setData] = React.useState("example");
   
    const url = 'https://api.adviceslip.com/advice';
    const fetchAdvice = () => {
        fetch(url)
            .then(response => { return response.json() })
            .then(newData  => {setData({ id: newData.slip.id, advice: newData.slip.advice }); })
            
    };

    React.useEffect(() => {
        fetchAdvice();
    }, [])

    const handleClick = async () => {
        try {
            const fetchData = await fetch(url);
            const newData = await fetchData.json();
            console.log(newData)
            setData({ id: newData.slip.id, advice: newData.slip.advice });
        } catch (error) {
            console.log(error)
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
            <button className={styles.btnDice} onClick={handleClick}>
                <img src={IconDice} alt='dice'/>
            </button>
            </div>
        </div>
        }
        </>
        
    )
}