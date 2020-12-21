import React, {useState} from "react";

function Contact(){
    return(
        <section id="contact">
            <h2>Contact Me</h2>
            <form id = "contact-form" className="form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder ="What is your name?" />

                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" placeholder="What is your Email?" />
                </div>
                <div>
                <label htmlFor="message">Message:</label>
                <input rows="5" name="message" placeholder="Enter your Message here"/>
                </div>
                <button type ="submit">Submit</button>
            </form>

        </section>
    );
}
export default Contact;