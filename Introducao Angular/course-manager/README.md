## Course Manager
This is a folder to store the project "Course Manager" created during the lecture about Angular Forms.

29/04/2022a - Added a component to implement a list of courses 

29/04/2022b - Added the star component to show course rating stars, using font-awesome, it is simply 5* covered by a variable width mask, have to take care about the formula to calculate the rating mask width

01/05/2022 - Added a filter functionality to filter courses by some string contained in the course name

02/05/2022 - Added Pipes to format the release date and course code

04/05/2022 - Routes were implemented

05/05/2022 - Some bug in the activatedRoute declaration in course-info.component.ts

06/05/2022 - the bug in the activatedRoute declaration in course-info.component.ts (error TS2533: Object is possibly 'null' or 'undefined') was solved by editing the tsconfig.json file with the compiler directive "strictNullChecks":false

11/05/2022 - Implemented the Edit functionality, implemented a node server to run as a backend for the application (the server was given by the instructor) (to run the server one musto run 'node server.js')

11/05/2022 - Implemented the Delete functionality

13/05/2022 - A course module 'course.module.ts' was implemented to group in the same context the 'course.info' and 'course.service' components.

-----------------------------------------------
## CourseManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
