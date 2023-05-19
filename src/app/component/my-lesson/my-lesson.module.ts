import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MyLessonRoutingModule} from './my-lesson-routing.module';
import {MyLessonListComponent} from './my-lesson-list/my-lesson-list.component';
import {MyLessonDetailsComponent} from './my-lesson-details/my-lesson-details.component';
import {FileModule} from "../file/file.module";
import {CdkAccordionModule} from "@angular/cdk/accordion";


@NgModule({
  declarations: [
    MyLessonListComponent,
    MyLessonDetailsComponent,
  ],
  imports: [
    CommonModule,
    MyLessonRoutingModule,
    FileModule,
    CdkAccordionModule
  ]
})
export class MyLessonModule {
}
