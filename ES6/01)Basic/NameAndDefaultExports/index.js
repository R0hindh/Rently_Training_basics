// import {Teacher} from "./teacher.js";
import Teacher from "./teacher.js"; //since Teacher class is the default export, therefore no need to specify

// import Teacher,{fun} from "./teacher.js";  //using both named and default
// Default import ... from '';
// Named   import {...} from '';

const person1 = new Teacher("Rohindh","B.E");
person1.walk();
person1.teaches();