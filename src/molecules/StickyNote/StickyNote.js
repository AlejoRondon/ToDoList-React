import React from "react";

class StickyNote extends React.Component {
  render() {
    return (
      <div class="card text-center">
        <div class="card-header"> creator@email.com</div>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Brief description of the card.</p>
          <a href="#" class="btn btn-primary">
            Do something
          </a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    );
  }
}

export default StickyNote;
