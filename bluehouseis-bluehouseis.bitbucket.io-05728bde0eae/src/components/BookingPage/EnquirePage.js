import React from 'react'
import './EnquirePage.css'

function EnquirePage() {
  return (
    <div className="Enquire_Container">
        <div className="enquire_rows">
            <label className="enquire_labels" >Email Address</label>
            <input type="text" className="enquire_inputs" />
        </div>
        <div className="enquire_rows">
            <label className="enquire_labels">Telephone</label>
            <input type="text" className="enquire_inputs" />
        </div>
        <div className="enquire_rows">
            <label className="enquire_labels">Your Enquiry</label>
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <textarea className="enquire_inputs"  />
                <button className="send_button">Send</button>
            </div>
        </div>
  </div>
  )
}

export default EnquirePage
