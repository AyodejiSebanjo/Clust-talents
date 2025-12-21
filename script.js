// GET THE FORM ELEMENT

const form = document.getElementById("#studentRegForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the form data:

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const skill = document.getElementById("skill").value;

  // Creating a student object
  const student = {
    studenName: name,
    studentEmail: email,
    studentPhone: phone,
    studentSkill: skill,
  };

  let students = JSON.parse(localStorage.getItem("students")) || [];

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  form.reset();

  alert("Registration successful!");
});


const scrollers = document.querySelectorAll ('scroller')
