import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactSelectors } from '../../redux';
import Form from '../../components/Form';
import Filter from '../../components/FindContact';
import ContactList from '../../components/ContactList';
import Spinner from '../../components/Spinner';
import styles from './PhoneBook.module.css';




class Phonebook extends Component {
  render() {
    return (
      <div className={styles.phonebook}>
        {this.props.isloading ? <Spinner /> : <h1 className={styles.phonebook_header}>Phonebook</h1>}
        <h2 className={styles.section_header}>Create a new contact</h2>
        <Form />

        <h2 className={styles.section_header}>Contacts</h2>
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
