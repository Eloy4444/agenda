import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { ScheduleEnum } from '../../models/ScheduleEnum';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public scheduleForm:FormGroup;

  constructor(private fb:FormBuilder,public dialogo:MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public mensaje:string ) { 
    this.scheduleForm = this.fb.group({
      hoursControl:new FormControl()
    })
  }

  private freeSchedule:Array<any> = [ ScheduleEnum[0],ScheduleEnum[1],ScheduleEnum[2],ScheduleEnum[3],ScheduleEnum[4],ScheduleEnum[5],ScheduleEnum[6],ScheduleEnum[7],ScheduleEnum[8],ScheduleEnum[9],ScheduleEnum[10],ScheduleEnum[11],ScheduleEnum[12],ScheduleEnum[13],ScheduleEnum[14] ];
  private occupiedSchedule:Array<any> = [ScheduleEnum[1], ScheduleEnum[5]];

  ngOnInit() {
    console.log(this.freeSchedule);
  }

  cerrarDialogo():void{
    this.dialogo.close(false);
  }

  confirmar():void{
    this.dialogo.close(true)
  }

  disabler(op){

      return this.occupiedSchedule.includes(op);
    
    
  }

}
