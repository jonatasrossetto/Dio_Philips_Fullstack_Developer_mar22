
import { NgModule } from "@angular/core";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReplacePipe } from "../pipe/replace.pipe";
import { CommonModule } from "@angular/common";
import { StarModule } from "../shared/component/star/star.module";


@NgModule ({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
        ReplacePipe,
    ],
    imports: [
        StarModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses/info/:id', component: CourseInfoComponent
              },
              {
                path: 'courses', component: CourseListComponent
              }
        ])
    ]
})

export class CourseModule {

}   