import React from 'react';


function Header(props) {
  return (
    <div>
        <h1>My Shopping List</h1>
        <h2>Total Items: {props.myLength}</h2>
    </div>
  );
}

export default Header;