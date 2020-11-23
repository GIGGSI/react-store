import React, { useContext, useState } from "react";
import loginUser from '../strapi/loginUser';
import registerUser from '../strapi/registerUser';
import { UserContext } from '../context/user'

// strapi functions

//handle user
import { useHistory } from 'react-router-dom';


export default function Login() {
  const history = useHistory();

  //setup user context
  const { userLogin, alert, showAlert } = useContext(UserContext);


  //state values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState("default");
  const [isMember, setIsMember] = useState(true);

  let isEmpty = !email || !password || !username || alert.show;

  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    })
  }

  const handleSubmit = async e => {
    showAlert({
      msf: 'accessing user data.please wait...'
    })


    //alert
    e.preventDefault();
    let response;

    if (isMember) {
      response = await loginUser({ email, password })
    } else {
      response = await registerUser({ email, password, username })
    }

    if (response) {

      const { jwt: token, user: { username } } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
    
      showAlert({
        msg: `you are logged in: ${username}`
      })
      history.push('/products')

    } else {
      //show alert
      showAlert({
        msg: 'there was an error.please try again',
        type: 'danger'
      })

    }
  }

  return <section className="form section">
    <h2 className="section-title">
      {isMember ? 'sign in' : 'register'}
    </h2>
    <form className="login-form">
      {/* single input*/}
      <div className="form-control">
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)} />
      </div>
      {/* end single input*/}
      {/* single input*/}
      <div className="form-control">
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
      </div>
      {/* end single input*/}
      {/* single input*/}
      {!isMember && (
        <div className="form-control">
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)} />
        </div>
      )}

      {/* end single input*/}

      {/* empty form text */}
      {isEmpty && <p className="form-empty">
        please fill out all from fields
      </p>}

      {/* submit btn*/}
      {!isEmpty && <button type="submit"
        className="btn btn-block btn-primary"
        onClick={handleSubmit}>
        submit
      </button>}
      {/*register link*/}
      <p className="register-link">
        {isMember ? "need to register" : "already member"}
        <button type="button"
          onClick={toggleMember}
        > click me
        </button>
      </p>
    </form>

  </section>
}
