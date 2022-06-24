import styled from "styled-components";

const PanelFragment = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 3px rgb(2, 1, 1);
  border-radius: 10px;
  max-width: 300px;
  padding: 1%;
`;

export const PanelInputs = styled.input`
  text-align: center;
  cursor: pointer;
  border: none;
`;

export default PanelFragment;
