const PlayerYT = (function() {
	var __private = {
		containerID: "video",
		className: "video",
		videosID: [],
		params: {
			height: "100%",
			width: "100%"
		},


		set(args) {
			if(args.containerID) this.containerID = args.containerID;
			if(args.className)   this.className = args.className;
			if(args.videosID)    this.videosID = args.videosID;
			if(args.params) {
				if(args.params.height) this.params.height;
				if(args.params.width)  this.params.width;
			}
		},

		script() {
			// loads the IFrame Player API code asynchronously
			var tag = document.createElement("script");
			tag.src = "https://www.youtube.com/iframe_api";
			tag.type = "text/javascript";
			var firstScriptTag = document.getElementsByTagName("script")[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		},

		video() {
			var parent = document.getElementById(this.containerID);
			// { TODO: } Create container, if it's not

			if(this.videosID.length !== 0) {
				for(let i = 0; i < this.videosID.length; i++) {
					let video = this.videosID[i];
					let divID = "video-00" + i;
					let thumb = "http://img.youtube.com/vi/" + video + "/0.jpg";
					// { TODO: } create thumb()

					let div = document.createElement("div");
					div.id = divID;
					parent.appendChild(div);

					this.onYouTubeIframeAPIReady(video, divID);
				}
			}
		},

		onYouTubeIframeAPIReady(ID, place) {
			this[place];
			console.log(window.YT);
			this[place] = new YT.Player(place, {
					height: __private.params.height,
					width: __private.params.width,
					videoId: ID,
					events: {}
				});
			/*window.YouTubeIframeLoader.load(function (YT) {
				
			});*/
		}

	};

	return {
		load(args) {
			if(args) __private.set(args);
			if(args.script === true) __private.script();

			//__private.video();
		}
	};
})();


// export
export { PlayerYT };