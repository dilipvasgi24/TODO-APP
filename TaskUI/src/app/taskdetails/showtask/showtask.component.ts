import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from "../../taskservice.service";

@Component({
  selector: 'app-showtask',
  imports: [],
  templateUrl: './showtask.component.html',
  styleUrl: './showtask.component.css'
})
export class ShowtaskComponent implements OnInit {

  constructor(private service: TaskserviceService) { }

  TaskList: any = [];
  ModalTitle = "";
  ActivateAddEditTaskComp: boolean = false;
  task: any;


  ngOnInit(): void {
    this.refreshTaskList();
  }

  addClick() {
    this.task = {
      Priority: "0",
      TaskName: "",
      Status:""
    }
    this.ModalTitle = "Add Task";
    this.ActivateAddEditTaskComp = true;
  }

  editClick(item: any) {
    this.task = item;
    this.ModalTitle = "Edit Task";
    this.ActivateAddEditTaskComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.delete(item.Priority).subscribe(data => {
        alert(data.toString());
        this.refreshTaskList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditTaskComp = false;
    this.refreshTaskList();
  }


  async refreshTaskList() {
    this.service.fetch().subscribe(data => {
      this.TaskList = data;
    });
     
  }

}
