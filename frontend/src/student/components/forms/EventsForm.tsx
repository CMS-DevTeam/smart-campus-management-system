const EventForm: React.FC = () => {
    return (
      <div className="p-6 flex flex-col items-center">
        <div className="border rounded-lg p-6 w-2/3 bg-gray-100">
          <h2 className="text-xl font-semibold">Event</h2>
          <div className="flex items-center space-x-4 mt-4">
            <div className="bg-gray-300 w-24 h-24 flex items-center justify-center">📷</div>
            <div>
              <h3 className="text-lg font-bold">Title</h3>
              <p>Date</p>
              <p>Venue</p>
              <p>Time</p>
              <p className="mt-2">Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">Close</button>
        </div>
      </div>
    );
  };
  export default EventForm;