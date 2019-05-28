import {TestBed, async} from '@angular/core/testing';
import {Router} from '@angular/router';
import { DirectAccessGuard } from './direct-access-guard.service';

describe('Logged in guard should', () => {
    let accessGuard: DirectAccessGuard;
    let router = {
        navigate: jasmine.createSpy('navigate')
    };

    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [DirectAccessGuard,
                {provide: Router, useValue: router}
            ]
        })
            .compileComponents(); // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
        accessGuard = TestBed.get(DirectAccessGuard);
    });

    it('be able to hit route when accessGuard is true', () => {
        accessGuard.allowRouteChange = true;
        expect(accessGuard.canActivate()).toBe(true);
    });

    it('not be able to hit route when accessGuard is true', () => {
        accessGuard.allowRouteChange = false;
        const router = TestBed.get(Router);
        router.url = '/';       
        expect(accessGuard.canActivate()).toBe(false);
    });
});