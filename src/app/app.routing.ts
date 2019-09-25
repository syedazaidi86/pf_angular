import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageComponent } from './page/page.component';

export const AppRoutes: any = [
    { path: "", component: PageComponent},
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent },
    { path: "portfolio", component: PortfolioComponent}

];

export const AppComponents: any = [
    PageComponent,
    ContactComponent,
    AboutComponent,
    PortfolioComponent
];