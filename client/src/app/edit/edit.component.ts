import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
    errors: Object[];
    data: Object;
    likeButtonStyle: Object;

    constructor(
        private _httpService: HttpService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) {
        let _id = this._activatedRoute.snapshot.params["_id"];
        this._httpService.getAnimalById(_id).subscribe((res) => {
            if (res["err"] || !res["animals"][0]) {
                this._router.navigate(["notfound"]);
            }

            this.data = res["animals"][0];
        });
    }

    buttonText: string;

    ngOnInit() {
        this.buttonText = "Edit pet";
    }

    updateAnimal(data) {
        this._httpService
        .updateAnimal(data["_id"], data)
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
