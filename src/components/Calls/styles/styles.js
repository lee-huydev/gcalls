import styled from 'styled-components';

export const Frame = styled.div`
   max-width: 100%;
   width: 480px;
   color: #fff;
   text-align: center;
   .tel-number {
      font-size: 30px;
      letter-spacing: 1px;
      font-weight: 400;
   }
   .logo {
      font-size: 20px;
      margin-top: -15px;
   }
   .status {
      font-size: 18px;
      margin-top: 40px;
      color: #4BD68A;
   }
   .option {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      margin-top: 60px;
   }
   .option-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
      .icon {
         font-size: 35px;
         width: 50px;
         height: 50px;
         border-radius: 50%;
         border: 1px solid #fff;
         margin-bottom: 20px;
         display: flex;
         justify-content: center;
         align-items: center;
      }
   }
   .button {
    margin-top: 200px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
   }
`;
