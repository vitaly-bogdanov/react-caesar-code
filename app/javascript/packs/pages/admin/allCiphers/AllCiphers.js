import React from 'react';
import Admin from '../../../layouts/admin/Admin';
import CiphersListContainer from '../../../component/ciphersList/CiphersListContainer';

const AllCiphers = props => (
  <Admin push={props.history.push}>
    <div className="container">
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <CiphersListContainer />
          </div>
        </div>
      </section>
    </div>
  </Admin>
)

export default AllCiphers;