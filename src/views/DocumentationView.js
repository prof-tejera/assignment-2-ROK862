import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import ActionButton from "../components/buttons/ActionButton";
import AnchorButton from "../components/buttons/AnchorButton";
import DisplayBreaks from "../components/generic/DisplayBreaks";
import DisplayRounds from "../components/generic/DisplayRounds";
import Input from "../components/Inputs/Input";
import Options from "../components/Inputs/Options";
import DisplayWatch from "../components/generic/DigitalWatch";
import PauseDisplay from "../components/generic/PauseDisplay";
import TimerDisplay from "../components/generic/TimerDisplay";
import TimerGoal from "../components/generic/TimerGoal";
import TimerToolBar from "../components/generic/TimerToolBar";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 85%;
  overflow: scroll;
  background: white;
  padding: 5%;
`;

const Note = styled.div`
padding: 30px;
font-weight: 300;
background: #d2ffd2;
border-bottom: 2px solid #0085c5;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <Title>Documentation</Title>
          <br/>
          <Note><strong>NB</strong>: Due to an upgrade concerned with the way the application handles state, it no longer makes sense to pass certain props values down to some components. Thus, to prevent challenges such as <strong>Props Drilling, or State Hoisting</strong>, most components access certain "GLOBAL STATE" values with context directly from the <strong><a href="https://github.com/prof-tejera/assignment-2-ROK862/blob/main/src/context/AppProvider.js">AppProvider</a></strong>.  For purposes of clarity, note that this is not the ultimate solution. For accurate state management--rather than directly interacting with the state store from UI code, I reckon using something like <strong><a href="https://react-redux.js.org/introduction/why-use-react-redux">Redux</a></strong>. However, for purposes of this assignment, react <strong><a href="https://reactjs.org/docs/context.html">useContext</a></strong> works well.</Note>
          <DocumentComponent
            title="Loading spinner "
            component={<Loading />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
            ]}
          />
          <DocumentComponent
            title="Action Button "
            component={<Input name="Doc Button" placeholder="Doc Input" />}
            propDocs={[
              {
                prop: "onChange",
                description: "onChange event handler passed down from parent component.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "className",
                description: "Class name--custom styling.",
                type: "string",
                defaultValue: "Default-input",
              },{
                prop: "placeholder",
                description: "The placeholder value displayed when component value is empty.",
                type: "string",
                defaultValue: "Required.",
              },
            ]}
          />
          <DocumentComponent
            title="Anchor Button "
            component={<AnchorButton name="Doc Button" />}
            propDocs={[
              {
                prop: "className",
                description: "Change button theme.",
                type: "string",
                defaultValue: "Default-Action-Button",
              },{
                prop: "name",
                description: "Change the title text displayed on the button.",
                type: "string",
                defaultValue: "Untitled",
              },{
                prop: "onClick",
                description: "Button onclick event.",
                type: "function",
                defaultValue: "console.log()",
              },
            ]}
          />
          <DocumentComponent
            title="Action Button "
            component={<ActionButton name="Doc Button" />}
            propDocs={[
              {
                prop: "className",
                description: "Change button theme.",
                type: "string",
                defaultValue: "Default-Action-Button",
              },{
                prop: "name",
                description: "Change the title text displayed on the button.",
                type: "string",
                defaultValue: "Untitled",
              },{
                prop: "onClick",
                description: "Button onclick event.",
                type: "function",
                defaultValue: "console.log()",
              },
            ]}
          />
          <DocumentComponent
            title="Action Button "
            component={<Options options={[...Array(24).keys()]} onChange={(e=0)=>null} name='Doc Options' />}
            propDocs={[
              {
                prop: "name",
                description: "The label to be displayed next to the select drop down.",
                type: "string",
                defaultValue: "Untitled",
              },
              {
                prop: "options",
                description: "An array object used to generate selectable options.",
                type: "array",
                defaultValue: "['Choose an Option']",
              },
              {
                prop: "onChange",
                description: "onChange event handler passed down from parent component.",
                type: "function",
                defaultValue: "Required",
              },
            ]}
          />
          <DocumentComponent 
            title="Display Break"
            component={<DisplayBreaks onSetHours={(e=1)=>null} onSetMinutes={(e=1)=>null} onSetSeconds={(e=1)=>null} onSetRounds={(e=1)=>null} onConvertToTime={(e=1)=>"00:00:00"} onStartTiming={(e=1)=>null} onStopTimer={(e=1)=>null} />}
            propDocs={[
              {
                prop: "name",
                description: "Timer title.",
                type: "string",
                defaultValue: "Title",
              },{
                prop: "onSetHours",
                description: "onSetHours updates parent state once the hours drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetMinutes",
                description: "onSetMinutes updates parent state once the minutes drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetSeconds",
                description: "onSetSeconds updates parent state once the seconds drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onConvertToTime",
                description: "onConvertToTime gets the display time string from the parent component.",
                type: "function",
                defaultValue: "Required",
              },
            ]}
          />
         
         <DocumentComponent 
            title="Display Rounds"
            component={<DisplayRounds onSetHours={(e=1)=>null} onSetMinutes={(e=1)=>null} onSetSeconds={(e=1)=>null} onSetRounds={(e=1)=>null} onConvertToTime={(e=1)=>"00:00:00"} onStartTiming={(e=1)=>null} onStopTimer={(e=1)=>null} />}
            propDocs={[
              {
                prop: "name",
                description: "Timer title.",
                type: "string",
                defaultValue: "Title",
              },{
                prop: "onSetHours",
                description: "onSetHours updates parent state once the hours drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetMinutes",
                description: "onSetMinutes updates parent state once the minutes drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetSeconds",
                description: "onSetSeconds updates parent state once the seconds drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onConvertToTime",
                description: "onConvertToTime gets the display time string from the parent component.",
                type: "function",
                defaultValue: "Required",
              },
            ]}
          />
          <DocumentComponent 
            title="Display Watch"
            component={<DisplayWatch currentValues={{ hours:0, minutes:0, seconds:0 }} onSetMinutes={(e=1)=>null} onSetSeconds={(e=1)=>null} onSetRounds={(e=1)=>null} onConvertToTime={(e=1)=>"00:00:00"} onStartTiming={(e=1)=>null} onStopTimer={(e=1)=>null} />}
            propDocs={[
              {
                prop: "onSetHours",
                description: "onSetHours updates parent state once the hours drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetMinutes",
                description: "onSetMinutes updates parent state once the minutes drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetSeconds",
                description: "onSetSeconds updates parent state once the seconds drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetRounds",
                description: "onSetRounds updates parent state once the rounds input changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onStartTiming",
                description: "onStartTiming updates parent state once the start timing button has been clicked.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetHours",
                description: "onSetHours updates parent state once the hours drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onStopTimer",
                description: "onStopTimer updates parent state once the Stop Timer button is clicked.",
                type: "function",
                defaultValue: "Required",
              },
            ]}
          />
          <DocumentComponent 
            title="Timer Display"
            component={<TimerDisplay currentValues={{ hours:0, minutes:0, seconds:0 }} onSetHours={(e=1)=>null} onSetMinutes={(e=1)=>null} onSetSeconds={(e=1)=>null} onSetRounds={(e=1)=>null} onConvertToTime={(e=1)=>"00:00:00"} onStartTiming={(e=1)=>null} onStopTimer={(e=1)=>null} />}
            propDocs={[
              {
                prop: "onSetHours",
                description: "onSetHours updates parent state once the hours drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetMinutes",
                description: "onSetMinutes updates parent state once the minutes drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetSeconds",
                description: "onSetSeconds updates parent state once the seconds drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetRounds",
                description: "onSetRounds updates parent state once the rounds input changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onStartTiming",
                description: "onStartTiming updates parent state once the start timing button has been clicked.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetHours",
                description: "onSetHours updates parent state once the hours drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onStopTimer",
                description: "onStopTimer updates parent state once the Stop Timer button is clicked.",
                type: "function",
                defaultValue: "Required",
              },
            ]}
          />
          <DocumentComponent 
            title="Pause Display"
            component={<PauseDisplay />}
            propDocs={[
              {
                prop: "displayTime",
                description: "PauseDisplay relies on displayTime which is destructured from AppProvider as a contextValue. This field renders time on the screen.",
                type: "string",
                defaultValue: "Required",
              },{
                prop: "onResumeTimer",
                description: "PauseDisplay relies on onResumeTimer which is destructured from AppProvider as a contextValue. onResumeTimer changes state of timer to timing, which intern starts the timer.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onCloseTimer",
                description: "PauseDisplay relies on onCloseTimer which is destructured from AppProvider as a contextValue. This function closes the timer completely, and resets it.",
                type: "function",
                defaultValue: "Required",
              }
            ]}
          />

          <DocumentComponent 
            title="Timer Goal"
            component={<TimerGoal currentValues={{ hours:0, minutes:0, seconds:0 }} onSetHours={(e=1)=>null} onSetMinutes={(e=1)=>null} onSetSeconds={(e=1)=>null} onSetRounds={(e=1)=>null} onConvertToTime={(e=1)=>"00:00:00"} onStartTiming={(e=1)=>null} onStopTimer={(e=1)=>null} />}
            propDocs={[
              {
                prop: "setTimerStatus",
                description: "Timer Goal relies on setTimerStatus from AppProvider. Timer Goal uses this function to set timer active once user has reached its goal. Called with Reset Button.",
                type: "function",
                defaultValue: "Required",
              },
            ]}
          />

          <DocumentComponent 
            title="Pause Display"
            component={<PauseDisplay currentValues={{ hours:0, minutes:0, seconds:0 }} onSetHours={(e=1)=>null} onSetMinutes={(e=1)=>null} onSetSeconds={(e=1)=>null} onSetRounds={(e=1)=>null} onConvertToTime={(e=1)=>"00:00:00"} onStartTiming={(e=1)=>null} onStopTimer={(e=1)=>null} />}
            propDocs={[
              {
                prop: "onSetHours",
                description: "onSetHours updates parent state once the hours drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetMinutes",
                description: "onSetMinutes updates parent state once the minutes drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetSeconds",
                description: "onSetSeconds updates parent state once the seconds drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetRounds",
                description: "onSetRounds updates parent state once the rounds input changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onStartTiming",
                description: "onStartTiming updates parent state once the start timing button has been clicked.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onSetHours",
                description: "onSetHours updates parent state once the hours drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "onStopTimer",
                description: "onStopTimer updates parent state once the Stop Timer button is clicked.",
                type: "function",
                defaultValue: "Required",
              },
            ]}
          />

          <DocumentComponent 
            title="Timer Tool Bar"
            component={<TimerToolBar />}
            propDocs={[
              {
                prop: "setCurrentTimer",
                description: "setCurrentTimer updates current timer once user selects a timer to render.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "status",
                description: "status is required to determin when to disable mouse events. Note, mouse events are disabled once the timer is in a timing state--although swaping timers during this state works, it makes no sence to do so form a functional perspective.",
                type: "string", 
                defaultValue: "Required",
              },{
                prop: "onSetSeconds",
                description: "onSetSeconds updates parent state once the seconds drop down changed.",
                type: "function",
                defaultValue: "Required",
              },{
                prop: "currentTimer",
                description: "currentTimer is used to test if the timer button should render with selected class appended.",
                type: "string",
                defaultValue: "Required",
              },{
                prop: "APP_RENDER_KEYS",
                description: "APP_RENDER_KEYS is an associative array which is access from a AppProvider with context as a lookup reference to determin which timer is selected, and the associated key value pair to use once updating new timer values once timer is selected.",
                type: "array",
                defaultValue: "Required",
              },
            ]}
          />
        </div>
      </Container>
    );
  }
}

export default Documentation;
