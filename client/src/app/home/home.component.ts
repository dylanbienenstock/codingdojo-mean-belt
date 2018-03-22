import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    animals: Object[];

    ngOnInit() {
        this._httpService
        .getAllAnimals()
        .subscribe((res) => {
            if (res["animals"].length != 0) {
                this.animals = res["animals"].sort(function(a, b) {
                    if (a.type.toUpperCase() < b.type.toUpperCase()) return -1;
                    if (a.type.toUpperCase() > b.type.toUpperCase()) return 1;

                    return 0;
                });
            }
        });
    }

    goToDetails(_id: any) {
        this._router.navigate(["details", _id]);
    }

    goToEdit(_id: any) {
        this._router.navigate(["edit", _id]);
    }
}
