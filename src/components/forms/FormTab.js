import React, { useState } from "react";
import AnchorButton from "../buttons/AnchorButton";
import Helper from "../../utils/helpers";
import Input from "../Inputs/Input";
import styled from "styled-components";
import ActionButton from "../buttons/ActionButton";

const Tabs = styled.div`
padding:10px;
`;

const ContentWraper = styled.div`
padding:10px;
`;

const Content = styled.div`
padding:10px;
`;

function FormTab (props) {
    let [ current, setCurrent ] = useState(0);
    let [ renderComp, getRenderComp ] = useState(null);
    let [ length, setLength ] = useState(null);
    let [ tabs, settabs ] = useState(null);

    const { tabData, type, label, changeEvent, clickEvent } = props;
    const defAction = Helper.sys.getDefaultButtonAction;
  
    return (
    <div className={(this.props.theme) ? this.props.theme : 'Default-Form-Wraper'}>
      <Tabs>{this.props.tabData.map((tab,index) => (<ActionButton clickEvent={this.setCurrent} name={tab.name} />))}</Tabs>
      <ContentWraper>
        {this.props.tabData.map((tab,index) => (
            <Content>
                {<div>{tab.renderComp.map((comp) => (<div className={(index===this.state.current) ? 'tab selelcted' : 'tab'}>
                    {(index === this.state.current) ? <Input clickEvent={comp.clickEvent || defAction} changeEvent={comp.changeEvent || defAction} type={comp.type} label={comp.label} name={comp.label} /> : null}</div>))}</div>}
            </Content>
        ))}
      </ContentWraper>
    </div>
    );
}

export default FormTab;
