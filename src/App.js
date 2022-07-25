import { useState, useEffect } from 'react';
import axios from 'axios';
import { CallMode, Home, Video } from './components';
import CallJssip from './utils/jssip';
import { History } from './components';
import { Container, Inner } from './components/Home/styles/styles'
import { Option } from './components'
function App() {
   const [valueInput, setValueInput] = useState('');
   const [times, setTimes] = useState(0);
   const [callMode, setCallMode] = useState(false);
   const [option, setOption] = useState('call');
   const [userHistory, setUserHistory] = useState(null);
   const { status, onCall, phoneStart, stop } = CallJssip();
   const clickCall = () => {
      if (valueInput) {
         phoneStart();
         onCall(valueInput);
         setCallMode(true);
      }
   };
   const clickEnd = () => {
      stop();
      setTimeout(() => {
         setCallMode(false);
      }, 1000);
   };
   useEffect(() => {
      const timer = setTimeout(() => {
         setTimes(times + 1);
      }, 1000);
      if (status !== 'confirmed') {
         clearTimeout(timer);
         setTimes(0);
      }
   }, [status, times]);
   useEffect(() => {
      if (status === 'Ended...' || status === 'Failed...') {
         stop();
         setTimeout(() => {
            setCallMode(false);
         }, 1000);
      }
   }, [status]);
   const getData = async () => {
      const res = await axios.get(process.env.REACT_APP_DATABASE_URL);
      setUserHistory(res.data.reverse());
   };
   useEffect(() => {
      getData();
   }, []);
   return (
      <>
         <Video />
         {!callMode ? (
            <Container>
               <Inner>
                  <Option setOption={setOption}/>
               {option === 'call' ? (
                  <Home
                     clickCall={clickCall}
                     setValueInput={setValueInput}
                     valueInput={valueInput}
                  />
               ) : (
                  <History data={userHistory}/>
               )}
               </Inner>
            </Container>
         ) : (
            <CallMode
               valueInput={valueInput}
               status={status}
               times={times}
               clickEnd={clickEnd}
            />
         )}
      </>
   );
}

export default App;
