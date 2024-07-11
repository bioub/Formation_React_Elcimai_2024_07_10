import React from 'react';
import { connect } from 'react-redux';

function Profile({ name, dispatch }) {
  return (
    <div className="Profile">
      <h2>Profile</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({
            type: 'UPDATE_USER',
            payload: {
              name: event.target.name.value,
            },
          });
        }}
      >
        <p>
          Name :
          <input name="name" defaultValue={name} />
        </p>
        <p>
          <button>Change</button>
        </p>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

export default connect(mapStateToProps)(Profile);
