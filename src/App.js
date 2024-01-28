import './App.css';
import {useState} from 'react';
 
function App() {


  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      <button onClick={()=>{
        글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬독학']);
      }}>글수정</button>
      
      <div className="list">
          <h4>{ 글제목[0] }<span onClick={()=>{좋아요변경(좋아요+1)}}>👍 </span>{좋아요}</h4>
          <p>9월 20일 발행</p>
      </div> 
      <div className="list">
          <h4>{ 글제목[1] }</h4>
          <p>9월 20일 발행</p>
      </div> 
      <div className="list">
          <h4>{ 글제목[2] }</h4>
          <p>9월 20일 발행</p>
      </div> 
    </div>
  );
}

export default App;
