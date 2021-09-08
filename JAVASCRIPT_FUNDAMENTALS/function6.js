/*
output :-
0
unknown
unknown
*/
function showCount(count)
{
  alert(count ?? "unknown");
}

showCount(0);
showCount(null);
showCount();
