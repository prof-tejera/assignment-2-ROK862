import React from "react";
import Audio from "react-howler";


class SoundEffect extends React.Component {
    render() {
        const clips = {
            onClick: "./goalVolume01.wav",
            paused: "./goalVolume02.wav",
            timing: "./goalVolume03.wav",
            default: "./goalVolume01.wav",
        };
        let clipToPlay = clips.default;
        if (this.props.clip) {
            try {
                clipToPlay = clips[this.props.clip];
            } catch (ex) {
                clipToPlay = clips.default;
            }
        }

        this.hasProps = (prop) => (prop) ? prop : false;

        return <Audio volume='0.3' loop={this.hasProps(this.props.loop)} autoplay={this.hasProps(this.props.autoplay)} src={clipToPlay} playing={this.props.isPlaying} />
    }
}

export default SoundEffect;