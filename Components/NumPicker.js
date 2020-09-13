function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

function getImg(num) {
    const successImg = "https://media.giphy.com/media/13Aj3FyKK6tcn6/giphy.gif";
    const wrongImg = "https://media.giphy.com/media/3oz8xLd9DJq2l2VFtu/giphy.gif";
    let myImg = null;
    num === 3 ? myImg = successImg : myImg = wrongImg;
    return myImg;
}

class NumPicker extends React.Component {
	render() {
		const num = getNum();
       const finalImg = getImg(num);
		return (
			<div className="card">
				<h1>My Number is: {num} </h1>
				<p>{num === 3 ? 'Yesss!' : 'Nope!'} </p>
				<img className="my-img" src={finalImg} />
			</div>
		);
	}
}