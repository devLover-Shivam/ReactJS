import A from './app.js' //impoorting default export so we can use any name for it as there is only one single default export.
console.log(A);
import {skills,age} from './app.js' // importing named export.
console.log(age,skills);
/* import {age} from './app.js' //importing named export
console.log(skills);
console.log(age); */