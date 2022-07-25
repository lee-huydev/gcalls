import { NumericKeyboard } from 'react-numeric-keyboard';
import { IoCall } from 'react-icons/io5';
import { Button } from '../../components';
export default function Home({ clickCall, setValueInput, valueInput }) {
   const onChange = ({ value }) => {
      setValueInput(value);
   };
   return (
      <>
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
      </>
   );
}
