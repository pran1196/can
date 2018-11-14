import { UsersModule } from './users.module';
import { UsersComponent } from './users.component';

describe('NewPageModule', () => {
    let NewPageModule: UsersModule;
    beforeEach(() => {
        NewPageModule = new UsersModule();
    });

    it('should create an instance', () => {
        expect(NewPageModule).toBeTruthy();
    });
});
