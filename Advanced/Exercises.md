### Exercises
##### Stuyvesant Competitive Coding Club

<div id="listing"></div>

<script>

	(async () => {
		const response = await fetch('https://api.github.com/repos/StuyCCC/stuyccc.github.io/contents/Advanced/Exercises');
		const data = await response.json();
		for (let file of data) {
			if (file.name.includes(".html"))
				htmlString += `<a href="/Advanced/Exercises/${file.name.replace(".html", "")}">${file.name.replace(".html", "").replace("_", " ")}</a><br>`;
		}
		document.getElementById('listing').innerHTML = htmlString;
	})()

</script>