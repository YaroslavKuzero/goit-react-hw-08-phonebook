import React from 'react';
import { connect } from 'react-redux';
import { contactActions, contactSelectors } from '../../redux/';
import styles from './FindContact.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    <input className={styles.find_contact} type='text' placeholder='Find contact by name' value={value} onChange={onChange}></input>
  </label>
);

const mapStateToProps = (state) => ({
  value: contactSelectors.getFilter(state),
})

const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(contactActions.changeFilter(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);