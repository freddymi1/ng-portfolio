import { RouterModule, Routes } from "@angular/router"
import { DiversComponent } from "./divers/divers.component"
import { HomepageComponent } from "./homepage/homepage.component"

const app_routing: Routes = [
    {path: 'home', component: HomepageComponent},
    {path: 'divers', component: DiversComponent}
]

export const AppRoutes = RouterModule.forChild(app_routing);