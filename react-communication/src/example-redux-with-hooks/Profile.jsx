import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Profile() {
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();
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

export default Profile;
