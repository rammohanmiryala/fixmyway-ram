import React from 'react';
import { Icon, Step, Grid, Card } from 'semantic-ui-react';
import "../../styles/thoughtlists.css";
import { Link } from 'react-router-dom';



const ThoughtLists = ({ thoughts,
  title,
  showTitle = true,
  showUsername = true, }) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (

    <>
      <div>
        <div >
          <h3>{title}</h3>
          <div className="content boxcard">
            {thoughts &&
              thoughts.map((thought) => (
                <div className="borderbox">
                  <Link to={`/thoughts/${thought._id}`} style={{ textDecoration: 'none' }} >
                  <div key={thought._id} className="borderbox2">
                    <a className="header">{thought.thoughtAuthor} </a>
                    <div className="meta">
                      <span className="date">{thought.createdAt}</span>
                    </div>
                    <div className="description">
                      <p>{thought.thoughtText}</p>
                    </div>
                  </div>
                  </Link>
                </div>
              ))}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ThoughtLists;


