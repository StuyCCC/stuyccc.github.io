### Exercises
##### Stuyvesant Competitive Coding Club

<div id="listing"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>

	(async () => {
		const response = await fetch('https://api.github.com/repos/StuyCCC/stuyccc.github.io/contents/Advanced/Exercises');
		const data = await response.json();
		let htmlString = '<ul>';
		for (let file of data) {
			htmlString += `<li><p><a href="${file.path}">${file.name}</a></p></li>`;
		}
		htmlString += '</ul>';
		document.getElementById('listing').innerHTML = htmlString;
	})()

</script>