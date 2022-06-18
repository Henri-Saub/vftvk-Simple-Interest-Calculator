function compute()
{
    /* Declare the variables */
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseFloat(document.getElementById("years").value);
    var interest = principal * years * rate /100;
    var Year = new Date().getFullYear() + parseInt(years);

    /* Code to display the result in a sentence form */
    document.getElementById("result").innerHTML = "If you deposit <mark>"
   + principal + "</mark>, <br/> at an interest rate of <mark>"
   + rate +"%.</mark><br/> You will receive an amount of <mark>" 
   + interest + "</mark>,<br/>in the year <mark>" 
   + Year + ".</mark><br/>";
}

/* Code for a dynamic display of the choosen interest, on the app */
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

/* Function to check and make an alert when the principal value is incorrect. */
function checkAmount() 
{
    var principal = document.getElementById("principal").value;
    if (principal <= 0) 
    {
        alert("Please enter a not-null or a positive number");
        document.getElementById("principal").focus();
    }
}
