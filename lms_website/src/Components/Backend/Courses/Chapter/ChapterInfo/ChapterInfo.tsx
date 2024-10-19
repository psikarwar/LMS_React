import React from 'react';
import { Link } from 'react-router-dom';

interface ChapterInfoProps {
  data: {
    id: number;
    chapter: string;
    title: string;
    type: string;
    date: string;
    status: string;
    price: string;
  }[];
}

const ChapterInfo: React.FC<ChapterInfoProps> = ({ data }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Chapter</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((chapter) => (
            <tr key={chapter.id} className="hover:bg-gray-50">
              <td className="px-4 py-2">{chapter.chapter}</td>
              <td className="px-4 py-2">
                <Link
                  to={`/chapterdetail/${chapter.title.toLowerCase().replace(/\s+/g, '-')}`} // Create a simple path
                  className="text-blue-600 hover:underline"
                >
                  {chapter.title}
                </Link>
              </td>
              <td className="px-4 py-2">{chapter.type}</td>
              <td className="px-4 py-2">{chapter.date}</td>
              <td className="px-4 py-2">{chapter.status}</td>
              <td className="px-4 py-2">{chapter.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChapterInfo;
