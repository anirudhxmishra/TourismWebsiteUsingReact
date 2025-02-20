import { useState } from "react";
import { MdTour } from "react-icons/md";
import { toast } from "react-toastify";

function Card({ id, image, info, price, name, removeTour, flaggedTours, setFlaggedTours }) { 
    const [readmore, setReadmore] = useState(false);
    const description = info.slice(0, 200);

    function flagHandler() {
        if (flaggedTours.includes(id)) {
            setFlaggedTours((prev) => prev.filter((cid) => cid !== id));
            toast.warning(`${name} flag removed.`, { position: "top-right" ,autoClose: 3000  });
        } else {
            setFlaggedTours((prev) => [...prev, id]);
            toast.success(`${name} is Flagged!`, { position: "top-right",autoClose: 3000   });
        }
    }

    return (
        <div className="card">
            <img src={image} className="image" alt={name} />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                
                <div className="Flag">
                    <button 
                        className={`flag-btn ${flaggedTours.includes(id) ? "flagged" : ""}`} 
                        onClick={flagHandler}
                    >
                        <MdTour fontSize="1.75rem" />
                    </button>
                </div>

                <div className="description">
                    {readmore ? info : `${description}...`}
                    <span className="read-more" onClick={() => setReadmore(!readmore)}>
                        {readmore ? "Show Less" : "Read More"}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id, name)} >
                Not Interested
            </button>
        </div>
    );
}

export default Card;
