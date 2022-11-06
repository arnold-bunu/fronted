import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { IssuesServiceService } from '../issues-service.service';

@Component({
  selector: 'app-create-issues',
  templateUrl: './create-issues.component.html',
  styleUrls: ['./create-issues.component.css']
})
export class CreateIssuesComponent implements OnInit {

  constructor( public issueservice: IssuesServiceService) { }

  ngOnInit(): void {
  }

  onAddIssue(issuesform: NgForm) {
    if (issuesform.invalid) {
      alert('Invalid entry, please try again')
      return;
    }
    alert('Issue with issue ID' + issuesform.value.enteredID + 'successfully entered')

    this.issueservice.addIssue_service(issuesform.value.enteredID,issuesform.value.enteredProvince,issuesform.value.enteredIssue,issuesform.value.enteredPriority )
    issuesform.resetForm();
  }

}
