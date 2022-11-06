import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import {RouterModule, Routes} from "@angular/router"
import { LoginComponent } from "./auth/login/login/login.component";
import { HomeComponent } from "./home/home/home.component";
import { CreateIssuesComponent } from "./issues/create-issues/create-issues.component";
import { ViewIssuesComponent } from "./issues/view-issues/view-issues.component";

const routes: Routes = [
    
    {path:'view', component:ViewIssuesComponent},
    {path:'add',component: CreateIssuesComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:LoginComponent},
    {path: 'home', component:HomeComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}