function calculate() /*function to calculate user's input of petrol's cost per liter and number of liters purchased*/
{
        num1 = document.getElementById("costPerLiter").value; /*To access and return the selected element's value */
        num2 = document.getElementById("litersPurchased").value;
        document.getElementById("cost").innerHTML = "$" + num1 * num2; /*To access and return the result of the multiplication of the variables*/
}
