import React from "react";
import { APP_AUDIO } from "../context/settings";

// I am no longer using Hawler due to problems while getting 
// audio url from createObjectURL. Not to mention the inconsistancy.
// Will leave this here for reference to changes made.
const SoundEffect = () => {
  // deprecated.
  return <></>;
};

// New function for playing audio. 
// Clips are predefined, and can only be changed from the [clips] Associative array.
export const playAudio = ({clip, volume}) => {
  const clips = APP_AUDIO.CLIPS;
  const audio = new Audio(clips[clip] || clips.default);
  audio.volume = volume || APP_AUDIO.VOLUME;
  audio.play();
}


// Still exporting sound effects, because generally, after changes we don't remove code. 
// Old habits die hard. :(
export default SoundEffect;
