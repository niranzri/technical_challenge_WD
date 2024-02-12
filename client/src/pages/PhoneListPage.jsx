import { useState, useEffect, useContext } from 'react';
import classes from "../styles/phonelist.module.css";
import { Link } from 'react-router-dom'
import { PhonesContext } from '../contexts/PhonesContext'

function PhoneListPage() {
    const [selectedPhoneId, setSelectedPhoneId] = useState(null);
    const [buttonsText, setButtonsText] = useState({});
    const { phones, fetchPhones} = useContext(PhonesContext) 

    useEffect(() => {
        fetchPhones()
    }, [])

    const handlePhoneClick = (phoneId) => {
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
        </div>
    );
}

export default PhoneListPage



