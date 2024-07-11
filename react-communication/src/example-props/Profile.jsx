import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { user, onUserUpdate } = this.props;
    return (
      <div className="Profile">
        <h2>Profile</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onUserUpdate({ name: event.target.name.value });
          }}
        >
          <p>
            Name :
            <input name="name" defaultValue={user.name} />
          </p>
          <p>
            <button>Change</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Profile;
