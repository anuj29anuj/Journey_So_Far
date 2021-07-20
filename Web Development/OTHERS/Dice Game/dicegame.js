var scores,totalscore,activePlayer,dice,gamePlaying,prev,dice;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gamePlaying){
	 prev=dice;
	 dice=Math.floor(Math.random()*6)+1;
	var diceDOM=document.querySelector('.dice');
	diceDOM.style.display='block';
	diceDOM.src='dice-'+dice+'.png';
	if(dice!=1)
	{
		if(dice==6 &&prev==6)
		{
			scores[activePlayer]=0;
			document.getElementById('score-'+activePlayer).textContent='0';
			nextPlayer();
		}
		else
		{
		totalscore+=dice;
		document.querySelector('#current-'+activePlayer).textContent=totalscore;
		}
	}
	else
	{	if(scores[activePlayer]>=20)
		{
		document.querySelector('#name-'+activePlayer).textContent='Winner';
		}
		else
			nextPlayer();
	}
  }

});

document.querySelector('.btn-new').addEventListener('click',function(){
	init();

});

document.querySelector('.btn-hold').addEventListener('click',function(){
	scores[activePlayer]+=totalscore;
	document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
	if(scores[activePlayer]>=20)
	{
		document.querySelector('#name-'+activePlayer).textContent='Winner';
		gamePlaying=false;
	}
	else
		nextPlayer();

});

function nextPlayer()
{
	document.querySelector('#current-'+activePlayer).textContent='0';
		activePlayer==1?activePlayer=0:activePlayer=1;
		totalscore=0;
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.dice').style.display='none';
		

}
function init()
{
scores=[0,0]
dice=0;
activePlayer=0
totalscore=0
gamePlaying=true;
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
}

//dice=Math.floor(Math.random()*6)+1;
// document.querySelector('#current-'+activePlayer).textContent=dice;
// var x=document.querySelector('#score-0').textContent;
// console.log(x);