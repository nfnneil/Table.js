/*

Author: NFN Neil
Description: Allows people to easily implement sortable table.

Simply add the class .sortable to any table and that table
is now sortable.  That simple.

*/

function makeArray(table) {
	buildingArray = [];
	table.find("thead tr th").each(function (index) {
		$(this).attr("pos",index);
	});
	table.find("tbody tr").each(function () {
		current = [];
		$(this).find("td").each(function () {
			current.push($(this).html());
		});
		buildingArray.push(current);
	});
	return buildingArray;
}

$("table.sortable").find("th").click(function () {
	table = $(this).parents("table.sortable");
	arr = makeArray(table);
	index = Number($(this).attr("pos"));
	arr.sort(function (x,y) {
		return x[index].localeCompare(y[index]);
	});
	temp = "";
	for (var i = 0, len = arr.length; i < len; i++) {
		temp += "<tr>";
		for (var j = 0, len2 = arr[i].length; j < len2; j++) {
			temp += "<td>" + arr[i][j] + "</td>";
		}
		temp += "</tr>";
	}
	$(this).parents("table:first").find("tbody").html(temp);
});