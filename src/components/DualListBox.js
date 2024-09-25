import React, { useState } from 'react';
import styled from 'styled-components';
import { Title } from './StyledComponents';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ListContainer = styled.div`
  margin: 0 20px;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  border: 1px solid #333;
  height: 300px;
  overflow-y: auto;
`;

const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
  margin: 5px 0;

  &:hover {
    background-color: #ccc;
  }
`;

const DualListBox = () => {
  const [leftList, setLeftList] = useState(['Item 1', 'Item 2', 'Item 3','Item A', 'Item B', 'Item C']);
  const [rightList, setRightList] = useState([]);

  const handleDoubleClick = (index, listType) => {
    if (listType === 'left') {
      const item = leftList[index];
      setLeftList(prev => prev.filter((_, i) => i !== index));
      setRightList(prev => [...prev, item]);
    } else {
      const item = rightList[index];
      setRightList(prev => prev.filter((_, i) => i !== index));
      setLeftList(prev => [...prev, item]);
    }
  };

  return (
    <Container>
      <ListContainer>
        <h3>Super User</h3>
        <List>
          {leftList.map((item, index) => (
            <ListItem
              key={index}
              onDoubleClick={() => handleDoubleClick(index, 'left')}
            >
              {item}
            </ListItem>
          ))}
        </List>
      </ListContainer>
      <ListContainer>
        <h3>User</h3>
        <List>
          {rightList.map((item, index) => (
            <ListItem
              key={index}
              onDoubleClick={() => handleDoubleClick(index, 'right')}
            >
              {item}
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </Container>
  );
};

export default DualListBox;