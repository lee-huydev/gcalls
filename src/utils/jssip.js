import JsSIP from 'jssip';
import { useState } from 'react';

const socket = new JsSIP.WebSocketInterface('wss://sbc03.tel4vn.com:7444');
socket.via_transport = 'auto';
// =============
const user = '105';
const pass = 'test1105';
const userAgent = JsSIP.version;
const configuration = {
   uri: `sip:${user}@2-test1.gcalls.vn:50061`,
   password: pass,
   sockets: [socket],
   register_expires: 180,
   session_timers: false,
   user_agent: 'JsSip-' + userAgent,
};
JsSIP.debug.enable('JsSIP: *'); // log error jssip
const phone = new JsSIP.UA(configuration);
export default function CallJssip() {
   const [status, setStatus] = useState(null);
   // const [view, setViews] = useState({
   //    selfView: '',
   //    remoteView: '',
   // });
   // create html audio Object
   // const localStream = new MediaStream();
   // useEffect(() => {
   //    setViews({
   //       selfView: (document.getElementById('selfView').srcObject =
   //          localStream),
   //       remoteView: document.getElementById('remoteView'),
   //    });
   // }, []);
   // const { selfView } = view;
   phone.on('newRTCSession', (e) => {
      const session = e.session;
      session.on('progress', (e) => {
         console.log('This is session progress............................')
         const selfView = document.getElementById('selfView');
         selfView.src = window.URL.createObjectURL(session.connection.getLocalStreams()[0])
      });
   });
   const eventHandlers = {
      connecting: function () {
         setStatus('Connecting...');
      },
      progress: function () {
         setStatus('Ringing...');
      },
      failed: function () {
         setStatus('Failed...');
      },
      confirmed: function () {
         setStatus('confirmed');
      },
      ended: function () {
         setStatus('Ended...');
      },
   };
   const callOptions = {
      eventHandlers: eventHandlers,
      mediaConstraints: {
         audio: true,
         video: true,
      },
   };

   return {
      status,
      phoneStart: () => phone.start(),
      onCall: (telNumber) => phone.call(telNumber.toString(), callOptions),
      stop: () => phone.stop(),
   };
}
