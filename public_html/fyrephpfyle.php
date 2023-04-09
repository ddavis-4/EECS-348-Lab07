<html>
<body>

<?php
$numberofrows = $_GET["size"];
$numberofcols = $_GET["size"];
echo "<table border = \"1\">";
	echo '<tr>';
	for ($i = 0; $i <= $numberofcols; $i++)
	{
		if($i == 0)
		{
 			echo'<td></td>';
		}else
		{
			echo '<td>' .$i.'</td>';
		}
		}
		for($j = 1; $j <= $numberofrows; $j++)
		{
			echo '<tr>';
			echo '<td>' .$j. '</td>';
			for ($k = 1; $k <= $numberofcols; $k++)
			{
				echo '<td>' .$k*$j. '</td>';
				
			}
			echo '</tr>';
		}
echo "</table>";
?>

</table>
</body>
</html>	
