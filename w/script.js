function verify() {
    let ck = document.cookie;
    if (ck.split(";")[0] != "username=cst10") {
    	let pw = prompt("Enter password:", "");
    	if (pw != "html5css3") {
    		window.location.replace("http://www.google.com/ncr");
    	}
    	else {
    	    document.cookie = "username=cst10";
    	}
    }
}
verify();