import React from 'react';

const WhoForSection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Who's It For?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* You */}
          <div className="p-4 bg-white rounded shadow-lg">
            <div className="text-2xl text-blue-500 mb-2">🔓 You</div>
            <p className="text-gray-700">
              Unlock the fascinating world of Crypto and Blockchain, even if you're a beginner.
            </p>
          </div>

          {/* Friends and Family */}
          <div className="p-4 bg-white rounded shadow-lg">
            <div className="text-2xl text-blue-500 mb-2">👨‍👩‍👧‍👦 Friends and Family</div>
            <p className="text-gray-700">
              Perfect for those eager to dive into crypto and blockchain, dedicating just 5 minutes a day.
            </p>
          </div>

          {/* Recipients */}
          <div className="p-4 bg-white rounded shadow-lg">
            <div className="text-2xl text-blue-500 mb-2">📚 Recipients</div>
            <p className="text-gray-700">
              They'll learn, explore, and engage in crypto, regardless of their prior knowledge.
            </p>
          </div>

          {/* After 25 Days */}
          <div className="p-4 bg-white rounded shadow-lg">
            <div className="text-2xl text-blue-500 mb-2">🚀 After 25 Days</div>
            <p className="text-gray-700">
              They'll possess more blockchain knowledge than 95% of the population.
            </p>
          </div>

    {/* More Than a Gift */}
    <div className="p-4 my-7 bg-white rounded shadow-lg">
            <div className="text-2xl text-blue-500 mb-2">🎁 More Than a Gift</div>
            <p className="text-gray-700">
              It's the perfect blend of education and entertainment in one package.
            </p>
          </div>
         
        </div>
     
      </div>
    </div>
  );
};

export default WhoForSection;
