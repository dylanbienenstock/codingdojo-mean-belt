import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-animal',
    templateUrl: './create-animal.component.html',
    styleUrls: ['./create-animal.component.scss']
})
export class CreateAnimalComponent implements OnInit {
    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    errors: Object[];
    buttonText: string;

    ngOnInit() {
        this.buttonText = "Add pet";
    }

    createAnimal(data) {
        this._httpService
        .createAnimal(data)
        .subscribe((res) => {
            if (res["err"]) {
                let errors = Object.values(res["err"]["errors"]);
                this.errors = errors.map(error => error["message"]);
            } else {
                this._router.navigate([""]);
            }
        });
    }
}
