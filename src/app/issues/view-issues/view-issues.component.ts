import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IssuesServiceService } from '../issues-service.service';

@Component({
  selector: 'app-view-issues',
  templateUrl: './view-issues.component.html',
  styleUrls: ['./view-issues.component.css']
})
export class ViewIssuesComponent implements OnInit {

  issues:{_id:string, id:string, province:string, issue:string, priority:string} [] = [];

  constructor(public issueservice: IssuesServiceService) { }
  private issuesubscription!: Subscription;

  ngOnInit() {
    this.issueservice.getissues_service();
    this.issuesubscription = this.issueservice.getUpdateListener()
    .subscribe((issues:{_id:string, id:string, province:string, issue:string, priority:string}[])=>{
      this.issues = issues;
    });
  }

  ngOnDestroy() 
  {
    this.issuesubscription.unsubscribe();
  }

  ondelete(issuesid:string) 
  {
    this.issueservice.deleteissues_service(issuesid)
  }

}
