import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import fakeData from "./list";

// react 엑셀 연구
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => setCheck(e.target.checked);

  return (
    <div className="App">
      <div>
        <CheckBox onChange={onChange} checked={check}>
          다음 약관에 모두 동의
        </CheckBox>
      </div>

      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>

      <div className="buttons">
        <Button color="gray" size="large">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button color="gray" size="small">
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button color="pink" size="large">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button color="pink" size="small">
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button size="large" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button color="pink" size="small" outline>
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button
          size="large"
          color="gray"
          fullWidth
          onClick={() => console.log("클릭")}
        >
          BUTTON
        </Button>
        <Button
          color="pink"
          size="large"
          fullWidth
          onMouseMove={() => console.log("마우스 무브")}
        >
          BUTTON
        </Button>
      </div>

      <div>
        <ReactHTMLTableToExcel
          id='test-table-xls-button'
          className='download-table-xls-button'
          table='table-to-xls'
          filename='tablexls'
          sheet='tablexls'
          buttonText='엑셀 다운로드'
        />
        <div style={{ display: 'block' }}>
          <table id='table-to-xls'>
            <thead>
              <tr>
                {fakeData.columns
                  ?.filter(({ header }) => header !== '지급 예약일')
                  .map(({ header }, idx) => (
                    <th id={idx}>{header}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {fakeData.data?.map((list, idx) => (
                <tr key={idx}>
                  <td>{list.id}</td>
                  <td>{list.reason}</td>
                  <td>{ }</td>
                  <td>{list.statusCode}</td>
                  <td>{list.expectedDate}</td>
                  <td>{list.pointPrice}</td>
                  <td>{list.pointCount}</td>
                  <td>{list.expiryDay}</td>
                  <td>{list.createdAt}</td>
                  <td>{list.workerName}</td>
                  <td>{ }</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
