// Common styles
import "normalize.css";
import "../main.scss";
// Page styles
import "./videoplayeryt.scss";

// Connect modules
import { PlayerYT } from "../../modules/videoplayeryt";

// Run modules
// !WARNING - need `yarn add youtube-iframe`
var videoContID = "videoYT";
PlayerYT.load({
	script: true,
	containerID: videoContID,

	videosID: [
		"EDir9-UoPjo", 
		"c9pQYOGIWM8", 
		"xNN7iTA57jM",
		"pUdZFXsHk0o",
		"RN36RzSjWNw"
	]
});
