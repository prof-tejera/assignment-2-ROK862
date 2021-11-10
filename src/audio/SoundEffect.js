import React from "react";
import Audio from "react-howler";

const clips = {
    onClick: "./goalVolume01.wav",
    paused: "./goalVolume02.wav",
    timing: "./goalVolume03.wav",
    default: "./goalVolume01.wav",
};

class SoundEffect extends React.Component {
    render() {
        
        let clipToPlay = clips.default;
        if (this.props.clip) {
            try {
                clipToPlay = clips[this.props.clip];
            } catch (ex) {
                clipToPlay = clips.default;
            }
        }
        console.log("Audio render called!");
        this.hasProps = (prop) => (prop) ? prop : false;

        return <Audio volume='0.3' loop={this.hasProps(this.props.loop)} autoplay={this.hasProps(this.props.autoplay)} src={clipToPlay} playing={this.props.isPlaying} />
    }
}

export default SoundEffect;