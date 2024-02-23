import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
  const [a, setA] = useState()
  const [b, setB] = useState()
  const [kq, setKq] = useState()

  function tinhTong() {
    if (!a || !b) {
      alert("Vui lòng nhập a và b")
      return null;
    }
    let total = parseFloat(a) + parseFloat(b)
    if(!Number.isInteger(total)){
      total = total.toFixed(1)
      setKq(total)
    } else {
      setKq(total)
    }
  }

  function tinhTru() {
    if (!a || !b) {
      alert("Vui lòng nhập a và b")
      return null;
    }
    let total = parseFloat(a) - parseFloat(b)
    if(!Number.isInteger(total)){
      total = total.toFixed(1)
      setKq(total)
    } else {
      setKq(total)
    }
  }

  function tinhNhan() {
    if (!a || !b) {
      alert("Vui lòng nhập a và b")
      return null;
    }
    let total = parseFloat(a) * parseFloat(b)
    if(!Number.isInteger(total)){
      total = total.toFixed(1)
      setKq(total)
    } else {
      setKq(total)
    }
  }

  function tinhChia() {
    if (!a || !b) {
      alert("Vui lòng nhập a và b")
      return null;
    }
    if (parseFloat(b) === 0) {
      alert("không chia được")
      return;
    }
    let total = parseFloat(a) / parseFloat(b)
    if(!Number.isInteger(total)){
      total = total.toFixed(1)
      setKq(total)
    } else {
      setKq(total)
    }
  }
  function xoa() {
    setA("")
    setB("")
    setKq("")
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
              type='number'
              value={a} onChange={(e) => setA(e.target.value)}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">B</InputGroup.Text>
            <Form.Control
              type='number'
              value={b} onChange={(e) => setB(e.target.value)}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">KQ</InputGroup.Text>
            <Form.Control
              type='number'
              value={kq} disabled
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

        </div>
        <div className="d-grid gap-1">
          <Button variant="primary" onClick={tinhTong}>+</Button>
          <Button variant="primary" onClick={tinhTru}>-</Button>
          <Button variant="primary" onClick={tinhNhan}>*</Button>
          <Button variant="primary" onClick={tinhChia}>/</Button>
        </div>
        <Button variant="danger" onClick={xoa}>Xóa</Button>
      </div>
    </div>
  );
}
// //1 0
// 2 2
// 1.2 3

export default App;
