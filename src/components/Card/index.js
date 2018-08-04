import React from "react";

const Card = props => (
  <div class="col-md-4">
    <div class="card">
      <img
        class="card-img-top"
        alt={"Bootstrap Thumbnail" + props.alt}
        src={props.src}
      />
      <div class="card-block">
        <h5 class="card-title">Charles Mandracchia</h5>
        <p class="card-text">
          {props.children}
        </p>
        <p>
          <a class="btn btn-primary" href={props.href ? props.href : '#'}>
            View profile
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Card;