import { VideoContainer } from './styles/styles'
export default function Video() {
   return (
      <VideoContainer>
         <video id="selfView" autoPlay muted={true}></video>
      </VideoContainer>
   );
}
