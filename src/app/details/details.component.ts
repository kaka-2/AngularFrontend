import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from '../api.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit , OnDestroy, AfterViewInit {
  dtTrigger: Subject<any> = new Subject();
  people: People;
  constructor(private route: ActivatedRoute, private apiService: ApiService ) { }

  ngOnInit() {
    const website = this.route.snapshot.queryParamMap.get('website');
    const params: Map<any, string> = new Map();
    params.set('format', 'json');
    this.apiService.get(website, params).subscribe((data: People) => {
      this.people = data;
    });
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  favoritePerson(p: People) {
    // tslint:disable-next-line:prefer-const
    this.apiService.list.push( p.name);
    console.log(this.apiService.list);
  }
}
