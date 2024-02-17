import React from 'react';

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
];

const MainContent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Main Content</h1>
      {data.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="block text-gray-700 text-sm font-bold mb-2">{item.name}</h2>
          <p className="text-gray-700 text-base">{item.email}</p>
        </div>
      ))}
    </div>
  );
}

export default MainContent;
