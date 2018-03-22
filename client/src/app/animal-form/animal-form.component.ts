import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-animal-form',
    templateUrl: './animal-form.component.html',
    styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent implements OnInit {
    @Input() model: Object;
    @Input() buttonText: string;
    @Output() formSubmitted = new EventEmitter();

    data: Object;

    constructor() { }

    ngOnInit() {
        this.data = this.model || {
            name: "",
            type: "",
            description: "",
            skills: ["", "", ""]
        }
    }

    onSubmit() {
        delete this.data["likes"];
        
        this.formSubmitted.emit(this.data);
    }
}
