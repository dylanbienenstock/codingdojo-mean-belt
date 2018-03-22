import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
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

    ngOnInit() {

    }

    likePet() {
        this.likeButtonStyle = {
            pointerEvents: "none",
            opacity: 0.5
        };

        this.data["likes"]++;

        this._httpService.updateAnimal(this.data["_id"], {
            likes: this.data["likes"]
        }).subscribe((res) => console.log("Pet liked."));
    }

    adoptPet() {
        this._httpService.deleteAnimal(this.data["_id"]).subscribe(() => {
            this._router.navigate([""]);            
        });
    }
}
