import React,{useEffect} from "react";
import "./css/signup.css"


const Signupform = ({firstname,setFirstname,
    lastname, setLastname,
    pravara, setPravara,
    email, setEmail,
    pathasalaname, setPathasalaname,
    location, setLocation,
    scope, setScope, 
    setCerti,
    gotra, setGotra}) => {


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
      };
    

    //called when enter is presed insted of submit button
    const Etosub=(e) => {
        if (e.keycode === 13){
            handleSubmit();
        }
    }



    return(
        <div className="signup">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div class="user-details">
          <label>
            <span className="FieldHeader">First Name:</span>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Last Name:</span>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Pravara : Rushi</span>
            <input
              type="text"
              value={pravara}
              onChange={(e) => setPravara(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Pravara : Gothram</span>
            <input
              type="text"
              value={gotra}
              onChange={(e) => setGotra(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Email:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Name of the Pathasala:</span>
            <input
              type="text"
              value={pathasalaname}
              onChange={(e) => setPathasalaname(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Location Of the Pathasala:</span>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
          <label>
          <span className="FieldHeader">Scope of Education:</span>
            <select value={scope} onChange={(e) => setScope} required>
              <option value="">Select a location</option>
              <option value="Veda">Krishna Yajur Vedam</option>
              <option value="Veda">Shukla Yajur Vedam</option>
              <option value="Veda">Rig Vedam</option>
              <option value="Veda">Sama Vedam</option>
              <option value="Veda">Atharvana Vedam</option>
              <option value="SaivaAgama">SaivaAgama</option>
              <option value="VaishnavaAgama">VaishnavaAgama</option>
              <option value="Sastra">Sastra</option>
              <option value="Smartha">Smartha</option>
              <option value="Prabandha">Prabandha</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
          <span className="FieldHeader">Upload your Certificate to:</span>
            <input
              type="file"
              onChange={(e) => setCerti}
              accept="image/*, application/pdf, .doc, .docx"
            />
          </label>
          <span className="submit">
          <button onKeyDown={(e) => Etosub(e)} type="submit">Submit</button>
          </span>
          </div>
        </form>
      </div> 
    );
};

export default Signupform ;