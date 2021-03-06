import React from 'react';
import Carousel from './carousel';

export default () => {
    return (
        <div class="row">
		<div class="col-md-6">
		<Carousel />
		</div>
		<div class="col-md-6">
			<h2>
				Heading
			</h2>
			<p>
				Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
			</p>
			<p>
				<a class="btn" href="#">View details »</a>
			</p> 
			<button type="button" class="btn btn-success btn-lg">
				Button
			</button>
		</div>
	</div>
    )
}