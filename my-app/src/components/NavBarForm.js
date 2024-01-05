import css from './css/NavBarForm.module.css'
import React, { Component } from 'react'

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn : false,
      }
    }

    handleClick = () =>{
        this.setState((prevProps,prevState) => {
            return{
                isLoggedIn : prevState.isLoggedIn === true ? false : true,
            } 
        })
    }

  render() {
    return (
        <div class={css.NavBar}>
        <h1>
            My Gallery
        </h1>
        {
            this.state.isLoggedIn ? (
                <form>
                    <label>Username</label>
                    <input type="text"></input>
                    <label>Password</label>
                    <input type='password'></input>
                    <button onClick={this.handleClick}>Submit</button>
                </form>
            ) : 
            (
                <button onClick={this.handleClick}>
                    Login
                </button>
            )
        }
        

        </div>
    )
  }
}

export default NavBarForm