import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactSelectors } from '../../redux/phonebook';

import Form from '../../components/Form';
import Filter from '../../components/FindContact';
import ContactList from '../../components/ContactList';
import Spinner from '../../components/Spinner';

import s from './PhoneBook.module.css';

class Phonebook extends Component {
  render() {
    return (
      <div className={s.phonebook}>
        {this.props.isloading ? <Spinner /> : <h1 className={s.phonebook_header}>Phonebook</h1>}
        <h2 className={s.section_header}>Create a new contact</h2>
        <Form />

        <h2 className={s.section_header}>Contacts</h2>
        <Filter />
        <ContactList />
      </div >
    )
  }
}

const mapStateToProps = state => ({
  isloading: contactSelectors.getLoading(state)
})



export default connect(mapStateToProps, null)(Phonebook);
