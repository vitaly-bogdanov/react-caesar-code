import React from 'react';
import Client from '../../../layouts/client/Client';


const Home = props => {
  
  return (
    <Client>
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Home</h1>
              <h2 className="subtitle">Home page</h2>
            </div>
          </div>
        </section>
      </div>
    </Client>
  );
}

export default Home;