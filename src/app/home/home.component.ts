import { Component, OnInit } from '@angular/core';
import { APIService } from '../API/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  QuestionsList: any = [];

  question1 = {
      "a": "dog?",
      "answer": "a",
      "b": "cat",
      "c": "rabbit",
      "description": "here's a description",
      "question": "here's a question!",
      "value": 9
    }

    question2 = {
      "a": "mom?",
      "answer": "c",
      "b": "dad",
      "c": "uncle",
      "description": "here's a description2222",
      "question": "here's a question!!!222",
      "value": 5
    }

  constructor(
    public apiService: APIService
  ) { }

  ngOnInit() {
    this.loadQuestions();
    this.addQuestion(this.question1);
    this.addQuestion(this.question2);
    console.log(this.QuestionsList);
  }

  loadQuestions() {
    return this.apiService.GetAll().subscribe((data: {}) => {
      this.QuestionsList = data;
    });
  }

  addQuestion(question) {
    return this.apiService.AddQuestion(question);
  }

  // checkAnswer(id, answer) {
    
  // }

}


// import { Component, OnInit } from '@angular/core';
// import { BugService } from '../../shared/bug.service';

// @Component({
//   selector: 'app-issue-list',
//   templateUrl: './issue-list.component.html',
//   styleUrls: ['./issue-list.component.css']
// })
// export class IssueListComponent implements OnInit {

//   IssuesList: any = [];


//   ngOnInit() {
//     this.loadEmployees();
//   }

//   constructor(
//     public bugService: BugService
//   ){ }

//    // Issues list
//    loadEmployees() {
//     return this.bugService.GetIssues().subscribe((data: {}) => {
//       this.IssuesList = data;
//     })
//   }

//     // Delete issue
//     deleteIusse(data){
//       var index = index = this.IssuesList.map(x => {return x.issue_name}).indexOf(data.issue_name);
//        return this.bugService.DeleteBug(data.id).subscribe(res => {
//         this.IssuesList.splice(index, 1)
//          console.log('Issue deleted!')
//        })
//     }

// }