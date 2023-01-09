import React, { useState } from 'react'

// import Carousel from '@brainhubeu/react-carousel'
// import '@brainhubeu/react-carousel/lib/style.css'

export default function Project({ title, client, year, children}){

	const[isShown, setIsShown] = useState(false);

	const handleClick = event => {
		setIsShown(current => !current);
	}

	return (
		<div className="project">
			<button className="title" onClick={handleClick}>
				<h3>
					<span className="title">{title}</span>
					&nbsp;&nbsp;&#9814;&nbsp;&nbsp;
					<span className="client">{client}</span>
					&nbsp;&nbsp;&#9814;&nbsp;&nbsp;
					<span className="year">{year}</span>
				</h3>
			</button>
			<div className={(isShown) ? 'isVisible content' : 'content'}>
				{children}
				{/*{carousel && (
					<Carousel plugins={['arrows', 'infinite']}>
						{children}
					</Carousel>
				)}*/}
				{/*{!carousel && (
					{children}
				)}*/}
			</div>
			{/*{isShown && carousel && (
				<div className="content">
					<h4>{description}</h4>
					
				</div>
			)}
			{isShown && !carousel && (
				<div className="content">
					{children}
				</div>
			)}*/}
		</div>
	)
}

