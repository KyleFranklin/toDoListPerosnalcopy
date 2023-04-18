import React from 'react';

function LoggedInName()
{
    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var username = ud.user;

    const doLogout = event => 
    {
      event.preventDefault();
      localStorage.removeItem("user_data")
      window.location.href = '/';
    };    

  return(
    <div id="loggedInDiv">
    <span id="userName">Logged In As {username}</span><br/>
    </div>
  );
};

export default LoggedInName;