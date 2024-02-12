import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { PhonesContext } from '../contexts/PhonesContext'
import classes from "../styles/phonelist.module.css";
import { Loader } from '@mantine/core';

function PhoneListPage() {
    const [selectedPhoneId, setSelectedPhoneId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [buttonsText, setButtonsText] = useState({});
    const { phones, fetchPhones} = useContext(PhonesContext) 
    
    useEffect(() => {
        fetchPhones().then(() => {
            setIsLoading(false); 
        });
    }, [])

    // initializes each phone's button text to 'See details'.
    useEffect(() => {
        const initialButtonsText = phones.reduce((acc, phone) => {
            acc[phone.id] = 'See details';
            return acc;
        }, {});
        setButtonsText(initialButtonsText);
    }, [phones]); 

    const handlePhoneClick = (phoneId) => {
        console.log('click!')
        setSelectedPhoneId(phoneId);
        setButtonsText(prevButtonsText => ({
        ...prevButtonsText,
        [phoneId]: prevButtonsText[phoneId] === 'See details' ? 'Hide details' : 'See details'
        }));
    }

    return (
        <div className={classes.pageCtn}> 
            <h2> Browse our phones </h2>
            <Link to='/'>
                <button type="button" className={classes.backBtn}> Back to homepage </button>
            </Link>
            { isLoading ? (
                function Demo() {
                  return <Loader color="blue" />;
                }
                
            ):(
            <div className={classes.phoneListCtn}>
                {phones.map(phone => (
                    <div key={phone.id} className={classes.phoneCtn}>
                        <p className={classes.phoneName}> {phone.name} </p>
                        <img src={`http://localhost:5173/src/images/${phone.imageFileName}`} alt="phone image" />
                        {buttonsText[phone.id] === 'Hide details' && (
                            <div className={classes.detailsCtn}> 
                                <p className={classes.phoneDescription}> {phone.description}</p>
                                <p> <span> brand: </span> {phone.manufacturer}</p>
                                <p> <span> color: </span>{phone.color}</p>
                                <p> <span> screen size: </span>{phone.screen}</p>
                                <p> <span> processor: </span>{phone.processor}</p>
                                <p> <span> RAM: </span>{phone.ram} GB </p>
                                <p> <span> price: </span>{phone.price} € </p>
                            </div>
                        )}
                        <button type='button' onClick={() => handlePhoneClick(phone.id)}>
                            {buttonsText[phone.id] || 'See details'}
                        </button>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
}

export default PhoneListPage



