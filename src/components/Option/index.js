import { useState } from 'react';
import { Option } from './styles/styles';
export default function OptionContainer({ setOption }) {
   const initActive = {
      content: 'call',
      bgColor: '#4BD68A',
      options: ['call', 'history'],
   };
   const [active, setActive] = useState(initActive);
   return (
      <Option>
         {active.options.map((option, index) => (
            <div
               key={index}
               className="item"
               style={
                  active.content === option
                     ? { backgroundColor: '#4BD68A' }
                     : {}
               }
               onClick={() => {
                  setActive({ ...active, content: option });
                  setOption(option);
               }}
            >
               {option.toUpperCase()}
            </div>
         ))}
      </Option>
   );
}
