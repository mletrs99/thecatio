//Emelly Torres

//create array for customers info
const customers = [];

//Which button java is looking for (accessing the domthrough JS)
const submitButton = document.getElementById("submit");

//Event listener that waits until user clicks button with id = submit to execute the action
submitButton.addEventListener("click", function() {
    //new customer information
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    //reservation info
    const session = document.getElementById("reservationtype").value;
    const adult = Number(document.getElementById("adult").value);  //changes string value collected to a number
    const child = Number(document.getElementById("child").value);
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;

   //create a customer object
    const customer = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        session: session,
        adult: adult,
        child: child,
        day: day,
        time: time
    }

    //add it into an array
    customers.push(customer);

    //clear console
    console.clear();

    //display
    console.log(customers);
})

