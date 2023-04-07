import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { FormWrap } from "./Form.styles";
import { gsap } from "gsap";

const Form = forwardRef((props, ref) => {

    const form = useRef();
    const email = useRef(); 
    const thankyou = useRef();     

    useEffect(() => {
        form.current.addEventListener('submit', (event)=>{
            event.preventDefault();

            if (isGmail(email.current.value)) {
              email.current.setCustomValidity("Gmail accounts are not allowed")
              email.current.reportValidity();
            }else{
                gsap.to(form.current, {duration:0.2, opacity:0, onComplete:()=>{
                    gsap.set(form.current, {display:'none'});
                    gsap.to(thankyou.current, {display:'block', opacity:1, delay:0.1 });
                }});
            }
        })   
        
        email.current.addEventListener("input", (event) => {
            email.current.setCustomValidity("")
        });

    }, []); 

    const isGmail = (email) => {
        const regex = /@gmail\.com$/;
        return regex.test(email);
    }

    const selectEmailField = ()=>{
        email.current.focus();
    }

    useImperativeHandle(ref, () => ({
        selectEmailField
    }));

    return(
        <>
            <FormWrap ref={form}>
                <input 
                    ref={email}
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    required
                />

                <input type="text" name="name" required placeholder="Name"/>
                <input type="tel" name="phone" minLength="10" required placeholder="Phone Number"/>

                <fieldset>
                    <legend htmlFor="subject-select">How We Can Help You?</legend>
                    <select name="subject" id="subject-select">
                        <option value="sales">Sales</option>
                        <option value="press">Press</option>
                        <option value="support">Support</option>
                        <option value="demo">Demo</option>
                    </select>
                </fieldset>

                <input type="submit" value="SUBMIT"/>
            </FormWrap>

            <p ref={thankyou} className="text-2xl mb-6 hidden opacity-0">Thank You</p>
        </>
    )
})

export default Form