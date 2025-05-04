import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Ensure the events.json file is in the public folder or update the path accordingly
    fetch('/events.json')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error loading events:', error));
  }, []);

  return (
    <div>
      {/* Slider Section */}
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

      {/* Upcoming Events Section */}
      <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Upcoming Events</h2>
      
      {/* Grid layout for events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
          <div key={event.id} className="card card-compact bg-white shadow-lg hover:shadow-2xl rounded-xl transition duration-300 ease-in-out">
            <figure>
              <img
                src={event.thumbnail}
                alt={event.name}
                className="h-56 w-full object-cover rounded-t-xl"
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-semibold text-gray-800 hover:text-primary transition duration-300">{event.name}</h2>
              <p className="text-lg mt-2 text-gray-600"><strong>Category:</strong> {event.category}</p>
              <p className="text-lg mt-1 text-gray-600"><strong>Date:</strong> {event.date}</p>
              <p className="text-lg mt-1 text-gray-600"><strong>Location:</strong> {event.location}</p>
              <p className="text-lg mt-1 text-gray-600"><strong>Entry Fee:</strong> {event.entryFee}</p>

              {/* Button to view more details */}
              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/event/${event.id}`}
                  className="btn btn-primary px-6 py-2 text-white bg-primary rounded-lg shadow-md hover:bg-secondary transition-all"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
