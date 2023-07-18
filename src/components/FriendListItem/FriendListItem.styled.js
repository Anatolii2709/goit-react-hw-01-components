import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  gap: 10px;
  padding: 10px;
  flex-direction: row;
  background-color: #f1f1f1;
  min-width: 200px;
  border: 2px solid #c1c1c1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 15px;
`;

export const Status = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50px;
  align-self: center;
  background-color: ${props => (props.isOnline ? 'red' : '#49be25')};
`;
