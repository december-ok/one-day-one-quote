import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [content, setContent] = useState({
    index: 0,
    author: '',
    text: '',
    videoUrl: ''
  })

  useEffect(()=>{
    setTimeout(()=>{setLoaded(true)},1200)

    axios.get('https://kqfptz21zb.execute-api.ap-northeast-2.amazonaws.com/test')
    .then(
      (response)=>{
        setContent(response.data)
      }
    )
  },[])

  if(loaded){
    return(
      <>
        <video src={content.videoUrl} autoPlay muted loop />
        <div className="App" onClick={window.location.reload}>
            <div className="content">
              <h2 className="text">
                {content.text}
              </h2>
              <h3 className="author">
                - {content.author}
              </h3>
            </div>
        </div>
      </>
    )
  }

  return (
    <div className="App">
      <h1 className="loading">
        Loading...
      </h1>
    </div>
  );
}

export default App;
