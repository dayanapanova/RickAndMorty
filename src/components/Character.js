import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display:flex;
  background-color:${({ theme }) => theme.colors.light};
  box-shadow: 0 0 11px -5px rgba(0,0,0,0.3);
  overflow:hidden;
  border-radius:5px;
  cursor:pointer;
  margin-bottom: 10px;
`
Box.LeftSide = styled.div`
 width:40%;
`
Box.RightSide = styled.div`
 width:60%;
 padding:10px;
`
const Image = styled.img`
display:block;
width:100%;
height:100%;
object-fit:cover;
`
const Name = styled.h3`
color:${({ theme }) => theme.colors.dark};
margin:0 0 10px 0;
`
const Status = styled.span`
background-color:${({ theme }) => theme.colors.silver};
padding:2px 5px;
margin-top:10px;
font-size:14px;
border-radius:3px;
display:inline-block;
`
const Gender =styled.p`
color:${({theme})=>theme.colors.dark};
text-transform:uppercase;
margin:0;
`
const Character = ({ onClick, image, name, status, gender }) => (

    <Box onClick={onClick}>
        <Box.LeftSide>
            <Image src={image} />
        </Box.LeftSide>
        <Box.RightSide>
            <Name>{name}</Name>
            <Gender>{gender}</Gender>
            <Status>{status}</Status>
        </Box.RightSide>
    </Box>

)
export default Character;