import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
  const [a, setA] = useState()
  const [b, setB] = useState()
  const [kq, setKq] = useState()

  function tinhToan(dau) {
    if (!a || !b) {
      alert("Vui lòng nhập a và b")
      return null;
    }
    let total
    if(dau ==="-"){
      total = parseFloat(a) - parseFloat(b)
    } else if(dau === "+") {
      total = parseFloat(a) + parseFloat(b)
    } else if(dau === "*") {
      total = parseFloat(a) * parseFloat(b)
    } else if(dau === "/"){
      if (parseFloat(b) === 0) {
        alert("không chia được")
        return;
      }
      total = parseFloat(a) / parseFloat(b)
    }
    
    if (!Number.isInteger(total)) {
      total = total.toFixed(2)
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

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">A</InputGroup.Text>
            <Form.Control
              type='number'
              value={a} onChange={(e) => setA(e.target.value)}
            />
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">B</InputGroup.Text>
            <Form.Control
              type='number'
              value={b} onChange={(e) => setB(e.target.value)}
            />
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">KQ</InputGroup.Text>
            <Form.Control
              type='number'
              value={kq} disabled
            />
          </InputGroup>

        </div>
        <div className="d-grid gap-1">
          <Button variant="primary" onClick={()=>tinhToan("+")}>+</Button>
          <Button variant="primary" onClick={()=>tinhToan("-")}>-</Button>
          <Button variant="primary" onClick={()=>tinhToan("*")}>*</Button>
          <Button variant="primary" onClick={()=>tinhToan("/")}>/</Button>
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
