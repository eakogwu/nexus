import React, {useEffect} from 'react';
import styled from "styled-components";
import image from "../../../assets/nurse2.jpg";
import image2 from "../../../assets/nurse1.jpg";
import image3 from "../../../assets/nurse3.jpg";
import scrollreveal from "scrollreveal";


const Sections = () => {

    useEffect( () => {
        const right = scrollreveal({
            origin:"right",
            distance: "80px",
            duration:1500,
            reset:true
        });
        right.reveal(
            `.image.right`,
            {
                opacity:0,
                interval:300
            }
        );

        const left = scrollreveal({
            origin:"left",
            distance: "80px",
            duration:1500,
            reset:true
        });
        left.reveal(
            `.image.left`,
            {
                opacity:0,
                interval:300
            }
        )

    },[] )

    return (
        <SectionContainer>
            <div className="rightImage">
                <div className="content">
                    <div className="title">
                        <h2>MultiDisciplinary Approach</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur illo unde veritatis? Ad aspernatur distinctio ipsum labore laborum natus non porro quis tempore? Accusamus cumque fugiat iusto quibusdam ullam.</p>
                </div>
                <div className="image right">
                    <img src={image} alt=""/>
                </div>
            </div>

            <div className="leftImage  grayBg" >
                <div className="image left">
                    <img src={image3} alt=""/>
                </div>
                <div className="content">
                    <div className="title">
                        <h2>WHY CHOOSE US</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, at consequatur expedita iste possimus reiciendis. Adipisci aliquid, delectus dignissimos esse est excepturi fugiat labore necessitatibus officia quo ratione unde vero?</p>
                </div>
            </div>

            <div className="rightImage">
                <div className="content">
                    <div className="title">
                        <h2>WHAT WE DO</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, explicabo, perferendis? Adipisci aperiam aut commodi corporis cum enim et expedita, id illum iure necessitatibus, nemo perferendis provident quia sequi, sunt.</p>
                </div>
                <div className="image right">
                    <img src={image2} alt=""/>
                </div>
            </div>

        </SectionContainer>
    );
};


const SectionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  
    .rightImage,.leftImage{
      display: flex;
      justify-content: center;
      padding: 4rem 5rem;
      gap: 2rem;
      .image{
        flex: 1;
        overflow: hidden;
        img{
          width: 100%;
          transition: all 0.7s cubic-bezier(0,1,0,1);
          &:hover{
            transform: scale(1.1);
            transition: all 0.7s cubic-bezier(1,0,1,0);
          }
        }
      }
      .content{
        flex: 1;
        .title{
          padding-bottom: 1rem;
          h2{
            font-size: 2rem;
            font-weight: 400;
          }
        }
      }
      &.grayBg{
        background-color: #f1f1f1;
      }
    }


  @media screen and (min-width: 260px) and (max-width: 800px){
    .rightImage,.leftImage{
      flex-direction: column;
      width: 100%;
    }
  }
`;


export default Sections;