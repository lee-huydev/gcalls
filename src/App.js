import { useState, useEffect } from 'react';
import { CallMode, Home, Video } from './components';
import CallJssip from './utils/jssip';
function App() {
   const [valueInput, setValueInput] = useState('');
   const [times, setTimes] = useState(0);
   const [callMode, setCallMode] = useState(false);
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
   return (
      <>
         <Video />
         {!callMode ? (
            <Home
               clickCall={clickCall}
               setValueInput={setValueInput}
               valueInput={valueInput}
            />
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
