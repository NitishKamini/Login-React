// Write your code here

import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLogged: false}

  onChangeButton = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state
    return (
      <div className="app-container">
        <div className="login-card">
          <Message isLogged={isLogged} />
          <button
            type="button"
            className="button"
            onClick={this.onChangeButton}
          >
            {isLogged ? <Logout /> : <Login />}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
