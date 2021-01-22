import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CreateComponent } from "./create/create.component";
import { EditComponent } from "./edit/edit.component";
import { UsersComponent } from "./users.component";
import { UserRoutingModule } from "./users.routing";


const component = [
    CreateComponent,
    EditComponent,
    UsersComponent
];

@NgModule({
    declarations: component,
    imports: [
        UserRoutingModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: component
})

export class UsersModule {}