function saklar(stat, lamp) {
  let toggle1 = document.getElementById("toggle1");
  let toggle2 = document.getElementById("toggle2");
  let toggle3 = document.getElementById("toggle3");
  let button4 = document.getElementById("toggle4");
  let button5 = document.getElementById("toggle5");
  let button6 = document.getElementById("toggle6");
  let toggle = document.getElementById("toggle");
  let and1 = document.getElementById("and1");
  let and2 = document.getElementById("and2");
  let or1 = document.getElementById("or1");
  let or2 = document.getElementById("or2");
  let notog = document.getElementById("not1");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");
  let lampu4 = document.getElementById("lampu4");
  let lampu5 = document.getElementById("lampu5");
  let lampu6 = document.getElementById("lampu6");
  let and = document.getElementById("and");
  let or = document.getElementById("or");
  let notlamp = document.getElementById("not");

  toggle1.checked ? (lampu1.src = "on.png") : (lampu1.src = "off.png");
  toggle2.checked ? (lampu2.src = "on.png") : (lampu2.src = "off.png");
  toggle3.checked ? (lampu3.src = "on.png") : (lampu3.src = "off.png");

  if (stat == "on" || toggle.checked) {
    if (lamp == 4 || lamp == "all") {
      lampu4.src = "on.png";
    }
    if (lamp == 5 || lamp == "all") {
      lampu5.src = "on.png";
    }
    if (lamp == 6 || lamp == "all") {
      lampu6.src = "on.png";
    }
  } else if (stat == "off" || !toggle.checked) {
    if (lamp == 4 || lamp == "all") {
      lampu4.src = "off.png";
    }
    if (lamp == 5 || lamp == "all") {
      lampu5.src = "off.png";
    }
    if (lamp == 6 || lamp == "all") {
      lampu6.src = "off.png";
    }
  }

  if (and1.checked && and2.checked) {
    and.src = "on.png";
  } else {
    and.src = "off.png";
  }

  if (or1.checked || or2.checked) {
    or.src = "on.png";
  } else {
    or.src = "off.png";
  }

  if (notog.checked) {
    notlamp.src = "off.png";
  } else {
    notlamp.src = "on.png";
  }
}
