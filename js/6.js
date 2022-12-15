//else..if

/*var ch = prompt("Enter the character");

if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))
	console.log ("The Given Character is a Letter"); 
 
else if (ch >= "0" && ch <= "9")
	console.log ("The Given Character is a Number");

else
	console.log ("The Given Character is a Special Character");*/

//switch case

var ch = prompt ("Enter the character");

switch (true)
{
case ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")):
    console.log ("The Given Character is a Letter");  
	break;
	
case (ch >= "0" && ch >= "9"):
	console.log ("The Given Character is a Number");  
	break;
	
default:	
    console.log ("The Given Character is a Special Character");
}

//nested if
/*var ch = prompt("Enter the character");

if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))
{
	console.log ("The Given Character is a Letter"); 

	if (ch >= "0" && ch <= "9")
	{
		console.log  ("The Given Character is a Number");
	}
	else
	{
		console.log  ("The Given Character is not a Number");	
	}	
}
else
{
	 console.log ("The Given Character is Special Character");
}*/



