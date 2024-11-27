import { Component, OnInit, Input } from '@angular/core';
import { TaskserviceService } from "../../taskservice.service";

@Component({
  selector: 'app-add-edit-task',
  imports: [],
  templateUrl: './add-edit-task.component.html',
  styleUrl: './add-edit-task.component.css'
})
export class AddEditTaskComponent implements OnInit {
  constructor(private service: TaskserviceService) { }

  @Input() task: any;
  Priority = "";
  TaskName = "";
  Status = "";

  ngOnInit(): void {

    this.Priority = this.task.Priority;
    this.TaskName = this.task.TaskName;
    this.Status = this.task.Status;
  }

  addTask() {
    var task = {
      Priority: this.Priority,
      TaskName: this.TaskName,
      Status: this.Status
    };

    this.service.create(task).subscribe(res => {
      alert(res.toString());
    });
  }

  updateTask() {
    var task = {
      Priority: this.Priority,
      TaskName: this.TaskName,
      Status: this.Status
    };
    if (this.Status == "completed") {
      this.service.delete(task.TaskName).subscribe(res => {
        alert(res.toString());
      });
    }
    else {
      this.service.update(task).subscribe(res => {
        alert(res.toString());
      });
    }
   
  }
}
