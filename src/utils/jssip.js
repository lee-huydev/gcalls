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
const phone = new JsSIP.UA(configuration); //init class phone
export default function CallJssip() {
   const [status, setStatus] = useState(null);
   // Init peerconnection data of video and audio
   const peer = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
   });
   //===============
   const onWebcam = async (video) => {
      const selfView = document.getElementById('selfView');
      if (video) {
         selfView.style.display = 'block';
         const localStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
         });
         localStream.getTracks().forEach((track) => {
            peer.addTrack(track, localStream);
         });
         selfView.srcObject = localStream;
      } else {
         selfView.style.display = 'none';
         const stream = selfView.srcObject;
         const tracks = stream.getTracks();
         tracks.forEach(function (track) {
            track.stop();
         });
         selfView.srcObject = null;
      }
   };
   const eventHandlers = {
      connecting: function () {
         setStatus('Connecting...');
      },
      progress: function () {
         setStatus('Ringing...');
         onWebcam(true);
      },
      failed: function () {
         setStatus('Failed...');
         onWebcam(false);
      },
      confirmed: function () {
         setStatus('confirmed');
      },
      ended: function () {
         setStatus('Ended...');
         onWebcam(false);
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
