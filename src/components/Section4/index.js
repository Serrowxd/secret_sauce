import React from "react";
import Card from "../Card";

export default () => {
  return (
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <Card
            src="https://www.layoutit.com/img/people-q-c-600-200-1.jpg"
            alt="First"
            title="Charles Mandracchia"
          >
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            id elit non mi porta gravida at eget metus. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </Card>

          <Card
            src="https://www.layoutit.com/img/city-q-c-600-200-1.jpg"
            alt="Second"
            title="Chris Mandracchia"
          >
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            id elit non mi porta gravida at eget metus. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </Card>

          <Card
            src="https://www.layoutit.com/img/sports-q-c-600-200-1.jpg"
            alt="Third"
            title="Jeff Soderberg"
          >
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            id elit non mi porta gravida at eget metus. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </Card>
        </div>
      </div>
    </div>
  );
};