import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
 const [a , setA] = useState()
 const [b , setB] = useState()
 const [kq , setKq] = useState()

function tinhTong(){
  if(!a || !b){
    alert("Vui lòng nhập a và b")
    return null;
  }
  let total = parseInt(a) + parseInt(b)
  setKq(total)
}

function tinhTru(){
  if(!a || !b){
    alert("Vui lòng nhập a và b")
    return null;
  }
  let total = parseInt(a) - parseInt(b)
  setKq(total)
}

function xoa(){
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
              value={a} onChange={(e) => setA(e.target.value)}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">B</InputGroup.Text>
            <Form.Control
              value={b} onChange={(e) => setB(e.target.value)}
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
          <Button variant="primary" onClick={tinhTong}>+</Button>
          <Button variant="primary" onClick={tinhTru}>-</Button>
        </div>
          <Button variant="danger" onClick={xoa}>Xóa</Button>
      </div>
    </div>
  );
}

export default App;
