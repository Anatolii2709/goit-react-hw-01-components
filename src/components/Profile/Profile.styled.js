import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 10px;
  width: 350px;
  border: 2px solid gray;
  margin: 10px auto;
`;
export const ListsStats = styled.ul`
  display: flex;
  justify-content: space-around;
  max-width: 300px;
  margin: 5px auto;
`;

export const List = styled.li`
  display: flex;
  gap: 20px;
  padding: 10px;
  flex-direction: column;
  background-color: #f1f1f1;
  width: 100px;
  border: 1px solid #646363;
`;

export const Name = styled.p`
  font-weight: 700;
  line-height: 1.5;
`;
