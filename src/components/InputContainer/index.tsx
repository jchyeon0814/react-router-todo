import { useState } from 'react';
import { DataView } from 'pages/DataView';
import { TodoInput } from 'pages/TodoInput';
import { ShowInputButton } from 'components/ShowInputButton';

export const InputContainer = () => {
  const [showTodoInput, setShowTodoInput] = useState(false);

  const onClose = () => {
    setShowTodoInput(false);
  };

  return (
    <>
      {showTodoInput && <TodoInput />}
      <ShowInputButton show={showTodoInput} onClick={() => setShowTodoInput(!showTodoInput)} />
    </>
  );
};
