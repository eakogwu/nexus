import React, {useState} from 'react';
import styled from "styled-components";
import regBg from "../../../assets/nurses.jpg";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'


const Register = () => {
  const [value,setValue] = useState();
  return (
    <Section>
      <div className="background">
        <img src={regBg} alt="register section"/>
        <div className="overlay"/>
      </div>
      <div className="container" id="registerContainer">
        <div className="content">
          <h1>You Deserve Better: Join the
            Future of Healthcare with
            NEXUS | NURSING.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur earum iure nam necessitatibus! Ducimus, non.</p>
        </div>
        <form action="">

          <div>
            <h1 className="form-title">Complete this form to
              apply for our Registered
              Nurse (RN) Position.</h1>
          </div>

          <div>
            <label htmlFor="">First name</label>
            <input type="text" placeholder="First name"/>
          </div>
          <div>
            <label htmlFor="">Last name</label>
            <input type="text" placeholder="Last name"/>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Email address"/>
          </div>
          <div>
            <label htmlFor="">Phone number</label>
            <PhoneInput value={value} defaultCountry="US" international onChange={setValue} />
            {/*<input type="text" placeholder="Phone number"/>*/}
          </div>
          <div>
            <div className="privacy-policy">
              <input type="checkbox" id="privacy"/>
              <label htmlFor="privacy">By clicking “Submit” button below, the user acknowledges an understanding and acceptance of the Nexus | Nursing <a
                href="/">Privacy Policy.</a>
              </label>
            </div>

          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    </Section>
  );
};

const Section =  styled.section`
  width: 100%;
  height: 90vh;
  position: relative;

  .background {
    height: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(60%);
    }

    .overlay {
      position: absolute;
      content: "";
      background-color: rgba(0, 36, 65, 0.5);
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
    }
  }

  .container {
    height: 100%;
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    padding: 0 3rem;

    .content {
      padding: 0 2rem;
      color: white;
      width: 390px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h1 {
        font-size: 2rem;
        font-weight: 400;
      }
    }

    form {
      background-color: #fff;
      width: 350px;
      height: auto;
      padding: 2rem;
      border-radius: 0.54rem;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;

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
        border-radius: 1rem;
        transition: 0.4s ease-in-out;
        cursor: pointer;

        &:hover {
          background-color: #01457a;
        }
      }
    }
  }

  @media screen and (min-width: 260px) and (max-width: 750px){
    height: auto;
    .container{
      flex-direction: column;
      position: relative;
      top: -270px;
    }
  }
`;

export default Register;

