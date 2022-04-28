import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import './App.css';
import News from './component/News/News';

function App() {

  const [news, setNews] = useState([])
    
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-03-28&sortBy=publishedAt&apiKey=c20da7be078d408dac8fdf62267c3861')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  }, [])

  return (
    <div className="App">
        {
          news.length === 0 ? 
          <Spinner animation="border" />
          : 
          <Row xs={1} md={2} className="g-4">
            {
              news.map(nws => <News
                news={nws}
              ></News>)
            }
          </Row>
        }
    </div>
  );
}

export default App;
