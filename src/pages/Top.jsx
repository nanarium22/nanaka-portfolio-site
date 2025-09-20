// src/pages/Top.jsx

import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'; // アイコンライブラリ

const Top = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'Tailwind CSS', icon: FaCss3Alt, color: 'text-cyan-500' },
    // 他のスキルを追加
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-12">
        {/* アイコン（丸型） */}
        <div className="w-32 h-32 mx-auto mb-4 bg-indigo-200 rounded-full flex items-center justify-center border-4 border-indigo-400 shadow-lg">
          <span className="text-6xl text-indigo-700">👤</span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800">井口奈々花</h1>
        <p className="text-xl text-gray-500 mt-1">Web Developer | Frontend Enthusiast</p>
      </div>

      {/* 自己紹介 */}
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl mb-12">
        <h2 className="text-3xl font-bold text-gray-700 border-b-2 border-indigo-500 pb-2 mb-4">自己紹介</h2>
        <p className="text-gray-600 leading-relaxed">
          お茶の水女子大学理学部数学科3年**パフォーマンスの高い**ウェブサイト開発を目標に、日々新しい技術を学んでいます。
          趣味はゲーム制作と美味しいコーヒーを探すことです。
        </p>
      </section>

      {/* スキル紹介 */}
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-gray-700 border-b-2 border-indigo-500 pb-2 mb-6">スキル</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
            >
              <skill.icon className={`text-4xl mb-2 ${skill.color}`} />
              <p className="text-lg font-semibold text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Top;