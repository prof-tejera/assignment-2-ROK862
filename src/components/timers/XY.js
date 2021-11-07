import React from "react";
import AnchorButton from "../buttons/AnchorButton";
import { sys } from "../../utils/helpers";
import styled from "styled-components";
import Options from "../Inputs/Options";
import Input from "../Inputs/Input";
import SoundEffect from "../../audio/SoundEffect";



const DigitalWatch = styled.div`
background: #bb0092;
border-radius: 30px;
font-size: 60px;
text-align: center;
color: white;
`;

const ComponentTitle = styled.div`
font-size: 12px;
text-transform: uppercase;
margin-bottom: 20px;
color: #3e94cd;
font-weight: bold;
`;

class XY extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'inactive',
      formatedTime: '',
      currentTime: '',
      hours: 0,
      minutes: 0,
      seconds: 0,
      entry: 'new',
      rounds: 1,
      enableSound: false,
    }
  }

  render() {
    const { hours, minutes, seconds } = this.state;

    this.onStartTimer = () => {
      this.setState({
        status: 'active',
      });
    }

    this.onStartTimer = () => {
      this.setState({
        status: 'active',
      });
    }

    this.onStopTimer = () => {
      this.setState({
        status: 'inactive',
        currentTime: 0.0
      });
    }

    this.onPauseTimer = () => {
      this.setState({
        status: 'paused',
      });
    }

    this.onStartTiming = () => {
      const timeInSeconds = 0;
      this.setState({
        status: 'timing',
        currentTime: timeInSeconds
      });
      this.TimerTickTock(true);
    }

    this.onSetHours = (val) => {
      this.setState({
        hours: val,
      });
    }

    this.onSetRounds = (val) => {
      this.setState({
        rounds: val,
      });
    }

    this.onSetMinutes = (val) => {
      this.setState({
        minutes: val,
      });
    }

    this.onSetSeconds = (val) => {
      this.setState({
        seconds: val,
      });
    }

    this.TimerTickTock = (startOnCurrentThread=false) => {
      if (this.state.status !== 'timing' && !startOnCurrentThread) return;

      setTimeout(()=>{
        let newTime = this.state.currentTime + 1.0;
        const formatedTime = sys.onConvertToTime({input:newTime, hours, minutes, seconds});
        
        if (sys.onConvertToSeconds({hours, minutes, seconds}) <= newTime) {
          if (this.state.rounds > 0) {
            const newRounds = this.state.rounds - 1;
            newTime = 0;
            this.setState({
              rounds: newRounds
            });
          } 
        }
        
        this.setState({
          currentTime: newTime,
          formatedTime: formatedTime,
        });
        if (this.state.rounds > 0 || (sys.onConvertToSeconds({hours, minutes, seconds}) > newTime))
          this.TimerTickTock();
      },1000);
    }

    
    this.onTriggerSound = () => {
      const newTime = this.state.currentTime;
      if ((!this.state.enableSound && this.state.rounds > 0) || (sys.onConvertToSeconds({hours, minutes, seconds}) > newTime)) {
        return false;
      }
      return true;
    }

    this.renderState = () => {
      if (this.state.status === 'inactive')
        return <AnchorButton name='Start Now' onClick={this.onStartTimer} />;
        else if (this.state.status === 'active')
        return <DigitalWatch>
          <div className='StopWatch'>
            <Options options={[...Array(24).keys()]} onChange={this.onSetHours} name='Hours' />
            <Options options={[...Array(60).keys()]} onChange={this.onSetMinutes} name='Minutes' />
            <Options options={[...Array(60).keys()]} onChange={this.onSetSeconds} name='Seconds' />
          </div>
          <div className='Preview'>
          <Input onChange={this.onSetRounds} placeholder='Number of Rounds' />
          </div>
          <div className='Preview'>
            {sys.onConvertToTime({hours, minutes, seconds})}
          </div>
          <AnchorButton name='Start timing' onClick={this.onStartTiming} />
          <AnchorButton name='Close Timer' onClick={this.onStopTimer} />
        </DigitalWatch>
      else if (this.state.status === 'timing')
      return <DigitalWatch>
        <div className='StopWatchLabels'>
          {this.state.rounds}
        </div>
        <div className='StopWatch'>
          {this.state.formatedTime}
          <SoundEffect isPlaying={this.onTriggerSound()} />
        </div>
        <AnchorButton name='Pause' onClick={this.onPauseTimer} />
      </DigitalWatch>
       else if (this.state.status === 'paused')
       return <DigitalWatch>
         <div className='StopWatch'>
           {this.state.formatedTime}
           <SoundEffect clip={this.state.status} isPlaying={true} />
         </div>
         <AnchorButton name='Start timing' onClick={this.onStartTiming} />
         <AnchorButton name='Stop timing' onClick={this.onStopTimer} />
       </DigitalWatch>
    }

    return <div className={(this.props.theme) ? this.props.theme : 'Default-Pink-Theme'}>
      <ComponentTitle>XY</ComponentTitle>
      {this.renderState()}
    </div>;
  }
}

export default XY;