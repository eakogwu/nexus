import React, {useState} from 'react';
import styled from "styled-components";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
const Form = () => {
    const [value,setValue] = useState();
    return (
        <Section>
            <form action="">
                <h2>Need more specific Service?</h2>
                <h1>Contact us</h1>
                <div>
                    <label htmlFor="firstname">First name</label>
                    <input type="text" name="firstname"/>
                </div>
                <div>
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" name="lastname"/>
                </div>
                <div>
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company"/>
                </div>
                <div>
                    <label htmlFor="mobile">Mobile/Contact</label>
                    <PhoneInput value={value} defaultCountry="US" international onChange={setValue} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"/>
                </div>
                <div>
                    <button>Send message</button>
                </div>
            </form>
        </Section>
    );
};

const Section = styled.div`
 padding: 1rem 0;
  form {
    background-color: #fff;
    width: 350px;
    height: auto;
    padding: 2rem;
    border-radius: 0.54rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    h2{
      font-size: 1rem;
    }
    
    h1{
      font-size: 1.3rem;
    }
    
    & > div {
      display: flex;
      flex-direction: column;
      gap: 0.21rem;

      input {
        border: 0.1px solid #eeeded;
        background-color: transparent;
        padding: 0.7rem 1rem;
        color: black;

        &[type = "date"] {
          padding-left: 3rem;
        }


        &:focus {
          outline: none;
        }
      }
    }
    .form-title {
      font-size: 1.3rem;
    }
    .privacy-policy{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.7rem;
      label{
        font-size: 0.7rem;
        line-height: 0.8rem;
      }
    }

    button {
      padding: 0.7rem 1rem;
      border: none;
      background-color: #002441;
      color: #fff;
      font-size: 1rem;
      transition: 0.4s ease-in-out;
      cursor: pointer;

      &:hover {
        background-color: #01457a;
      }
    }
  }
    
`

export default Form;