import React from 'react';
import { connect } from 'react-redux';
import CiphersList from './CiphersList';
import { destroyCreator } from '../../redux/actions/actionCreators';
import axiosCSRF from '../../config/axiosCSRF';

const CiphersListContainer = props => {

  const destroy = async id => {
    try {
      let response = await axiosCSRF.delete(`/destroy/${id}/${props.userId}`);
      if (response.status == 200) {
        props.destroyAction(id);
      }
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <CiphersList 
      ciphers={props.ciphers}
      destroy={destroy}
    />
  );
}

const mapStateToProps = state => ({
  ciphers: state.ciphers.ciphers,
  userId: state.authorization.user.id
});

const mapDispatchToProps = dispatch => ({
  destroyAction: id => dispatch(destroyCreator(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CiphersListContainer); 