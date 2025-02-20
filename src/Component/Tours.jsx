import Card from './Card';

function Tours({ tours, removeTour, flaggedTours, setFlaggedTours }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Escape the Ordinary, Embrace the Extraordinary!</h2>
      </div>
      <div className="cards">
        {tours.map((tour) => (
          <Card 
            key={tour.id} 
            {...tour} 
            removeTour={removeTour} 
            flaggedTours={flaggedTours} 
            setFlaggedTours={setFlaggedTours}
          />
        ))}
      </div>
    </div>
  );
}

export default Tours;
