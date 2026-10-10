type GuitarButtonProps = {
  url: string;
  text: string;
};

export const GuitarButton = ({url, text}: GuitarButtonProps) => {
  var isPlaying = false;
  const audio = new Audio(url);
  const handleClick = () => {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
  };
  return <>
    <button key={text} onClick={handleClick}>Play {text}</button>
  </>;

};

export default GuitarButton;