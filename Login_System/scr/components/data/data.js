import React from 'react';
import styles from './data.module.css'

class DataAtual extends React.Component {
  constructor() {
    super();
    this.state = {
      data: new Date().toLocaleDateString(),
    };
  }

  render() {
    return (
      <div>
        <p className={styles.datastyle}> {this.state.data}</p>
      </div>
    );
  }
}

export default DataAtual;