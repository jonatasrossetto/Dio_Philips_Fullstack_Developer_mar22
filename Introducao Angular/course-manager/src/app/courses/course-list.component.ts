import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
}) 
 
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit() {
        this.courses = [
            {
                id: 1,
                name: "Mecânica Geral",
                imageUrl: '/assets/images/animations.png',
                price: 99.99,
                code: 'MECG-1234',
                duration: 120,
                rating: 4.0,
                releaseDate: 'February, 2, 2021'
            },
            {
                id: 1,
                name: "Resistência dos Materiais 1",
                imageUrl: '/assets/images/forms.png',
                price: 132.54,
                code: 'RESMAT1-2345',
                duration: 240,
                rating: 4.5,
                releaseDate: 'March, 15, 2021'
            }
        ];
    }

}