import { ReactMediaRecorder } from "react-media-recorder";
import './RecordView.css'
const RecordView = () => (
  <div>
    <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className="container">
          <p><strong>Status:</strong> {status}</p>
          <video src={mediaBlobUrl} controls autoPlay loop /><br></br>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
        </div>
      )}
    />
  </div>
);
export default RecordView;