import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../watchlist.service';




@Component({
  selector: 'app-container-watchlist',
  templateUrl: './container-watchlist.component.html',
  styleUrls: ['./container-watchlist.component.css']
})
export class ContainerWatchlistComponent implements OnInit {

  constructor(private wl: WatchlistService) { }
  recData: any

  "container_watch_list" = {
    "contype_id": "",
    "contype_type": "",
    "contype_height": "",
    "contype_width": "",
    "contype_code": ""
  }

  ngOnInit(): void {


    this.wl.get().subscribe((data) => {
      this.recData = data;

    });
  }

}
