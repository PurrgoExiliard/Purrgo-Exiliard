import { useState, useRef } from "react";

type GuitarButtonProps = {
  url: string;
  text: string;
  id: number;
};

export const GuitarButton = ({url, text, id}: GuitarButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const handleClick = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(url);
    }
    
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
    
  };
  return <>
    <div className="guitar_container">
    <span>{text}</span>
    <button id={id.toString()} onClick={handleClick}>
      {isPlaying ? "Stop" : "Play"}
    </button>
    </div>
  </>;

};

export default GuitarButton;