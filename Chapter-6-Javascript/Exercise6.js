function calculate()
{
        num1 = document.getElementById("costPerLiter").value;
        num2 = document.getElementById("litersPurchased").value;
        document.getElementById("cost").innerHTML = "$" + num1 * num2;
}

