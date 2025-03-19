const Assignments: React.FC = () => {
    return (
      <div className="p-6">
        <h2 className="text-lg font-semibold">Assignments</h2>
        <div className="mt-4 space-y-3">
          {["Description 1", "Description 2", "Description 3"].map((desc, index) => (
            <div key={index} className="flex items-center gap-2">
              <input type="text" value={desc} className="border rounded-lg flex-1 p-2" disabled />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Download</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Submit</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Assignments;