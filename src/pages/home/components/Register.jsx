import React, {useState} from 'react';
import styled from "styled-components";
import regBg from "../../../assets/nurses.jpg";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {useForm} from "react-hook-form";
import {postApi} from "../../../apiCalls";
import {notification} from "antd";


const Register = () => {
  const [value,setValue] = useState();
  const {register,handleSubmit, formState:{errors}, reset} = useForm();
  const [loading,setLoading] = useState(false);

  const successNotification = () => {
    notification["success"]({
      message: 'Successful',
      description:
          'Your details was submitted successfully, we will reach you as soon as possible',
    });
  }

  // const errorNotification = () => {
  //   notification["error"]({
  //     message:"Error occur",
  //     description: ` <smal>${errors.firstname && "First name is required"}</smal><br/>
  //                    <smal>${errors.lastname && "Last name is required"}</smal><br/>
  //                   <smal>${errors.email && "Email required"}</smal><br/>
  //                   <smal>${errors.phone && "Phone required"}</smal><br/>
  //                   <smal>${errors.agree && "Please agree to our terms and conditions"}</smal><br/>`
  //   });
  // };

  const onSubmit = data => {
    setLoading(true);
    postApi('/enroll',data).then(res => {
      if (res.message === 'successful'){
        successNotification();
        reset({
          firstname:"",
          lastname:"",
          email:"",
          phone:"",
          agree:""
        })
      }
    }).catch(err => {
      console.log(err.message)
    }).finally( ()=> setLoading(false));

  }

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
        <form onSubmit={handleSubmit(onSubmit)} >

          <div>
            <h1 className="form-title">Complete this form to
              apply for our Registered
              Nurse (RN) Position.</h1>
          </div>

          <div className="form-group">
            <label htmlFor="">First name</label>
            <input type="text" {...register('firstname',{ required: true })}  placeholder="First name" className={errors.firstname && 'invalid'}/>
            {errors.firstname ? <small>First name is required</small>:"" }
          </div>
          <div className="form-group">
            <label htmlFor="">Last name</label>
            <input type="text" {...register('lastname',{ required: true })}  placeholder="Last name" className={errors.lastname && 'invalid'}/>
            {errors.lastname ? <small>Last name is required</small>:"" }
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="email" {...register('email',{ required: true })}  placeholder="Email address" className={errors.email && 'invalid'}/>
            {errors.email ? <small>Email is required</small>:"" }
          </div>
          <div className="form-group">
            <label htmlFor="">Phone number</label>
            <PhoneInput value={value} defaultCountry="US" required {...register('phone',{ required: true })}  international onChange={setValue}  className={errors.phone && 'invalid'}/>
            {errors.phone ? <small>Phone is required</small>:"" }
          </div>
          <div className="form-group">
            <div className="privacy-policy">
              <input type="checkbox" id="privacy" {...register('agree',{ required: true, minLength:8 })}  className={errors.agree && 'invalid'}/>
              <label htmlFor="privacy">By clicking ???Submit??? button below, the user acknowledges an understanding and acceptance of the Nexus | Nursing <a
                href="/">Privacy Policy.</a>
              </label>

            </div>
          </div>
          <button className="btn" type="submit" disabled={loading}>
            {loading? 'Please wait ... ': 'Submit'}
          </button>
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
      width: 390px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: white;

      h1 {
        color: white;
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
        position: relative;

        small {
          position: absolute;
          right: 0;
          color: #a95757;
        }

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

          &.invalid {
            border: 0.003rem solid red;
          }
        }
      }

      

      .form-title {
        font-size: 1.3rem;
      }

      .privacy-policy {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.7rem;
        position: relative;
        label {
          font-size: 0.7rem;
          line-height: 0.8rem;
        }

        input[type="checkbox"]{
          &.invalid {
            border: 0.003rem solid red;
            box-shadow: 1px 1px  4px red;
          }
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

  @media screen and (min-width: 260px) and (max-width: 750px) {
    height: auto;
    .container {
      flex-direction: column;
      position: relative;
      top: -270px;
    }
  }
`;

export default Register;

