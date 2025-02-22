import VideoListEntry from "VideoListEntry"
var VideoList = (videos) => (
  <div className="video-list">
    <VideoListEntry video={videos[0]}/>
    <VideoListEntry video={videos[1]}/>
    <VideoListEntry video={videos[2]}/>
    <VideoListEntry video={videos[3]}/>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
