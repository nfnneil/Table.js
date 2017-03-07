# Table.js
A lightweight sortable table plugin for jQuery.

Table.js aims to make life easy for jQuery users.  I made this plugin so
you can literally use all of your own css and it does exactly as advertised,
sorts it.

All you have to is:

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="table.min.js"></script>
```

The top line is Google's jQuery external script and the following line is the
minified version of table.js.  Next, you have to add the class sortable to relevant
tables.  This will make it so you can click on any of the
table heads ( <th> ) and it will automatically sort it.

Note: for this extension to work you must have a properly designed table with
thead, tbody, and th tags, like the following:

```

<table class="sortable">
	<thead>
		<tr>
		  <th>Name</th>
		  <th>Wage</th>
		  <th>Age</th>
		  <th>City</th>
		</tr>
	</thead>
	<tbody>
		<tr>
		  <td>Jack Carver</td>
		  <td>368</td>
		  <td>45</td>
		  <td>New York</td>
		</tr>
		<tr>
		  <td>John Johnson</td>
		  <td>450</td>
		  <td>19</td>
		  <td>Atlanta</td>
		</tr>
		<tr>
		  <td>Steve McKenzie</td>
		  <td>891</td>
		  <td>88</td>
		  <td>Miami</td>
		</tr>
	</tbody>
  </table>

```
