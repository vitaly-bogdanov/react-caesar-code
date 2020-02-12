import React from 'react';
import { Link } from 'react-router-dom';
import pages from '../config/pages';

const PageNotFound = props => {
  
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Page Not Found</h1>
            <h2 className="subtitle">Страницы не существует</h2>
            <Link to={pages.home.path}>{pages.home.name}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PageNotFound;