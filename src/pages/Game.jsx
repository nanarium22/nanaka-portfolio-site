// src/pages/Game.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 共通のモーダルコンポーネント (src/components/Game/GameModal.jsx) を作成しておくと再利用性が高まりますが、ここではGame.jsx内に簡易的に実装します。

const CORRECT_ANSWER = 'React'; // 正しい解答
const CLEAR_PAGE_PATH = '/game/clear'; // クリア後の遷移先（App.jsxにルートを追加してください）

// 仮のクリアページ (src/pages/GameClear.jsx) を作成したと仮定

const Game = () => {
  const [answer, setAnswer] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answer.toLowerCase() === CORRECT_ANSWER.toLowerCase()) {
      // 正解の場合、クリアページへ遷移
      navigate(CLEAR_PAGE_PATH);
    } else {
      // 不正解の場合、モーダルを表示
      setShowModal(true);
    }
  };

  const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-2xl text-center transform transition-transform duration-300 scale-100">
          <p className="text-2xl font-bold text-red-600 mb-4">間違いです ❌</p>
          <p className="text-gray-700 mb-6">もう一度チャレンジしてみてください。</p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            閉じる
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-8 max-w-lg text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">❓ クイズに挑戦 ❓</h1>

      <div className="bg-white p-8 rounded-xl shadow-2xl">
        <p className="text-xl font-medium text-gray-700 mb-6">
          **問題**: フロントエンド開発で最も使用頻度の高いJavaScriptライブラリは何でしょう？ (英字で入力)
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 text-lg"
            placeholder="解答を入力"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-bold rounded-lg text-xl hover:bg-green-600 transition duration-300 shadow-md"
          >
            解答ボタン
          </button>
        </form>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Game;