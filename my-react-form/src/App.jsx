import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // ✅ State variables — one per input field (Controlled Components)

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  // const [subject, setSubject] = useState(""); // ⚠️ Don’t use string for multiple checkboxes

  // ✅ Best way to handle multiple checkboxes: use an object

  const [subject, setSubject] = useState({
    english: false,
    maths: false,
    physics: false
  });

  // ⚠️ Use `null` for file input (not empty string)

  const [resume, setResume] = useState(null)
  const [url, setUrl] = useState("")
  const [selectedOption, setSelectedOption] = useState("")
  const [about, setAbout] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault(); // Prevent page reload
    console.log(firstName, lastName, email, contact, gender, selectedOption, subject, resume, url, about);
    // ✅ Future: Replace console.log with API call (fetch/axios) to backend

    // Add your form submission logic her

  }


  const handleReset = () => {

    // reset the valeus
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male") // ⚠️ Be careful — setting a default here will auto-select “Male”
    setSubject({
      english: false,
      maths: false,
      physics: false
    })
    setResume(null);
    setUrl("");
    setSelectedOption("");
    setAbout("");


  }


  const handleSubjectChange = (sub) => {
    // ✅ Spread operator (important concept): creates new copy of object to avoid mutation
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));


  }


  return (
    <div className='className="App"'>
      <h1>Form in React</h1>
      <fieldset>
        {/* ✅ Use onSubmit for form submission; this allows HTML validation to work */}
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <label htmlFor="firstName">First Name*

          </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={firstName} // ✅ Controlled input pattern
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
            placeholder='enter your first name'
            required // ✅ HTML5 built-in validation
          />
          <br />

          <label htmlFor="lastName">Last Name*</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='enter your last name'
            required
          />
          <br />
          <label htmlFor="email">Email*</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='enter your email'
          />
          <br />
          <label htmlFor="contact">Contact*</label>
          <input
            type='tel'
            id='contact'
            name='contact'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder='enter mobile number'
            required
          />
          <br />
          <label htmlFor="gender">Gender*</label>
          {/* ⚠️ Always share the same “name” for radio groups */}
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male


          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => {
              setGender(e.target.value)
            }
            }
          />
          Female

          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            checked={gender === "other"}
            onChange={(e) => {
              setGender(e.target.value)
            }}
          />
          Other

          <br />

          <label htmlFor="lang">Your best Subject</label>

          <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subject.english === true}
            onChange={() => handleSubjectChange("english")}
          />
          English


          <input
            type="checkbox"
            name="lang"
            id="maths"
            checked={subject.maths === true}
            onChange={() => handleSubjectChange("maths")}
          />
          Maths


          <input
            type="checkbox"
            name="lang"
            id="physics"
            checked={subject.physics === true}
            onChange={() => handleSubjectChange("physics")} />
          Physics


          <br />
          <label htmlFor="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => {
              setResume(e.target.files[0])
            }}
            required />
          {/* ⚠️ Reminder: You can’t control <input type="file" /> with value attribute */}
          <br />
          <label htmlFor="url">Enter url*</label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={(e) => setUrl(e.target.value)}
            placeholder='enter url'
            required />
          <br />
          <label htmlFor="select">Select your choice</label>
          <select
            // defaultValue={'DEFAULT'}
            name="select"
            id="select"
            value={selectedOption} // ✅ Controlled select — replaces “selected” attribute
            onChange={(e) => setSelectedOption(e.target.value)

            }

          >
            <option
              value=""
              disabled
            // selected={selectedOption === ""}
            >
              Select your Ans
            </option>
            <optgroup label='Beginers'>
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">Javascript</option>
            </optgroup>
            <optgroup label='Advance'>
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDB</option>

            </optgroup>
            {/* ⚠️ Don’t use “selected” inside <option> in React — use value or defaultValue instead */}

          </select>
          <br />
          <label htmlFor="">About</label> <br />
          <textarea
            name="about"
            id="about"
            cols='30'
            rows='10'
            onChange={(e) => setAbout(e.target.value)}
            placeholder='About your self'
            required
          ></textarea><br />

          <button
            type="submit"
            value="Submit"
          // onClick={(e) => handleSubmit(e)} // ❌ This bypasses HTML validation
          // ⚠️ Don’t use onClick for submit — use onSubmit on <form> instead

          >
            Submit
          </button>

          <button
            type="reset"
            value="reset"
          // onClick={() => handleReset()} // ❌ This bypasses HTML validation
          // ⚠️ Don’t use onClick with preventDefault here — let onReset handle it

          >
            Reset
          </button>




        </form>
      </fieldset>
    </div>
  )
}

export default App
