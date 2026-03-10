import { Routes } from '@angular/router';
import { ShowMessage } from './components/show-message/show-message';
import { NewMessage } from './components/new-message/new-message';

export const routes: Routes = [
    {
        path: 'ShowMessage', component: ShowMessage
    },
    {
        path: 'CreateMessage', component: NewMessage
    }
];
