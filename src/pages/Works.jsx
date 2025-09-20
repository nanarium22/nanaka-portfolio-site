// src/pages/Works.jsx

import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Site',
    image: 'https://via.placeholder.com/600x400?text=Project+A', // 仮の画像URL
    description: 'ReactとReduxを使用した大規模なECサイト。高いパフォーマンスと使いやすい決済フローを実現。',
  },
  {
    id: 2,
    title: 'Task Management App',
    image: 'https://via.placeholder.com/600x400?text=Project+B',
    description: 'TypeScriptとTailwind CSSで構築されたタスク管理ツール。リアルタイム同期機能を搭載。',
  },
  {
    id: 3,
    title: 'Blog System',
    image: 'https://via.placeholder.com/600x400?text=Project+C',
    description: 'Next.jsとMarkdownで作成した静的ブログ。SEO最適化と高速なページ表示が特徴。',
  },
];

const Works = () => {
  const [activeProjectId, setActiveProjectId] = useState(null);

  const toggleDescription = (id) => {
    // 既に開いている場合は閉じる、そうでなければ開く
    setActiveProjectId(activeProjectId === id ? null : id);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-2">過去制作品</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            onClick={() => toggleDescription(project.id)}
          >
            {/* キービジュアル */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 transform hover:scale-105"
            />

            {/* 説明オーバーレイ */}
            <div
              className={`absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-500
                ${activeProjectId === project.id ? 'bg-black bg-opacity-70 opacity-100' : 'opacity-0 hover:bg-black hover:bg-opacity-30'}`
              }
            >
              {activeProjectId === project.id && (
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;