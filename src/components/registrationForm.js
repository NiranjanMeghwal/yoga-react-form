import React, {useState,setState} from 'react';
import './style.css'

import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";

function RegistrationForm() {
    
    const [fullName, setFullName] = useState(null);
    const [age, setAge] = useState(null);
    // const [batchTime, setBatchTime] = useState(["6 - 7 A.M.","7 - 8 A.M.","8 - 9 A.M.", "5 - 6 P.M."]);
    
    const [addrtype, setAddrtype] = useState(["6 - 7 A.M.","7 - 8 A.M.","8 - 9 A.M.", "5 - 6 P.M."]);

    const Add = addrtype.map(Add => Add)
    
    var today = new Date();
    const nextDate = new Date(new Date().setDate(today.getDate() + 30));

    const handleAddrTypeChange = (e) => { 
        console.clear(); 
        console.log((addrtype[e.target.value])); 
        setBatch(addrtype[e.target.value]) 
    }

    const [batch, setBatch] = useState('Normal')

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "fullName"){
            setFullName(value);
        }
        if(id === "age"){
            setAge(value);
        }
        if(id === "batch"){
            console.log((addrtype[e.target.value])); 
            setBatch(addrtype[e.target.value]) 
        }
        if(id == "checkBox") {
            setIsChecked(!isChecked);   
        }
    }

    const handleSubmit  = () => {
        console.log(fullName, age, batch, isChecked, nextDate);
        if(isChecked) {
            let obj = {
                fullName : fullName,
                age: age,
                batch: batch,
                nextDate: nextDate
            }       
            const newPostKey = push(child(ref(database), 'posts')).key;
            const updates = {};
            updates['/' + newPostKey] = obj
            return update(ref(database), updates);
        } else {
            alert("Fee payment failed!");
        }
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="fullName">
                    <label className="form__label" for="fullName">Full Name</label>
                    <input className="form__input" type="text" value={fullName} onChange = {(e) => handleInputChange(e)} id="fullName" placeholder="Full Name"/>
                </div>
                <div className="age">
                    <label className="form__label" for="age">Age</label>
                    <input type="number" id="age" name="age" min="18" max="65" value={age}  className="form__input" onChange = {(e) => handleInputChange(e)}/>
                </div>
                <label for="role" id="batch">Choose a Batch:</label>
                < select
                    onChange={e => handleAddrTypeChange(e)}
                    className="browser-default custom-select" >
                    {
                        Add.map((address, key) => <option key={key} value={key}>{address} 
                        </option>)
                    }
                </select >
                <div className="topping">
                    <input
                    type="checkbox"
                    id="checkBox"
                    name="checkBox"
                    value="checkBox"
                    checked={isChecked}
                    onChange = {(e) => handleInputChange(e)}
                    />
                    completePayment() returns: 'true'
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm
