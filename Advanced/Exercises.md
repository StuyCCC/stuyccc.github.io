### Exercises
##### Stuyvesant Competitive Coding Club

<div id="listing"></div>

<script>

	(async () => {
		const response = await fetch('https://api.github.com/repos/StuyCCC/stuyccc.github.io/contents/Advanced/Exercises');
		const data = await response.json();
		let htmlString = '<ul>';
		for (let file of data) {
			htmlString += `<li><p><a href="/Advanced/Exercises/${file.name.replace(".md", "")}">${file.name.replace(".md", "").replace("_", " ")}</a></p></li>`;
		}
		htmlString += '</ul>';
		document.getElementById('listing').innerHTML = htmlString;
	})()

</script>