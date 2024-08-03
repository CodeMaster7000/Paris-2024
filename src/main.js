var one = new ProgressBar.Circle('#one', {
			color: '#0085c7',
			trailColor: 'transparent',
			strokeWidth: 9,
			duration: 1000,
			easing: 'linear'
		});
var two = new ProgressBar.Circle('#two', {
			color: '#f4c300',
			trailColor: 'transparent',
			strokeWidth: 9,
			duration: 1000,
			easing: 'linear'
		});
var three = new ProgressBar.Circle('#three', {
			color: '#020200',
			trailColor: 'transparent',
			strokeWidth: 9,
			duration: 1000,
			easing: 'linear'
		});
var four = new ProgressBar.Circle('#four', {
			color: '#009f3d',
			trailColor: 'transparent',
			strokeWidth: 9,
			duration: 1000,
			easing: 'linear'
		});
var five = new ProgressBar.Circle('#five', {
			color: '#df0024',
			trailColor: 'transparent',
			strokeWidth: 9,
			duration: 1000,
			easing: 'linear'
		});
one.animate(1.0, function() {
	two.animate(1.0, function() {
		three.animate(1.0, function() {
			four.animate(1.0, function() {
				five.animate(1.0, function() {
				});
			});
		});
	});
});
