import styled from 'styled-components';

export const Frame = styled.button`
   width: ${(props) => props.width};
   height: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 40px;
   background-color: ${(props) => props.backGround};
   border-radius: 30px;
   border: none;
   color: #fff;
   opacity: ${(props) => (props.valueInput === '' ? 0.7 : 1)};
   transition: all .3s ease;
   &:hover {
      cursor: ${(props) =>
         props.valueInput === '' ? 'not-allowed' : 'pointer'};
      opacity: 0.7;
   }
`;
