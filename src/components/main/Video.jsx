
const Video = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="fixed w-full h-full object-cover -z-10"
    >
      <source src="/land_vid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
