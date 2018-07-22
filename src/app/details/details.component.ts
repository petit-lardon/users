import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    user$: Object;

    constructor(private data: DataService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => this.user$ = params.id);
        /**
         * params.id refere to
         *     {path: 'details/:id', component: DetailsComponent},
         * from app-routing.module.ts
         */
    }

    ngOnInit() {
        this.data.getUser(this.user$).subscribe(
            data => this.user$ = data
        );
    }

}
