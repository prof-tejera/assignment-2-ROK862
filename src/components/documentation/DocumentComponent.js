import React from "react";
import styled from "styled-components";
import { _getKey } from "../../utils/helpers";

const Wrapper = styled.div`
  border: 1px solid #dddddd;
  margin: 20px 0px;
  border-radius: 0px;
  box-shadow: 0px 5px 9px 0px #0000003d;
  border-bottom: 2px solid #0085c5;
`;

const Container = styled.div`
  justify-content: center;
  width: auto;
  height: 100%;
  overflow: hidden;
  background: white;
  padding: 50px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  font-size: 1.3rem;
`;

const RenderComponent = styled.div`
align-items: center;
    margin: auto;
    width: auto;
    display: table;
`;

const Documentation = styled.table``;

class DocumentComponent extends React.Component {
  render() {
    return (
      <Wrapper key={_getKey()}>
        <Title key={_getKey()}>{this.props.title}</Title>
        <Container key={_getKey()}>
          <RenderComponent key={_getKey()}>{this.props.component}</RenderComponent>
          <Documentation key={_getKey()}>
            <tbody>
            <tr key={_getKey()}>
              <th key={_getKey()}>Prop</th>
              <th key={_getKey()}>Description</th>
              <th key={_getKey()}>Type</th>
              <th key={_getKey()}>Default value</th>
            </tr>
            {this.props.propDocs.map((doc) => {
              return (
                <tr key={_getKey()}>
                  <td key={_getKey()}>{doc.prop}</td>
                  <td key={_getKey()}>{doc.description}</td>
                  <td key={_getKey()}>{doc.type}</td>
                  <td key={_getKey()}>
                    <code key={_getKey()}>{doc.defaultValue}</code>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </Documentation>
        </Container>
      </Wrapper>
    );
  }
}

export default DocumentComponent;
