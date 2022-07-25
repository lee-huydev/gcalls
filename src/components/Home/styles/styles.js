import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   max-width: 1024px;
   height: 100vh;
   display: flex;
   margin: 0 auto;
   align-items: center;
   justify-content: center;
`;

export const Inner = styled.div`
   width: fit-content;
   background-color: #6739b6;
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 20px;
   border-radius: 20px;
   .form {
    width: 80%;
    margin-top: 30px;
      .input {
         width: 100%;
         margin: 0 auto;
         border: none;
         outline: none;
         padding: 6px 0;
         background-color: #6739b6;
         color: #fff;
         border-bottom: 2px solid #fff;
         font-size: 25px;
      }
   }
   .keyboard {
      position: relative;
      width: 500px;
      .index-module_KeyboardItem__Hjjrl {
         background-color: #6739b6;
         border: none;
         p, img {
            color: #fff;
            user-select: none;
            font-size: 30px;
         }
         &:hover {
            background-color: #4BD68A;
         }
      }
   }
   .line {
      width: 100%;
      height: 7px;
      background-color: #6739b6;
      margin-top: -27px;
      position: relative;
      z-index: 100;
   }
`;
