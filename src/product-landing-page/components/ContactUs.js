import React from 'react'

function ContactUs() {
  return (
    <section id="contact-us">
    <h1>Contact us</h1>
    <p>Want a custom 25 or 50 liter batch for yourself, tailored to your tastes? Contact us by email, and we
        will direct you to fill out our beer taste preference form. </p>
    <form id="form" action="https://www.freecodecamp.com/email-submit">

        <input id="email" name="email" type="email" placeholder="Enter your email address" />
        <p>Please read the small print and below and accept before you register.</p>

        <div className="consent-check">
            <input type="checkbox" id="worthless-consent" name="worthless-consent" /><label htmlFor="worthless-consent">I agree to all that stuff I didn't read.</label>
        </div>
        <p className="tiny2">By sending your email, you are by proxy agreeing to completely waste your time. The
            email goes to a dummy account at Free Code Camp, which most likely deletes the information before it
            reaches their
            server. Besides, we produce about 50 liters per month. There are 3 neighbors, who are voluntary
            consultants, who are constantly tasting the product and monitoring it for quality. Our bioligist
            consultant, demands a six pack of bottles, every time he counts yeast cells. And the CEO monitors
            the quality of the product on a frequent basis, to ensure that the highest standards are met. So
            generally there is no product left to put on the market. Even if there was, we would probably keep
            it to ourselves because it's damn good beer.</p>
        <input id="submit" type="submit" value="Send" onClick={()=>alert('Just a demo page for FCC cert. There is no validation or form submission in this demo. You will be redirected to an FCC dummy account. This address/submission was required to pass on of the user stories/tests. Sorry.') } action="https://www.freecodecamp.com/email-submit" />



    </form>
</section>
  )
}

export default ContactUs