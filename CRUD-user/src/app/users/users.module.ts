import { NgModule } from "@angular/core";
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
        UserRoutingModule
    ],
    exports: component
})

export class UsersModule {}