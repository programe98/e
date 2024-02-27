// share
function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: '',
			text: '',
			url: '',
          
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}



// cookies
var msg = document.getElementById('cookies-mdg')

function aceito(){
localStorage.lgpd = "sim"
msg.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
msg.classList.remove('mostrar')
}else{
msg.classList.add('mostrar')
}
