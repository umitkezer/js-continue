const day = "tuesday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding makeup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code example");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding makeup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday") {
  console.log("Write code example");
} else if (day === "thursday") {
  console.log("Write code example");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday") {
  console.log("Enjoy the weekend");
} else if (day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

// wednesday ve thursday kosullarini ayri ayri yazmka yerine
// else if (day === wednesday || day === Thursaday ){ olarak ta yazilabilir
// ayni sey saturday ve sunday icinde gecerlidir
