import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { DataView } from 'components/DataView';
import { InputContainer } from 'components/InputContainer';
import { TodoListContextProvider } from 'contexts/TodoList'
import { Routes, Route } from 'react-router-dom'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const NotFound = styled.div`
  text-align: center;
`

function App() {
  
  return (
    <Container>
      <TodoListContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <DataView />
                <InputContainer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <NotFound>
                404
                <br />
                NOT FOUND
              </NotFound>
            }
          />
        </Routes>
        
      </TodoListContextProvider>
    </Container>
  );
}

export default App;
