// src/pages/QnA.jsx

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // アイコンライブラリ

const qnaData = [
  {
    id: 1,
    question: '得意なプログラミング言語は何ですか？',
    answer: '主にJavaScriptとTypeScriptです。フレームワークではReactを最も得意としています。',
  },
  {
    id: 2,
    question: '制作期間はどれくらいかかりますか？',
    answer: 'プロジェクトの規模によりますが、シンプルなランディングページであれば1週間〜、大規模なWebアプリケーションであれば1ヶ月以上を目安としています。',
  },
  {
    id: 3,
    question: 'デザインもできますか？',
    answer: 'はい、Tailwind CSSを用いたモダンでレスポンシブなデザインを得意としています。Figmaなどのデザインツールも使用可能です。',
  },
];

const QnA = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAnswer = (id) => {
    // 既に開いている場合は閉じる、そうでなければ開く
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-2">よくある質問 (Q&A)</h1>
      <div className="space-y-4">
        {qnaData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
          >
            <div
              className="flex justify-between items-center p-5 cursor-pointer bg-indigo-50 hover:bg-indigo-100 transition duration-300"
              onClick={() => toggleAnswer(item.id)}
            >
              <h3 className="text-lg font-semibold text-gray-700">{item.question}</h3>
              {openId === item.id ? (
                <ChevronUpIcon className="w-5 h-5 text-indigo-600" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              )}
            </div>

            {/* アコーディオンコンテンツ */}
            <div
              className={`transition-max-height duration-500 ease-in-out ${
                openId === item.id ? 'max-h-96 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 p-0'
              }`}
            >
              <p className="text-gray-600 border-t pt-4">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QnA;