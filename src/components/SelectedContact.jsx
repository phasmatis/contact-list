import React, {useState, useEffect} from "react";

const SelectedContact = ({selectedContactId, setSelectedContactId})=> {
   const [contact, setContact] = useState(null);

   useEffect(()=> {
    const fetchSingleContact = async () => {
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const result = await response.json();
            setContact(result);

        }catch (error) {
            console.error(error);
        }
    }
    if (selectedContactId) {
        fetchSingleContact();
    }
    
   },[selectedContactId])

   const handleBackButtonClick = () => {
    setSelectedContactId(null);
   }

   if (!contact) {
    return <div>No contact selected</div>
   }
    const {id, name, phone, email } = contact;

    return (
        <div>
            <h2>Contact Details</h2>
            <ul>
                <li>ID: {id}</li>
                <li>Name: {name}</li>
                <li>Phone: {phone}</li>
                <li>Email: {email}</li>
            </ul>
            <button onClick={handleBackButtonClick}>Back to List</button>
        </div>

    )
}





export default SelectedContact;