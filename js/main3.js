(function(){
var cs = document.getElementById('mycountdown9');
var now = new Date();

			var mcD = document.getElementById('mycountDay9');
			var mcDE = document.getElementById('mcDEID9');
			
			var mcH = document.getElementById('mycountHour9');
			var mcHE = document.getElementById('mcHEID9');
			
			var mcM = document.getElementById('mycountMin9');
			var mcME = document.getElementById('mcMEID9');
			
			var mcS = document.getElementById('mycountSec9');
			var mcSE = document.getElementById('mcSEID9');
			
var end = new Date(2114,7,08,00,00,00);
updatespan(end - now);
var timeInterval = setInterval(update,1000);
function update()
{
	now = new Date();
	leftTime = end-now;
	if(leftTime<=0)
	{
		timeInterval = clearInterval(timeInterval);
		
	}
	updatespan(leftTime);
}
function addZero(num)
{
	if(num<10)
	{
		return '0'+num;
	}
	return num;
}
function rightEndNum(num)
{
	if(num%100>=10&&num%100<=20)
	return 0;
	num = num%10;
	if(num==0||(num>=5&&num<=9))
	return 0;
	if(num==1)
	return 1;
	if(num>=2&&num<=4)
	return 2;
}

function rightEnd(num,f)
{
	var sec = ['сек.','сек.','сек.'];
	var min = ['мин.','мин.','мин.'];
	var hour =['час.','час.','час.'];
	var day = ['дн.','дн.','дн.'];
	if(f=='s')
	return sec[rightEndNum(num)];
	if(f=='m')
	return min[rightEndNum(num)];
	if(f=='h')
	return hour[rightEndNum(num)];
	if(f=='d')
	return day[rightEndNum(num)];
}

function updatespan(ms)
{
	if(ms<0)
	ms=0;
	sec=Math.floor(ms/1000);
	min = Math.floor(sec/60);
	hour = Math.floor(min/60);
	days = Math.floor(hour/24);
	sec = sec%60;
	min = min%60;
	hour = hour%24;
	
	sec = addZero(sec);
	min = addZero(min);
	hour = addZero(hour);
	
	secEnd = rightEnd(sec,'s');
	minEnd = rightEnd(min,'m');
	hourEnd = rightEnd(hour,'h');
	daysEnd= rightEnd(days,'d');
	
			mcD.innerHTML='<span class=flC>'+Math.floor(days/10)+'</span><span class=slC>'+days%10+'</span>';
			mcDE.innerText=daysEnd;
			
			mcH.innerHTML='<span class=flC>'+Math.floor(hour/10)+'</span><span class=slC>'+hour%10+'</span>';
			mcHE.innerText=hourEnd;
			
			mcM.innerHTML='<span class=flC>'+Math.floor(min/10)+'</span><span class=slC>'+min%10+'</span>';
			mcME.innerText=minEnd;
			
			mcS.innerHTML='<span class=flC>'+Math.floor(sec/10)+'</span><span class=slC>'+sec%10+'</span>';
			mcSE.innerText=secEnd;
			 
}})();
