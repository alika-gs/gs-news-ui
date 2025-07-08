'use client';

import { useEffect, useState } from 'react';

type NewsItem = {
  title: string;
  date: string;
  desc: string;
  link: string;
  media?: string;
};

export default function Home() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://gs-haber.onrender.com/') // ⬅️ BURAYI GÜNCELLE
      .then(res => res.json())
      .then(data => {
        setNews(data.news);
        setLoading(false);
      });
  }, []);

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Galatasaray Haber Paneli</h1>

      {loading && <p>Yükleniyor...</p>}

      <div className="space-y-4">
        {news.map((item, index) => (
          <div key={index} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-500 text-sm mb-2">{item.date}</p>
            <p className="text-sm text-gray-700 mb-2">{item.desc}</p>
            <a
              href={item.link}
              target="_blank"
              className="text-blue-600 hover:underline text-sm"
            >
              Haberi Oku
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
