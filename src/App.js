import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [kq, setKq] = useState();

  function valueA(e) {
    setA(e.target.value)
  }

  function valueB(e) {
    setB(e.target.value)
  }


  function tinhTong() {
    if (!a || !b) {
      alert('Vui lòng nhập a và b')
      return;
    }
    const total = parseInt(a) + parseInt(b)
    setKq(total)
  }

  function xoa() {
    setA("")
    setB("")
  }

  return (
    <div className="App">
      <div id="square">
        <div className="left">
          {/* <label for="a">A</label>
          <input type="text" name="a" value={a} onChange={valueA}></input>

          <label>B</label>
          <input type="text" name="b" value={b} onChange={valueB}></input>

          <label>KQ</label>
          <input type="text" name="kq" value={kq} disabled ></input> */}
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">A</InputGroup.Text>
            <Form.Control
              value={a} onChange={valueA}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">B</InputGroup.Text>
            <Form.Control
              value={b} onChange={valueB}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">KQ</InputGroup.Text>
            <Form.Control
              value={kq} disabled
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

        </div>
        <div className="d-grid gap-2">
          <Button variant="primary" onClick={tinhTong}>Tính</Button>
        </div>
          <Button variant="danger" onClick={xoa}>Xóa</Button>
      </div>
    </div>
  );
}

export default App;
