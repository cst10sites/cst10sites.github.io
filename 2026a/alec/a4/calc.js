function calculate1() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);

    	if (isNaN(subtotal)) {
       	 document.getElementById('output').innerHTML = "Please enter a number";
       	 document.getElementById('afterTip').innerHTML = "";
       	 return;
    	}

   	 	let gst = subtotal * 0.05;
   		let afterGST = subtotal + gst;

    	document.getElementById('output').innerHTML =
        "After Tax Total: $" + afterGST.toFixed(2);

 
    	let tip = parseFloat(document.getElementById('tipValue').value);

    	if (isNaN(tip)) {
       	 document.getElementById('afterTip').innerHTML = "Please select a tip value";
        	return;
   		 }

    let tipAmount = afterGST * tip;
    let tipTotal = afterGST + tipAmount;

    document.getElementById('afterTip').innerHTML =
        "After Tip Total: $" + tipTotal.toFixed(2);

        var people = document.getElementById('peopleSplit').value;
        var splitTotal = tipTotal/people;
        document.getElementById('afterSplit').innerHTML = "Total Pay Per Person: $"+ splitTotal.toFixed(2);
}

		function reset() {
			window.location.reload();
		}