import { Container, Inner } from '../Home/styles/styles';
import { Frame } from './styles/styles';
import { Button } from '../../components';
import { BsFillMicMuteFill } from 'react-icons/bs';
import { IoIosKeypad } from 'react-icons/io';
import { AiOutlinePause } from 'react-icons/ai';
import { MdAddCall, MdOutlineCallEnd } from 'react-icons/md';

export default function CallMode({ valueInput, status, times, clickEnd }) {
   const convert = (time) => {
      let sec_num = parseInt(time, 10); // don't forget the second param
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - hours * 3600) / 60);
      let seconds = sec_num - hours * 3600 - minutes * 60;

      if (hours < 10) {
         hours = '0' + hours;
      }
      if (minutes < 10) {
         minutes = '0' + minutes;
      }
      if (seconds < 10) {
         seconds = '0' + seconds;
      }
      return hours + ':' + minutes + ':' + seconds;
   };
   return (
      <Container>
         <Inner>
            <Frame>
               <h3 className="tel-number">{valueInput}</h3>
               <p className="logo">Gcalls</p>
               <p className="status">
                  {status === 'confirmed' ? convert(times) : status}
               </p>
               <div className="option">
                  <div className="option-item">
                     <span className="icon">
                        <BsFillMicMuteFill />
                     </span>
                     <span>Mute</span>
                  </div>
                  <div className="option-item">
                     <span className="icon">
                        <IoIosKeypad />
                     </span>
                     <span>Keypad</span>
                  </div>
                  <div className="option-item">
                     <span className="icon">
                        <AiOutlinePause />
                     </span>
                     <span>Pause</span>
                  </div>
                  <div className="option-item">
                     <span className="icon">
                        <MdAddCall />
                     </span>
                     <span>Forward</span>
                  </div>
               </div>
               <div className="button">
                  <Button
                     Icon={MdOutlineCallEnd}
                     backGround={'#E91E62'}
                     width={'150px'}
                     valueInput={valueInput}
                     onClick={clickEnd}
                  />
               </div>
            </Frame>
         </Inner>
      </Container>
   );
}
