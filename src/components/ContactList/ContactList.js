import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import { contactOperations, contactSelectors } from '../../redux';

class ContactList extends Component {
  componentDidMount() {
    this.props.showContacts()
  }
  render() {
    return (
      <>
        <ul className={styles.contact_list}>
          {this.props.renderItems.map(item => (<li className={styles.contact_list_item} key={item.id}><span className={styles.contact_name}>{item.name}: </span><span className={styles.contact_number}>{item.number}</span>
            <button className={styles.btn_delete} title='delete'
              onClick={() => this.props.handler(item.id)}
            >x</button>
          </li>))}
        </ul>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  renderItems: contactSelectors.getFilteredContacts(state)
})

const mapDispatchToProps = dispatch => ({
  handler: id => dispatch(contactOperations.deleteContact(id)),
  showContacts: () => dispatch(contactOperations.fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);


