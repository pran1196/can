import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {
    apiEndpoint: string;
    
}

export const AppConfig: IAppConfig = {
    apiEndpoint: 'http://canapi.promptec.com/',
    //apiEndpoint:'http://localhost:10718/',
    

};
