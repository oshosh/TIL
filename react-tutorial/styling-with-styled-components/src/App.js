import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGrop = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;
const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
}
function App() {
  const [dialog, setDialog] = useState(false)
  const onClick = () => {
    setDialog(true)
  }
  const onConfirm = () => {
    console.log('확인')
    setDialog(false)
  }
  const onCancel = () => {
    console.log('취소')
    setDialog(false)
  }
  return (
    <ThemeProvider theme={{
      palette
    }}>
      <>
        <AppBlock>
          <ButtonGrop>
            <Button color='pink' size='large'>BUTTON</Button>
            <Button>BUTTON</Button>
            <Button color='gray' size='small'>BUTTON</Button>
          </ButtonGrop>

          <ButtonGrop>
            <Button outline color='pink' size='large'>BUTTON</Button>
            <Button outline>BUTTON</Button>
            <Button outline color='gray' size='small'>BUTTON</Button>
          </ButtonGrop>

          <ButtonGrop>
            <Button fullWidth color='pink' size='large'>BUTTON</Button>
            <Button fullWidth color='blue' size='large'>BUTTON</Button>
            <Button fullWidth color='gray' size='large'>BUTTON</Button>
          </ButtonGrop>

          <ButtonGrop>
            <Button onClick={onClick} fullWidth color='pink' size='large'>삭제</Button>
          </ButtonGrop>
        </AppBlock>

        <Dialog
          title="정말로 삭제하시겠습니까?"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
          confirmText="삭제"
          cancelText="취소"
        >
          데이터를 정말로 삭제하시겠습니까 ?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
