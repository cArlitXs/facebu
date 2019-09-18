import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../services/stories.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-stories-publish',
    templateUrl: './stories-publish.component.html',
    styleUrls: ['./stories-publish.component.css']
})
export class StoriesPublishComponent implements OnInit {

    publishDate: Date  = new Date();
    publishDateStr: string;

    constructor(private storiesService: StoriesService, formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            "content": this.content
        });
    }

    form: FormGroup;
    content = new FormControl("", Validators.compose([Validators.maxLength(150), Validators.minLength(1), Validators.required]));

    ngOnInit() {
    }

    addMessage() {
        this.publishDateStr = this.publishDate.getDay() + "/" + this.publishDate.getMonth() + "/" + this.publishDate.getFullYear();
        this.storiesService.addMessage(this.content.value, this.publishDateStr ,1).subscribe();
    }

}
