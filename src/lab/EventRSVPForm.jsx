import { useState } from "react";


export function EventRSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendees: "", 
    dietary: "",   
    extraGuests: false 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleForm = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setSubmitted(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleForm}
          required
          type="text"
          placeholder="Name"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleForm}
          required
          type="email"
          placeholder="Email"
        />
        <input
          name="attendees"
          value={formData.attendees}
          onChange={handleForm}
          required
          min={1}
          type="number"
          placeholder="Number of Attendees"
        />
        <input
          name="dietary"
          value={formData.dietary}
          onChange={handleForm}
          type="text"
          placeholder="Dietary Preferences"
        />
        <label>
          <input
            name="extraGuests"
            checked={formData.extraGuests}
            onChange={handleForm}
            type="checkbox"
          />
          Bringing additional guests?
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div id="confirmation-details">
          <h3>RSVP Submitted!</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Number of attendees: {formData.attendees}</p>
          <p>Dietary preferences: {formData.dietary || "None"}</p>
          <p>Bringing additional guests: {formData.extraGuests ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}