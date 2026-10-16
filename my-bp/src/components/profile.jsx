import React from 'react';

function Profile(){
    return(
        <div>
        <img src="https://placehold.co/120" alt="Profile photo"/>
            <h2 className="name">Your Name</h2>
            <label htmlFor="hobby">Favorite hobby</label>
            <input id="hobby" type="text" />
            <hr />
            <p className="school">Technology High School</p>
        </div>
    )
}

export default Profile;
