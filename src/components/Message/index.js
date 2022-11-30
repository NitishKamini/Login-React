// Write your code here

import {Component} from 'react'

import './index.css'

class Message extends Component {
  render() {
    const {isLogged} = this.props
    return (
      <h1 className="login-heading">
        {isLogged ? 'Welcome User' : 'Please Login'}
      </h1>
    )
  }
}

export default Message
