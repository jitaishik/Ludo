var roll=document.getElementById("Roll");
var number=document.getElementById("number");
var turn=document.getElementById("tm-turn");
var iA1=0;
var iA2=0;
var iB1=0;
var iB2=0;
var lockerA=document.getElementById("tm-lockerA");
var tokenA=document.getElementById("tm-tokenA");
var lockerB=document.getElementById("tm-lockerB");
var tokenB=document.getElementById("tm-tokenB");
var tokenA1=null;
var tokenA2=null;
var tokenB1=null;
var tokenB2=null;
var winnerA1=0;
var winnerA2=0;
var winnerB1=0;
var winnerB2=0;
var flag1=0;
var flag2=0;
var eat1;
var eat2;
var eat3;
var eat4;
var eatturn1=0;
var eatturn2=0;
roll.onclick=function ()
{
	var num=Math.floor((Math.random()*6)+1);
	if (iA1<iB1 || iA1==0) 
	{
		eat1=1;
	}
	else if ((iA1>iB1)||((23<=iB1<=28) && (1<=iA1<=6))||iB1==0)
	{
		eat1=0;
	}
	if (iA1<iB2 || iA1==0) 
	{
		eat2=1;
	}
	else if ((iA1>iB2) ||((23<=iB2<=28) && (1<=iA1<=6)) ||iB2==0)
	{
		eat2=0;
	}
	if (iA2<iB1 || iA2==0) 
	{
		eat3=1;
	}
	else if ((iA2>iB1) ||((23<=iB1<=28) && (1<=iA2<=6))|| iB1==0)
	{
		eat3=0;
	}
	if (iA2<iB2 || iA2==0) 
	{
		eat4=1;
	}
	else if((iA2>iB2) ||((23<=iB2<=28) && (1<=iA2<=6))||iB2==0)
	{
		eat4=0;
	}
	if(num==1)
	{
		number.innerHTML="<center>1</center>";
		if(turn.innerHTML=="<center>TURN: Player A</center>" && num!=6)
		{
			turn.innerHTML="<center>TURN: Player B</center>"
		}
		else
		{
			turn.innerHTML="<center>TURN: Player A</center>"		
		}
	}
	else if(num==2)
	{
		number.innerHTML="<center>2</center>"
		if(turn.innerHTML=="<center>TURN: Player A</center>" && num!=6)
		{
			turn.innerHTML="<center>TURN: Player B</center>"
		}
		else
		{
			turn.innerHTML="<center>TURN: Player A</center>"		
		}
	}
	else if(num==3)
	{
		number.innerHTML="<center>3</center>"
		if(turn.innerHTML=="<center>TURN: Player A</center>" && num!=6)
		{
			turn.innerHTML="<center>TURN: Player B</center>"
		}
		else
		{
			turn.innerHTML="<center>TURN: Player A</center>"		
		}
	}
	else if(num==4)
	{
		number.innerHTML="<center>4</center>"
		if(turn.innerHTML=="<center>TURN: Player A</center>" && num!=6)
		{
			turn.innerHTML="<center>TURN: Player B</center>"
		}
		else
		{
			turn.innerHTML="<center>TURN: Player A</center>"		
		}
	}
	else if(num==5)
	{
		number.innerHTML="<center>5</center>"
		if(turn.innerHTML=="<center>TURN: Player A</center>" && num!=6)
		{
			turn.innerHTML="<center>TURN: Player B</center>"
		}
		else
		{
			turn.innerHTML="<center>TURN: Player A</center>"		
		}
	}
	else if(num==6)
	{
		number.innerHTML="<center>6</center>"
		if(turn.innerHTML=="<center>TURN: Player A</center>" && tokenA.innerHTML=="<center>2A</center>")
		{
			turn.innerHTML="<center>TURN: Player A</center>"
				tokenA.innerHTML="<center>1A</center>"
				iA1=1;
				tokenA1=document.getElementById("tm-div"+iA1);
				tokenA1.innerHTML="<center>1A</center>";
		}
		else if(turn.innerHTML=="<center>TURN: Player A</center>" && tokenA.innerHTML=="<center>1A</center>")
		{
			turn.innerHTML="<center>TURN: Player A</center>"
			if(winnerA1==1)
			{
				tokenA.innerHTML="<center>0A</center>"
				iA2=1;
				tokenA2=document.getElementById("tm-div"+iA2);
				tokenA2.innerHTML="<center>1A</center>"
			}
			else
			{
				lockerA.onclick=function(){
					tokenA.innerHTML="<center>0A</center>"
					iA2=1;
					tokenA2=document.getElementById("tm-div"+iA2);
					tokenA2.innerHTML="<center>1A</center>"
				};
			}
		}
		else if(turn.innerHTML=="<center>TURN: Player B</center>" && tokenB.innerHTML=="<center>2B</center>")
		{
			turn.innerHTML="<center>TURN: Player B</center>"
				tokenB.innerHTML="<center>1B</center>"
				iB1=15;
				tokenB1=document.getElementById("tm-div"+iB1);
				tokenB1.innerHTML="<center>1B</center>"
		}
		else if(turn.innerHTML=="<center>TURN: Player B</center>" && tokenB.innerHTML=="<center>1B</center>")
		{
			turn.innerHTML="<center>TURN: Player B</center>"
			if(winnerB1==1)
			{
				tokenB.innerHTML="<center>0B</center>"
				iB2=15;
				tokenB2=document.getElementById("tm-div"+iB2);
				tokenB2.innerHTML="<center>1B</center>";
			}
			else
			{
				lockerB.onclick=function(){
					tokenB.innerHTML="<center>0B</center>"
					iB2=15;
					tokenB2=document.getElementById("tm-div"+iB2);
					tokenB2.innerHTML="<center>1B</center>";
				};
			}
		}
	}
	if(iA1!=0 && ((turn.innerHTML=="<center>TURN: Player B</center>" && num!=6) || (turn.innerHTML=="<center>TURN: Player A</center>" && num==6)|| eatturn1==1))
	{
		if(tokenA.innerHTML=="<center>1A</center>" && num!=6)
		{
			tokenA1.innerHTML="";
			iA1+=num;
			if (iA1>=28) 
			{
				winnerA1=1
				iA1=iA1-28;
			}
			tokenA1=document.getElementById("tm-div"+iA1);
			if(winnerA1==1)
			{
				tokenA1.innerHTML="";
				num=0;
			}
			else
			{
				tokenA1.innerHTML="<center>1A</center>";
				num=0;
			}
		}
		else
		{
			if(winnerA2==1)
			{
				tokenA1.innerHTML="";
				iA1+=num;
				if (iA1>=28) 
				{
					winnerA1=1
					iA1=iA1-28;
				}
				tokenA1=document.getElementById("tm-div"+iA1);
				if(winnerA1==1)
				{
					tokenA1.innerHTML="";
					num=0;
				}
				else
				{
					tokenA1.innerHTML="<center>1A</center>";
					num=0;
				}
			}
			else
			{
				tokenA1.onclick=function()
				{
					tokenA1.innerHTML="";
					iA1+=num;
					if (iA1>=28) 
					{
						winnerA1=1
						iA1=iA1-28;
					}
					tokenA1=document.getElementById("tm-div"+iA1);
					if(winnerA1==1)
					{
						tokenA1.innerHTML="";
						num=0;
					}
					else
					{
						tokenA1.innerHTML="<center>1A</center>";
						num=0;
					}
				};
			}
		}
	}
	if(iA2!=0 && ((turn.innerHTML=="<center>TURN: Player B</center>" && num!=6) || (turn.innerHTML=="<center>TURN: Player A</center>" && num==6)||eatturn1==1))
	{
		if(winnerA1==1)
		{
			tokenA2.innerHTML="";
			iA2+=num;
			if (iA2>=28) 
			{
				winnerA2=1
				iA2=iA2-28;
			}
			tokenA2=document.getElementById("tm-div"+iA2);
			if(winnerA2==1)
			{
				tokenA2.innerHTML="";
				num=0;
			}
			else
			{
				tokenA2.innerHTML="<center>1A</center>";
				num=0;
			}
		}
		else
		{
			tokenA2.onclick=function()
			{
				tokenA2.innerHTML="";
				iA2+=num;
				if (iA2>=28) 
				{
					winnerA2=1
					iA2=iA2-28;
				}
				tokenA2=document.getElementById("tm-div"+iA2);
				if(winnerA2==1)
				{
					tokenA2.innerHTML="";
					num=0;
				}
				else
				{
					tokenA2.innerHTML="<center>1A</center>";
					num=0;
				}
			};
		}
	}
	if((tokenA1==tokenA2)&&((tokenA1.innerHTML!="")&&(tokenA2.innerHTML!=""))&&(tokenA1!=null))
	{
		tokenA1.innerHTML=tokenA2.innerHTML="<center>2A</center>";
		tokenA1.onclick=function()
		{
			tokenA1.innerHTML="";
			iA1+=num;
			tokenA1=document.getElementById("tm-div"+iA1);
			tokenA1.innerHTML="<center>1A</center>";
			tokenA2.innerHTML="<center>1A</center>";
			num=0;
		};
	}
	if(iB1!=0 && ((turn.innerHTML=="<center>TURN: Player A</center>" && num!=6) || (turn.innerHTML=="<center>TURN: Player B</center>" && num==6)|| eatturn2==1))
	{
		if(tokenB.innerHTML=="<center>1B</center>" && num!=6)
		{
			tokenB1.innerHTML="";
			iB1+=num;
			if(iB1>28)
			{
				iB1=iB1-28;
				flag1=1;
			}
			tokenB1=document.getElementById("tm-div"+iB1);
			if(flag1==1 && iB1>=14)
			{
				winnerB1=1;
			}
			if(winnerB1==1)
			{
				tokenB1.innerHTML="";
				num=0;
			}
			else
			{
				tokenB1.innerHTML="<center>1B</center>";
				num=0;
			}
		}
		else
		{
			if(winnerB2==1)
			{
				tokenB1.innerHTML="";
				iB1+=num;
				if(iB1>28)
				{
					iB1=iB1-28;
					flag1=1;
				}
				tokenB1=document.getElementById("tm-div"+iB1);
				if(flag1==1 && iB1>=14)
				{
					winnerB1=1;
				}
				if(winnerB1==1)
				{
					tokenB1.innerHTML="";
					num=0;
				}
				else
				{
					tokenB1.innerHTML="<center>1B</center>";
					num=0;
				}
			}
			else
			{
				tokenB1.onclick=function()
				{
					tokenB1.innerHTML="";
					iB1+=num;
					if(iB1>28)
					{
						iB1=iB1-28;
						flag1=1;
					}
					tokenB1=document.getElementById("tm-div"+iB1);
					if(flag1==1 && iB1>=14)
					{
						winnerB1=1;
					}
					if(winnerB1==1)
					{
						tokenB1.innerHTML="";
						num=0;
					}
					else
					{
						tokenB1.innerHTML="<center>1B</center>";
						num=0;
					}
				};
			}
		}
	}
	if(iB2!=0 && ((turn.innerHTML=="<center>TURN: Player A</center>" && num!=6) || (turn.innerHTML=="<center>TURN: Player B</center>" && num==6) || eatturn2==1))
	{
		if(winnerB1==1)
		{
			tokenB2.innerHTML="";
			iB2+=num;
			if(iB2>28)
			{
				iB2=iB2-28;
				flag2=1
			}
			if(flag2==1 && iB2>=14)
			{
				winnerB2=1;
			}
			tokenB2=document.getElementById("tm-div"+iB2);
			if(winnerB2==1)
			{
				tokenB2.innerHTML="";
			}
			else
			{
				tokenB2.innerHTML="<center>1B</center>";
				num=0;
			}
		}
		else
		{
			tokenB2.onclick=function()
			{
				tokenB2.innerHTML="";
				iB2+=num;
				if(iB2>28)
				{
					iB2=iB2-28;
					flag2=1
				}
				if(flag2==1 && iB2>=14)
				{
					winnerB2=1;
				}
				tokenB2=document.getElementById("tm-div"+iB2);
				if(winnerB2==1)
				{
					tokenB2.innerHTML="";
				}
				else
				{
					tokenB2.innerHTML="<center>1B</center>";
					num=0;
				}	
			};
		}
	}
	if((tokenB1==tokenB2)&&((tokenB1.innerHTML!="")&&(tokenB2.innerHTML!=""))&&(tokenB1!=null))
	{
		tokenB1.innerHTML=tokenB2.innerHTML="<center>2B</center>";
		tokenB1.onclick=function()
		{
			tokenB1.innerHTML="";
			iB1+=num;
			if(iB1>28)
			{
				iB1=iB1-28;
			}
			tokenB1=document.getElementById("tm-div"+iB1);
			tokenB1.innerHTML="<center>1B</center>";
			tokenB2.innerHTML="<center>1B</center>";
			num=0;
		};
	}
	eatturn1=0;
	eatturn2=0;
	if(winnerA1==1 && winnerA2==1)
	{
		number.innerHTML="<center>Winner is Player A</center>";
	}
	else if(winnerB1==1 && winnerB2==1)
	{
		number.innerHTML="<center>Winner is Player B</center>";
	}
	if(tokenA1==tokenB1 && tokenA1.innerHTML!="" && tokenA1!=null)
	{
		if(eat1==1)
		{
			if(tokenB.innerHTML=="<center>0B</center>")
			{
				tokenB.innerHTML="<center>1B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA1.innerHTML="<center>1A</center>";
				tokenB1=tokenB2;
				tokenB2=null;
				iB1=iB2;
				iB2=0;
			}
			else if(tokenB.innerHTML=="<center>1B</center>")
			{
				tokenB.innerHTML="<center>2B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA1.innerHTML="<center>1A</center>";
				tokenB1=null;
				iB1=0;
			}
		}
		if(eat1==0)
		{
			if(tokenA.innerHTML=="<center>0A</center>")
			{
				tokenA.innerHTML="<center>1A</center>";
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB1.innerHTML="<center>1B</center>";
				tokenA1=tokenA2;
				tokenA2=null;
				iA1=iA2;
				iA2=0;
			}
			else if(tokenA.innerHTML=="<center>1A</center>")
			{
				tokenA.innerHTML="<center>2A</center>"
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB1.innerHTML="<center>1B</center>";
				tokenA1=null;
				iA1=0;
			}
		}
	}
	if(tokenA1==tokenB2 && tokenA1.innerHTML!="" && tokenA1!=null)
	{
		if(eat2==1)
		{
			if(tokenB.innerHTML=="<center>0B</center>")
			{
				tokenB.innerHTML="<center>1B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA1.innerHTML="<center>1A</center>";
				tokenB2=null;
				iB2=0;
			}
			else if(tokenB.innerHTML=="<center>1B</center>")
			{
				tokenB.innerHTML="<center>2B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA1.innerHTML="<center>1A</center>";
				tokenB1=null;
				iB1=0;
			}
		}
		if(eat2==0)
		{
			if(tokenA.innerHTML=="<center>0A</center>")
			{
				tokenA.innerHTML="<center>1A</center>";
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB2.innerHTML="<center>1B</center>";
				tokenA1=tokenA2;
				tokenA2=null;
				iA1=iA2;
				iA2=0;
			}
			else if(tokenA.innerHTML=="<center>1A</center>")
			{
				tokenA.innerHTML="<center>2A</center>"
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB2.innerHTML="<center>1B</center>";
				tokenA1=null;
				iA1=0;
			}
		}
	}
	if(tokenA2==tokenB1 && tokenA2.innerHTML!="" && tokenA2!=null)
	{
		if(eat3==1)
		{
			if(tokenB.innerHTML=="<center>0B</center>")
			{
				tokenB.innerHTML="<center>1B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA2.innerHTML="<center>1A</center>";
				tokenB1=tokenB2;
				tokenB2=null;
				iB1=iB2;
				iB2=0;
			}
			else if(tokenB.innerHTML=="<center>1B</center>")
			{
				tokenB.innerHTML="<center>2B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA2.innerHTML="<center>1A</center>";
				tokenB1=null;
				iB1=0;
			}
		}
		if(eat3==0)
		{
			if(tokenA.innerHTML=="<center>0A</center>")
			{
				tokenA.innerHTML="<center>1A</center>";
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB1.innerHTML="<center>1B</center>";
				tokenA2=null;
				iA2=0;
			}
			else if(tokenA.innerHTML=="<center>1A</center>")
			{
				tokenA.innerHTML="<center>2A</center>"
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB1.innerHTML="<center>1B</center>";
				tokenA1=null;
				iA1=0;
			}
		}
	}
	if(tokenA2==tokenB2 && tokenA2.innerHTML!="" && tokenA2!=null)
	{
		if(eat4==1)
		{
			if(tokenB.innerHTML=="<center>0B</center>")
			{
				tokenB.innerHTML="<center>1B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA2.innerHTML="<center>1A</center>";
				tokenB2=null;
				iB2=0;
			}
			else if(tokenB.innerHTML=="<center>1B</center>")
			{
				tokenB.innerHTML="<center>2B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA2.innerHTML="<center>1A</center>";
				tokenB1=null;
				iB1=0;
			}
		}
		if(eat4==0)
		{
			if(tokenA.innerHTML=="<center>0A</center>")
			{
				tokenA.innerHTML="<center>1A</center>";
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB2.innerHTML="<center>1B</center>";
				tokenA2=null;
				iA2=0;
			}
			else if(tokenA.innerHTML=="<center>1A</center>")
			{
				tokenA.innerHTML="<center>2A</center>"
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB2.innerHTML="<center>1B</center>";
				tokenA1=null;
				iA1=0;
			}
		}
	}
	
};
submit.onclick=function(){
	var num=null;
	var button=document.getElementById("numchecker").value;
	num=parseInt(button);
	if (iA1<iB1 || iA1==0) 
	{
		eat1=1;
	}
	else if ((iA1>iB1)||((23<=iB1<=28) && (1<=iA1<=6))||iB1==0)
	{
		eat1=0;
	}
	if (iA1<iB2 || iA1==0) 
	{
		eat2=1;
	}
	else if ((iA1>iB2) ||((23<=iB2<=28) && (1<=iA1<=6)) ||iB2==0)
	{
		eat2=0;
	}
	if (iA2<iB1 || iA2==0) 
	{
		eat3=1;
	}
	else if ((iA2>iB1) ||((23<=iB1<=28) && (1<=iA2<=6))|| iB1==0)
	{
		eat3=0;
	}
	if (iA2<iB2 || iA2==0) 
	{
		eat4=1;
	}
	else if((iA2>iB2) ||((23<=iB2<=28) && (1<=iA2<=6))||iB2==0)
	{
		eat4=0;
	}
	if(num==1)
	{
		number.innerHTML="<center>1</center>";
		if(turn.innerHTML=="<center>TURN: Player A</center>" && num!=6)
		{
			turn.innerHTML="<center>TURN: Player B</center>"
		}
		else
		{
			turn.innerHTML="<center>TURN: Player A</center>"		
		}
	}
	else if(num==2)
	{
		number.innerHTML="<center>2</center>"
		if(turn.innerHTML=="<center>TURN: Player A</center>" && num!=6)
		{
			turn.innerHTML="<center>TURN: Player B</center>"
		}
		else
		{
			turn.innerHTML="<center>TURN: Player A</center>"		
		}
	}
	else if(num==3)
	{
		number.innerHTML="<center>3</center>"
		if(turn.innerHTML=="<center>TURN: Player A</center>" && num!=6)
		{
			turn.innerHTML="<center>TURN: Player B</center>"
		}
		else
		{
			turn.innerHTML="<center>TURN: Player A</center>"		
		}
	}
	else if(num==4)
	{
		number.innerHTML="<center>4</center>"
		if(turn.innerHTML=="<center>TURN: Player A</center>" && num!=6)
		{
			turn.innerHTML="<center>TURN: Player B</center>"
		}
		else
		{
			turn.innerHTML="<center>TURN: Player A</center>"		
		}
	}
	else if(num==5)
	{
		number.innerHTML="<center>5</center>"
		if(turn.innerHTML=="<center>TURN: Player A</center>" && num!=6)
		{
			turn.innerHTML="<center>TURN: Player B</center>"
		}
		else
		{
			turn.innerHTML="<center>TURN: Player A</center>"		
		}
	}
	else if(num==6)
	{
		number.innerHTML="<center>6</center>"
		if(turn.innerHTML=="<center>TURN: Player A</center>" && tokenA.innerHTML=="<center>2A</center>")
		{
			turn.innerHTML="<center>TURN: Player A</center>"
				tokenA.innerHTML="<center>1A</center>"
				iA1=1;
				tokenA1=document.getElementById("tm-div"+iA1);
				tokenA1.innerHTML="<center>1A</center>";
		}
		else if(turn.innerHTML=="<center>TURN: Player A</center>" && tokenA.innerHTML=="<center>1A</center>")
		{
			turn.innerHTML="<center>TURN: Player A</center>"
			if(winnerA1==1)
			{
				tokenA.innerHTML="<center>0A</center>"
				iA2=1;
				tokenA2=document.getElementById("tm-div"+iA2);
				tokenA2.innerHTML="<center>1A</center>"
			}
			else
			{
				lockerA.onclick=function(){
					tokenA.innerHTML="<center>0A</center>"
					iA2=1;
					tokenA2=document.getElementById("tm-div"+iA2);
					tokenA2.innerHTML="<center>1A</center>"
				};
			}
		}
		else if(turn.innerHTML=="<center>TURN: Player B</center>" && tokenB.innerHTML=="<center>2B</center>")
		{
			turn.innerHTML="<center>TURN: Player B</center>"
				tokenB.innerHTML="<center>1B</center>"
				iB1=15;
				tokenB1=document.getElementById("tm-div"+iB1);
				tokenB1.innerHTML="<center>1B</center>"
		}
		else if(turn.innerHTML=="<center>TURN: Player B</center>" && tokenB.innerHTML=="<center>1B</center>")
		{
			turn.innerHTML="<center>TURN: Player B</center>"
			if(winnerB1==1)
			{
				tokenB.innerHTML="<center>0B</center>"
				iB2=15;
				tokenB2=document.getElementById("tm-div"+iB2);
				tokenB2.innerHTML="<center>1B</center>";
			}
			else
			{
				lockerB.onclick=function(){
					tokenB.innerHTML="<center>0B</center>"
					iB2=15;
					tokenB2=document.getElementById("tm-div"+iB2);
					tokenB2.innerHTML="<center>1B</center>";
				};
			}
		}
	}
	if(iA1!=0 && ((turn.innerHTML=="<center>TURN: Player B</center>" && num!=6) || (turn.innerHTML=="<center>TURN: Player A</center>" && num==6)|| eatturn1==1))
	{
		if(tokenA.innerHTML=="<center>1A</center>" && num!=6)
		{
			tokenA1.innerHTML="";
			iA1+=num;
			if (iA1>=28) 
			{
				winnerA1=1
				iA1=iA1-28;
			}
			tokenA1=document.getElementById("tm-div"+iA1);
			if(winnerA1==1)
			{
				tokenA1.innerHTML="";
				num=0;
			}
			else
			{
				tokenA1.innerHTML="<center>1A</center>";
				num=0;
			}
		}
		else
		{
			if(winnerA2==1)
			{
				tokenA1.innerHTML="";
				iA1+=num;
				if (iA1>=28) 
				{
					winnerA1=1
					iA1=iA1-28;
				}
				tokenA1=document.getElementById("tm-div"+iA1);
				if(winnerA1==1)
				{
					tokenA1.innerHTML="";
					num=0;
				}
				else
				{
					tokenA1.innerHTML="<center>1A</center>";
					num=0;
				}
			}
			else
			{
				tokenA1.onclick=function()
				{
					tokenA1.innerHTML="";
					iA1+=num;
					if (iA1>=28) 
					{
						winnerA1=1
						iA1=iA1-28;
					}
					tokenA1=document.getElementById("tm-div"+iA1);
					if(winnerA1==1)
					{
						tokenA1.innerHTML="";
						num=0;
					}
					else
					{
						tokenA1.innerHTML="<center>1A</center>";
						num=0;
					}
				};
			}
		}
	}
	if(iA2!=0 && ((turn.innerHTML=="<center>TURN: Player B</center>" && num!=6) || (turn.innerHTML=="<center>TURN: Player A</center>" && num==6)||eatturn1==1))
	{
		if(winnerA1==1)
		{
			tokenA2.innerHTML="";
			iA2+=num;
			if (iA2>=28) 
			{
				winnerA2=1
				iA2=iA2-28;
			}
			tokenA2=document.getElementById("tm-div"+iA2);
			if(winnerA2==1)
			{
				tokenA2.innerHTML="";
				num=0;
			}
			else
			{
				tokenA2.innerHTML="<center>1A</center>";
				num=0;
			}
		}
		else
		{
			tokenA2.onclick=function()
			{
				tokenA2.innerHTML="";
				iA2+=num;
				if (iA2>=28) 
				{
					winnerA2=1
					iA2=iA2-28;
				}
				tokenA2=document.getElementById("tm-div"+iA2);
				if(winnerA2==1)
				{
					tokenA2.innerHTML="";
					num=0;
				}
				else
				{
					tokenA2.innerHTML="<center>1A</center>";
					num=0;
				}
			};
		}
	}
	if((tokenA1==tokenA2)&&((tokenA1.innerHTML!="")&&(tokenA2.innerHTML!=""))&&(tokenA1!=null))
	{
		tokenA1.innerHTML=tokenA2.innerHTML="<center>2A</center>";
		tokenA1.onclick=function()
		{
			tokenA1.innerHTML="";
			iA1+=num;
			tokenA1=document.getElementById("tm-div"+iA1);
			tokenA1.innerHTML="<center>1A</center>";
			tokenA2.innerHTML="<center>1A</center>";
			num=0;
		};
	}
	if(iB1!=0 && ((turn.innerHTML=="<center>TURN: Player A</center>" && num!=6) || (turn.innerHTML=="<center>TURN: Player B</center>" && num==6)|| eatturn2==1))
	{
		if(tokenB.innerHTML=="<center>1B</center>" && num!=6)
		{
			tokenB1.innerHTML="";
			iB1+=num;
			if(iB1>28)
			{
				iB1=iB1-28;
				flag1=1;
			}
			tokenB1=document.getElementById("tm-div"+iB1);
			if(flag1==1 && iB1>=14)
			{
				winnerB1=1;
			}
			if(winnerB1==1)
			{
				tokenB1.innerHTML="";
				num=0;
			}
			else
			{
				tokenB1.innerHTML="<center>1B</center>";
				num=0;
			}
		}
		else
		{
			if(winnerB2==1)
			{
				tokenB1.innerHTML="";
				iB1+=num;
				if(iB1>28)
				{
					iB1=iB1-28;
					flag1=1;
				}
				tokenB1=document.getElementById("tm-div"+iB1);
				if(flag1==1 && iB1>=14)
				{
					winnerB1=1;
				}
				if(winnerB1==1)
				{
					tokenB1.innerHTML="";
					num=0;
				}
				else
				{
					tokenB1.innerHTML="<center>1B</center>";
					num=0;
				}
			}
			else
			{
				tokenB1.onclick=function()
				{
					tokenB1.innerHTML="";
					iB1+=num;
					if(iB1>28)
					{
						iB1=iB1-28;
						flag1=1;
					}
					tokenB1=document.getElementById("tm-div"+iB1);
					if(flag1==1 && iB1>=14)
					{
						winnerB1=1;
					}
					if(winnerB1==1)
					{
						tokenB1.innerHTML="";
						num=0;
					}
					else
					{
						tokenB1.innerHTML="<center>1B</center>";
						num=0;
					}
				};
			}
		}
	}
	if(iB2!=0 && ((turn.innerHTML=="<center>TURN: Player A</center>" && num!=6) || (turn.innerHTML=="<center>TURN: Player B</center>" && num==6) || eatturn2==1))
	{
		if(winnerB1==1)
		{
			tokenB2.innerHTML="";
			iB2+=num;
			if(iB2>28)
			{
				iB2=iB2-28;
				flag2=1
			}
			if(flag2==1 && iB2>=14)
			{
				winnerB2=1;
			}
			tokenB2=document.getElementById("tm-div"+iB2);
			if(winnerB2==1)
			{
				tokenB2.innerHTML="";
			}
			else
			{
				tokenB2.innerHTML="<center>1B</center>";
				num=0;
			}
		}
		else
		{
			tokenB2.onclick=function()
			{
				tokenB2.innerHTML="";
				iB2+=num;
				if(iB2>28)
				{
					iB2=iB2-28;
					flag2=1
				}
				if(flag2==1 && iB2>=14)
				{
					winnerB2=1;
				}
				tokenB2=document.getElementById("tm-div"+iB2);
				if(winnerB2==1)
				{
					tokenB2.innerHTML="";
				}
				else
				{
					tokenB2.innerHTML="<center>1B</center>";
					num=0;
				}	
			};
		}
	}
	if((tokenB1==tokenB2)&&((tokenB1.innerHTML!="")&&(tokenB2.innerHTML!=""))&&(tokenB1!=null))
	{
		tokenB1.innerHTML=tokenB2.innerHTML="<center>2B</center>";
		tokenB1.onclick=function()
		{
			tokenB1.innerHTML="";
			iB1+=num;
			if(iB1>28)
			{
				iB1=iB1-28;
			}
			tokenB1=document.getElementById("tm-div"+iB1);
			tokenB1.innerHTML="<center>1B</center>";
			tokenB2.innerHTML="<center>1B</center>";
			num=0;
		};
	}
	eatturn1=0;
	eatturn2=0;
	if(winnerA1==1 && winnerA2==1)
	{
		number.innerHTML="<center>Winner is Player A</center>";
	}
	else if(winnerB1==1 && winnerB2==1)
	{
		number.innerHTML="<center>Winner is Player B</center>";
	}
	if(tokenA1==tokenB1 && tokenA1.innerHTML!="" && tokenA1!=null)
	{
		if(eat1==1)
		{
			if(tokenB.innerHTML=="<center>0B</center>")
			{
				tokenB.innerHTML="<center>1B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA1.innerHTML="<center>1A</center>";
				tokenB1=tokenB2;
				tokenB2=null;
				iB1=iB2;
				iB2=0;
			}
			else if(tokenB.innerHTML=="<center>1B</center>")
			{
				tokenB.innerHTML="<center>2B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA1.innerHTML="<center>1A</center>";
				tokenB1=null;
				iB1=0;
			}
		}
		if(eat1==0)
		{
			if(tokenA.innerHTML=="<center>0A</center>")
			{
				tokenA.innerHTML="<center>1A</center>";
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB1.innerHTML="<center>1B</center>";
				tokenA1=tokenA2;
				tokenA2=null;
				iA1=iA2;
				iA2=0;
			}
			else if(tokenA.innerHTML=="<center>1A</center>")
			{
				tokenA.innerHTML="<center>2A</center>"
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB1.innerHTML="<center>1B</center>";
				tokenA1=null;
				iA1=0;
			}
		}
	}
	if(tokenA1==tokenB2 && tokenA1.innerHTML!="" && tokenA1!=null)
	{
		if(eat2==1)
		{
			if(tokenB.innerHTML=="<center>0B</center>")
			{
				tokenB.innerHTML="<center>1B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA1.innerHTML="<center>1A</center>";
				tokenB2=null;
				iB2=0;
			}
			else if(tokenB.innerHTML=="<center>1B</center>")
			{
				tokenB.innerHTML="<center>2B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA1.innerHTML="<center>1A</center>";
				tokenB1=null;
				iB1=0;
			}
		}
		if(eat2==0)
		{
			if(tokenA.innerHTML=="<center>0A</center>")
			{
				tokenA.innerHTML="<center>1A</center>";
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB2.innerHTML="<center>1B</center>";
				tokenA1=tokenA2;
				tokenA2=null;
				iA1=iA2;
				iA2=0;
			}
			else if(tokenA.innerHTML=="<center>1A</center>")
			{
				tokenA.innerHTML="<center>2A</center>"
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB2.innerHTML="<center>1B</center>";
				tokenA1=null;
				iA1=0;
			}
		}
	}
	if(tokenA2==tokenB1 && tokenA2.innerHTML!="" && tokenA2!=null)
	{
		if(eat3==1)
		{
			if(tokenB.innerHTML=="<center>0B</center>")
			{
				tokenB.innerHTML="<center>1B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA2.innerHTML="<center>1A</center>";
				tokenB1=tokenB2;
				tokenB2=null;
				iB1=iB2;
				iB2=0;
			}
			else if(tokenB.innerHTML=="<center>1B</center>")
			{
				tokenB.innerHTML="<center>2B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA2.innerHTML="<center>1A</center>";
				tokenB1=null;
				iB1=0;
			}
		}
		if(eat3==0)
		{
			if(tokenA.innerHTML=="<center>0A</center>")
			{
				tokenA.innerHTML="<center>1A</center>";
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB1.innerHTML="<center>1B</center>";
				tokenA2=null;
				iA2=0;
			}
			else if(tokenA.innerHTML=="<center>1A</center>")
			{
				tokenA.innerHTML="<center>2A</center>"
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB1.innerHTML="<center>1B</center>";
				tokenA1=null;
				iA1=0;
			}
		}
	}
	if(tokenA2==tokenB2 && tokenA2.innerHTML!="" && tokenA2!=null)
	{
		if(eat4==1)
		{
			if(tokenB.innerHTML=="<center>0B</center>")
			{
				tokenB.innerHTML="<center>1B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA2.innerHTML="<center>1A</center>";
				tokenB2=null;
				iB2=0;
			}
			else if(tokenB.innerHTML=="<center>1B</center>")
			{
				tokenB.innerHTML="<center>2B</center>";
				turn.innerHTML="<center>TURN: Player A</center>";
				eatturn1=1;
				tokenA2.innerHTML="<center>1A</center>";
				tokenB1=null;
				iB1=0;
			}
		}
		if(eat4==0)
		{
			if(tokenA.innerHTML=="<center>0A</center>")
			{
				tokenA.innerHTML="<center>1A</center>";
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB2.innerHTML="<center>1B</center>";
				tokenA2=null;
				iA2=0;
			}
			else if(tokenA.innerHTML=="<center>1A</center>")
			{
				tokenA.innerHTML="<center>2A</center>"
				turn.innerHTML="<center>TURN: Player B</center>";
				eatturn2=1;
				tokenB2.innerHTML="<center>1B</center>";
				tokenA1=null;
				iA1=0;
			}
		}
	}
}