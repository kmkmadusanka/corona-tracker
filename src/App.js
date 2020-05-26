import React, { Component } from 'react';

//import css
import styles from './App.module.css';

// import components
import { Cards, Chart, CountryPicker } from './components';

//import api
import { fetchData } from './api';

//import images
import { logoImage } from './images';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      country: '',
    };
  }

  async componentDidMount() {
    await this.updateStatusWithData();
  }

  handleCountyChangeEvent = async (event) => {
    await this.updateStatusWithData(event.target.value);
  };

  updateStatusWithData = async (country) => {
    if (!country) {
      this.setState({
        data: await fetchData(),
      });
    } else {
      this.setState({
        data: await fetchData(country),
        country,
      });
    }
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={logoImage} alt="COVID-19" className={styles.logo} />
        <Cards data={data} />
        <CountryPicker countryHandler={this.handleCountyChangeEvent} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
