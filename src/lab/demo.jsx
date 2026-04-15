import { useState } from "react";

export function EventRSVPForm() {
  let [formData,setFormData] = useState({name:"",email:"",number:"",checkbox:""})
  let [isSubmit,setIsSubmit] = useState(false)
  const handleForm = (e) => { 
    let {name , value, type, checked} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type == "checkbox" ? checked : value
    }));

   }
   const handleSubmit = (e) => { 
    e.preventDefault();
    setIsSubmit(true)
    }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleForm} value={formData.name} name="name" required type="text"/>
      <input type="text"/>
      <input onChange={handleForm} value={formData.email} name="email" required type="email"/>
      <input onChange={handleForm} value={formData.number} name="number" required min={1} type="number"/>
      <input onChange={handleForm} value={formData.checkbox} name="checkbox" type="checkbox"/>
       {isSubmit && (
        <div id="confirmation-details">
          <h3>RSVP Submitted!</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Number of attendees: {formData.attendees}</p>
          <p>Dietary preferences: {formData.dietary || "None"}</p>
          <p>Bringing additional guests: {formData.extraGuests ? "Yes" : "No"}</p>
        </div>
      )}
    </form>
  )
}