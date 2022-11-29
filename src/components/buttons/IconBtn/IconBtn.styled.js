import styled from 'styled-components';

const DeleteIconBtn = styled.button`
  display: inline-flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  margin-left: 10px;
  padding: 0;

  color: #2a2a2a;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    color: red;
  }

  & > svg {
    fill: currentColor;
  }
`;

export { DeleteIconBtn };
