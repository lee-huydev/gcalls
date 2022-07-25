import { Frame } from './styles/styles';
export default function History({ data }) {
   return (
      <Frame>
         <h1 className="title">User visited</h1>
         {data &&
            data.map((user, index) => (
               <div key={index} className="user">
                  <p>{`User: ${index}`}</p>
                  <p>{`Browser and Platfom: ${user.userAgent}`}</p>
                  <p>{`Time: ${new Date(user.createdAt)}`}</p>
                  <p>{`IP Address: ${user.ip}`}</p>
                  <p>{`Ping: ${
                     user.internet ? user.internet.ping + 'ms' : '--'
                  }`}</p>
                  <p>{`Download: ${
                     user.internet
                        ? (user.internet.douwn / 10).toFixed(2) + 'Mbps'
                        : '--'
                  }`}</p>
                  <p>{`Upload: ${
                     user.internet
                        ? (user.internet.up / 10).toFixed(2) + 'Mbps'
                        : '--'
                  }`}</p>
               </div>
            ))}
      </Frame>
   );
}
