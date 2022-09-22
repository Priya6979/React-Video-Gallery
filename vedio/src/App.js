import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './component/Header';
import './App.css';
import VideoSearch from './component/VideoSearch';
import VideoCard from './component/VideoCard';
import Footer from './component/Footer';
import './Style.css';

function App() {
	const [video, setVideo] = useState([]);
	const [isloading, setIsloading] = useState(true);
	const [term, setTerm] = useState('flower');

	useEffect(() => {
		axios
			.get(
				`https://pixabay.com/api/videos/?key=29536220-90609b5fadda99b9a0981664f&q=${term}&pretty=true`
			)

			.then((res) => {
				setVideo(res.data);
				setIsloading(false);
			})
			.catch((error) => {
				console.log('Error', error);
			});
	}, [term]);

	return (
		<div className="App">
			<Header />
			<VideoSearch searchText={(text) => setTerm(text)} />

			{!isloading && video.hits.length === 0 && (
				<h1 className="message">NO VIDEO FOUND</h1>
			)}
			<div className="flex-main">
				{isloading ? (
					<h1>Loading...</h1>
				) : (
					video &&
					video?.hits?.map((video) => {
						return (
							<div>
								<VideoCard
									key={video.id}
									video={video}
								/>
							</div>
						);
					})
				)}
			</div>
			<Footer />
		</div>
	);
}

export default App;
