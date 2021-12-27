import React, {useState} from 'react';
import styled from "styled-components";
import {BiPlus,BiMinus} from "react-icons/bi";
const FaQs = () => {
    const [selected,setSelected] = useState(null);

    const toggle = index => {
        if (selected === index) {
           return  setSelected(null);
        }
        setSelected(index);
    }

    const faqList = [
        {
            question:"How do I register?",
            answer:"Fill out the form on our website and we will get back to you in 24 hours"
        },
        {
            question:"How do I register?",
            answer:"Fill out the form on our website and we will get back to you in 24 hours"
        },
        {
            question:"How do I register?",
            answer:"Fill out the form on our website and we will get back to you in 24 hours"
        }
    ]

    return (
        <Section id="faqs">
            <div className="container">
                <div className="title">
                    <h1>FAQs</h1>
                </div>
                <div className="content">
                    <div className="accordion">
                        {
                            faqList.map( (item,index) =>
                            <div className="item" key={index} onClick={ () => toggle(index) }>
                                <div className="title">
                                    {selected === index?<BiMinus/> : <BiPlus/>}
                                    <h3>{item.question}</h3>
                                </div>
                                <div className={ selected === index?"body show":"body" }>
                                    {item.answer}
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </Section>
    );
};


const Section = styled.section`
  flex: 1;


  .container {

    > .title {
      padding: 1rem 2rem;

      h1 {
        font-weight: 400;
      }

    }

    .content {

      .accordion {
        width: 100%;

        .item {
          margin-bottom: 5px;
          padding: 10px 20px;
          cursor: pointer;

          .title {
            display: flex;
            align-items: center;
            font-size: 0.87rem;
          }

          .body {
            max-height: 0;
            overflow: hidden;
            transition: all 0.6s cubic-bezier(0, 1, 0, 1);
            font-size: 0.854rem;
            padding-left: 1rem;
            color: #a9a9a9;

            &.show {
              height: auto;
              max-height: 9999px;
              transition: all 0.5s cubic-bezier(1, 0, 1, 0);
            }
          }

        }
      }
    }
  }

`;

export default FaQs;