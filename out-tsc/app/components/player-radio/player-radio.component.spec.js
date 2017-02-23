import { async, TestBed } from '@angular/core/testing';
import { PlayerRadioComponent } from './player-radio.component';
describe('PlayerRadioComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PlayerRadioComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PlayerRadioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/var/www/html/material/src/app/components/player-radio/player-radio.component.spec.js.map