import React from 'react';
import styled from "styled-components";

const Address = () => {
    return (
        <AddressContainer className="address">
            <h1>Address</h1>
            <p>22 HARLEY STREET, LONDON W1G GAP</p>
        </AddressContainer>
    );
};

const AddressContainer = styled.div`
    width: 100%;
    text-align: center;
  padding: 3rem;
  
   h1{
     font-size: 2rem;
     &:after{
       content: "";
       height: 0.2rem;
       width: 7.300000000000001rem;
       display: block;
       text-align: center;
       margin: 1rem auto;
       background-color: black;
     }
   }
`;

export default Address;