import './App.css';
import {useState} from 'react';

function App() {

  let post = '매캐매캐~';
  let [글제목1, b] = useState('남자 코트 추천');
  let [글제목2, c] = useState('강남 우동맛집');
  let [글제목3, d] = useState('파이썬독학');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>먼지</h4>
      </div>
      <div className="list">
          <h4>{ 글제목1 }</h4>
          <p>9월 20일 발행</p>
      </div> 
      <div className="list">
          <h4>{ 글제목2 }</h4>
          <p>9월 20일 발행</p>
      </div> 
      <div className="list">
          <h4>{ 글제목3 }</h4>
          <p>9월 20일 발행</p>
      </div> 
    </div>
  );
}

export default App;
