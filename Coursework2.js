function validateForm() {
  let a = document.forms["ContactForm"]["fName"].value;
  let b = document.forms["ContactForm"]["fEmail"].value;
  let c = document.forms["ContactForm"]["fPhone"].value;
  let d = document.forms["ContactForm"]["fEnquiry"].value;

  if (a == "") {
    alert("Please enter a name");
    return false;
  }

  if (b == "") {
    alert("Please enter an email address");
    return false;
  }

  if (c == "") {
    alert("Please enter a phone number");
    return false;
  }

  if (d == "") {
    alert("Please enter your enquiry");
    return false;
  }
}
