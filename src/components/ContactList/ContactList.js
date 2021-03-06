import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactOperations, contactSelectors } from '../../redux/phonebook';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

class ContactList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    handler: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.showContacts()
  }
  render() {
    const { items, onDelete } = this.props
    return (
      <>
        <ul className={styles.contact_list}>
          {items.map(item => (<li className={styles.contact_list_item} key={item.id}><span className={styles.contact_name}>{item.name}: </span><span className={styles.contact_number}>{item.number}</span>
            <button className={styles.btn_delete} title='delete'
              onClick={() => onDelete(item.id)}
            >x</button>
          </li>))}
        </ul>
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  items: contactSelectors.getFilteredContacts(state)
})

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactOperations.deleteContact(id)),
  showContacts: () => dispatch(contactOperations.fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
