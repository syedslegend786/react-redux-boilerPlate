import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { set_data, facebook_login } from '../../store/action';
class Home extends React.Component {
  render() {
    console.log("renderProops===>", this.props)
    let user = {
      name: "wali",
      email: "wali@gmail.com"
    }
    return (
      <div>
        <h1>Home</h1>
        <button onClick={() => this.props.set_data(user)}>set data</button>
        <button onClick={() => console.log(this.props)}>after updating</button>
        <br />
        <button onClick={() => this.props.facebook_login()}>facebook Login</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
})
const mapDispatchToProps = (dispatch) => ({
  set_data: (data) => dispatch(set_data(data)),
  facebook_login: () => dispatch(facebook_login()),


})
export default connect(mapStateToProps, mapDispatchToProps)(Home);