import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable()
export class HttpService {
    constructor(private _http: HttpClient) { }

    getAllAnimals() {
        return this._http.get("/animals");
    }

    getAnimalById(_id) {
        return this._http.get(`/animals/${_id}`);
    }

    createAnimal(props) {
        return this._http.post("/animals", props);
    }

    updateAnimal(_id, props) {
        return this._http.put("/animals", { _id: _id, props: props });
    }

    deleteAnimal(_id) {
        return this._http.delete(`/animals/${_id}`);
    }
}
