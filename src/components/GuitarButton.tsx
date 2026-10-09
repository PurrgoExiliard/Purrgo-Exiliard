type GuitarButtonProps = {
  url: string;
  text: string;
};

export const GuitarButton = ({url, text}: GuitarButtonProps) => {
  const handleClick = () => {
    // Create a new audio element for each click
    const audio = new Audio(url);
    audio.play();
    
  };
  return <>
    <button key={text} onClick={handleClick}>Play {text}</button>
  </>;

};

export default GuitarButton;