import { NumericKeyboard } from 'react-numeric-keyboard';
import { Container, Inner } from './styles/styles';
import { IoCall } from 'react-icons/io5';
import { Button } from '../../components';


export default function Home({ clickCall, setValueInput, valueInput }) {
   // const [valueInput, setValueInput] = useState('');
   // const [times, setTimes] = useState(0);
   // const { status, onCall, phoneStart } = CallJssip();
   const onChange = ({ value }) => {
      setValueInput(value);
   };
   // const call = () => {
   //    if (valueInput) {
   //       phoneStart();
   //       onCall(valueInput);
   //       setCallMode({
   //          ...callMode,
   //          statusMode: false,
   //          telNumber: valueInput,
   //       });
   //    }
   // };
   // useEffect(() => {
   //    const timer = setTimeout(() => {
   //       setTimes(times + 1);
   //    }, 1000);
   //    if (status !== 'confirmed') {
   //       clearTimeout(timer);
   //       setTimes(0);
   //    }
   // }, [status, times]);
   // console.log("status call: " + status)
   return (
      <Container>
         <Inner>
            <div className="form">
               <input
                  value={valueInput}
                  className="input"
                  type="text"
                  onChange={() => console.log(valueInput)}
               />
            </div>
            <NumericKeyboard
               isOpen={true}
               onChange={onChange}
               hasTransition={false}
               className="keyboard"
            />
            <div className="line"></div>
            <Button
               Icon={IoCall}
               backGround={'#4BD68A'}
               width={'150px'}
               valueInput={valueInput}
               onClick={clickCall}
            />
         </Inner>
      </Container>
   );
}
