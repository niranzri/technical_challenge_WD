import { useState, useEffect, useContext } from 'react';
import classes from "../styles/phonelist.module.css";
import { Link } from 'react-router-dom'
import { PhonesContext } from '../contexts/PhonesContext'

function PhoneListPage() {

    const { phones, setPhones, fetchPhones} = useContext(PhonesContext) 

    //const [phones, setPhones] = useState([])

    useEffect(() => {
        fetchPhones();
    }, [])



    return (
        <div className={classes.PhoneListCtn}> 
            <p> All the phones available are: </p>
            {phones.map(phone => (
                <div key={phone.id} className={classes.phoneCtn} >
                    <Link to={`/phones/${phone.id}`}>
                        <p> {phone.name} </p>
                        <img src={`../assets/${phone.imageFileName}`} alt="phone image" />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default PhoneListPage



