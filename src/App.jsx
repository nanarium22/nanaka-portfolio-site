// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from './pages/Top';
import Works from './pages/Works';
import QnA from './pages/QnA';
import Game from './pages/Game';
import Header from './components/Layout/Header';

function App() {
  return (
    <Router>
      <Header /> {/* 全ページ共通のヘッダー */}
      <main className="pt-20 min-h-screen bg-gray-50"> {/* ヘッダーの高さ分、コンテンツを下げる */}
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/works" element={<Works />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game/clear" element={<GameClear />} />
        </Routes>
      </main>
      {/* <Footer /> 必要であれば追加 */}
    </Router>
  );
}

export default App;