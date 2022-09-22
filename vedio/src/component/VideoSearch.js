import React, { useState } from 'react';

const VideoSearch = ({ searchText }) => {
	const [text, setText] = useState('');

	const onSubmitHandler = (e) => {
		e.preventDefault();
		searchText(text);
	};
	return (
		<div className="search">
			<form
				className="=search-box"
				onSubmit={onSubmitHandler}
			>
				<input
					onChange={(e) => setText(e.target.value)}
					type="text"
					placeholder="Search Video"
				></input>
				<button type="submit"> Submit </button>
			</form>
		</div>
	);
};

export default VideoSearch;
