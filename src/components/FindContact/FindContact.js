import React from 'react';
import { connect } from 'react-redux';
import { contactActions, contactSelectors } from '../../redux/phonebook';
import PropTypes from 'prop-types';
import styles from './FindContact.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    <input className={styles.find_contact} type='text' placeholder='Find contact by name' value={value} onChange={onChange}></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  value: contactSelectors.getFilter(state),
})

const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(contactActions.changeFilter(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);