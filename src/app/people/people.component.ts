import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import {Subject} from 'rxjs';
import { Router } from '@angular/router';

class DataTablesResponse {
  results: any[];
  previous: any;
  next: any;
  count: number;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit, AfterViewInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  peoples: People[];
  results = this.apiService.list;
  swapiUrl = 'https://swapi.co/api/people/';
  dtTrigger: Subject<any> = new Subject();
  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit() {
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        const table = $('#star_war').DataTable();
        const paged = table.page.info();
        const params: Map<any, string> = new Map();
        params.set('format', 'json');
        params.set('page', String(paged.page + 1));
        that.apiService.get(that.swapiUrl, params)
          .subscribe(resp => {
            that.peoples = resp.results;

            callback({
              recordsTotal: resp.count,
              recordsFiltered: resp.count,
            data: []
          });
        });
      },
    };
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  detailsClick(url: string) {
    this.route.navigate(['details'], {queryParams: {website: url}});
  }

}
