import React from 'react';

const VideoCard = ({ video }) => {
	const tags = video.tags.split(',');
	return (
		<div className="card">
			<video
				width="300"
				height="230"
				controls
			>
				<source src={video.videos.medium.url}></source>
			</video>
			<div>
				<h3 className="main">Photo By {video.user}</h3>
				<ul>
					<li>
						<strong> Views : </strong>
						{video.views}
					</li>

					<li>
						<strong> Downloads : </strong>
						{video.downloads}
					</li>

					<li>
						<strong> Likes : </strong>
						{video.likes}
					</li>
				</ul>
			</div>

			<div className="tags">
				{tags.map((tag, index) => (
					<span
						key={index}
						className="tag"
					>
						#{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default VideoCard;
