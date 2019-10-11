### Exercises
##### Stuyvesant Competitive Coding Club

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>

	$.get('/Advanced/Exercises/', (data) => {
		console.log(data);
		let listing = initDirectory(data);
		console.log(listing);
		$('body').append(JSON.stringify(listing));
	});

	function initDirectory(text) {
		return text
			.match(/href="([\w]+)/g) // pull out the hrefs
			.map((x) => x.replace('href="', '')); // clean up
	}

</script>