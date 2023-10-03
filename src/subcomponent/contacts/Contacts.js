import React from 'react'
import './Contacts.css'

const Contacts = () => {
    return (
        <div>
            <section>
                <h1>Contact Us</h1>

                <main className="main">
                    <div className="contact-form">
                        <h2>Get in Touch</h2>
                        <form action="#" method="post">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                            <button className='button' type="submit">Submit</button>
                        </form>
                    </div>
                </main>
            </section>

        </div>
    )
}

export default Contacts;