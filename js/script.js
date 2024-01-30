let uname = document.getElementById('uname')
let uid = document.getElementById('uid')
let tel = document.getElementById('tel')
let email = document.getElementById('email')
let pwd = document.getElementById('pwd')
let rpwd = document.getElementById('rpwd')
let ltext = document.getElementById('ltext')

function pvalid(){
	if(pwd.value === rpwd.value)
		rpwd.setCustomValidity('')
	else
		rpwd.setCustomValidity("Passwords don't match")
}

function newcred(){
	localStorage.setItem('uname', uname.value)
	localStorage.setItem('tel', tel.value)
	localStorage.setItem('email', email.value)
	localStorage.setItem('pwd', pwd.value)
	localStorage.setItem('rpwd', rpwd.value)
}

function checkcred(){
	if((localStorage.getItem('uname') === uid.value || localStorage.getItem('tel') === uid.value) && localStorage.getItem('pwd') === pwd.value){
		ltext.innerText = ''
		uid.setCustomValidity('')
		pwd.setCustomValidity('')
		return
	}
	else{
		ltext.innerText = 'Credentials are invalid.'
		uid.setCustomValidity('Credentials are invalid.')
		pwd.setCustomValidity('Credentials are invalid.')
		return false
	}
}