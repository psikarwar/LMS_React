import React from 'react';
import ChapterInfo from './ChapterInfo/ChapterInfo';

const chapters = [
  { id: 1, chapter: '1', title: 'The Solid State', type: 'PDF', date: '15 May 2020 9:00 am', status: 'Publish', price: 'Free' },
  { id: 2, chapter: '2', title: 'Solutions', type: 'PDF', date: '15 May 2020 9:00 am', status: 'Publish', price: '$50.00' },
  { id: 3, chapter: '3', title: 'Electrochemistry', type: 'PPT', date: '15 May 2020 9:00 am', status: 'Draft', price: '$50.00' },
  { id: 4, chapter: '4', title: 'Chemical Kinetics', type: 'PPT+Video', date: '15 May 2020 9:00 am', status: 'Publish', price: '$50.00' },
  { id: 5, chapter: '5', title: 'Surface Chemistry', type: 'PDF', date: '15 May 2020 9:00 am', status: 'Publish', price: '$50.00' },
  { id: 6, chapter: '6', title: 'General Principles and Processes of Isolation of Elements', type: 'Video', date: '15 May 2020 9:00 am', status: 'Publish', price: '$50.00' },
  { id: 7, chapter: '7', title: 'The p-Block Elements', type: 'PPT', date: '15 May 2020 9:00 am', status: 'Draft', price: '$50.00' },
  { id: 8, chapter: '8', title: 'The d & f Block Elements', type: 'PDF', date: '15 May 2020 9:00 am', status: 'Publish', price: '$50.00' },
  { id: 9, chapter: '9', title: 'Coordination Compounds', type: 'Video', date: '15 May 2020 9:00 am', status: 'Publish', price: '$50.00' },
  { id: 10, chapter: '10', title: 'Haloalkanes and Haloarenes', type: 'PDF', date: '15 May 2020 9:00 am', status: 'Draft', price: '$50.00' },
];

const Chapter: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Chapter Details</h1>
      <ChapterInfo data={chapters} />
    </div>
  );
};

export default Chapter;
