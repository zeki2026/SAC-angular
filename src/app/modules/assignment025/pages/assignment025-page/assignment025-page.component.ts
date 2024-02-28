import { Component,OnDestroy, OnInit} from '@angular/core';
import { Assignment025Service } from '@modules/assignment025/services/assignment025.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-assignment025-page',
  templateUrl: './assignment025-page.component.html',
  styleUrl: './assignment025-page.component.css'
})
export class Assignment025PageComponent implements OnInit, OnDestroy{

  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject;
  
  tableProperties: Array<any> = [];

  files:Array<any> = [];

  constructor(private _service: Assignment025Service) { 
  
  }

  ngOnInit(): void {
    this.getProperties();
  }

  getProperties(){
    this.dtOptions = {
      pagingType: 'simple'
    };

    this._service.getFileType()
        .subscribe({
          next: response=>{
            this.tableProperties = response;
            console.log(this.tableProperties);
            this.dtTrigger.next(null);
          },
          error: err=>{
            console.log(this.dtOptions);
          }
        })
  }

  fileEvent(file:any){
    this.files = [];
    for(const element of file.target.files){
      this.files.push(element);
    };
  }

  calendarEvent(file:any){
    console.log(file);
  }

  sendFiles(process:string,id:string){
    // console.log(process,id);

    switch (process) {
      case "DumpAcornFile":
        this.dumpAcornFile(id);
        break;
      case "updateIb":
        this.buildIbFile();
        break;
      case "buildWLPIBFile":
          this.dumpWlpObFile(id);
        break;
      default:
        break;
    }
  }

  dumpAcornFile(id:string){
    this.files.forEach(element => {
      const dt = new FormData();
      dt.append('acornFile',element);
      dt.append('acornFileType',id);
    this._service.uploadFile(dt)
      .subscribe(
        {
          next: data=>{
            console.log('Exito, termino el proceso');
          },
          error: err =>{
            console.log('error en peticion');
          }
        }
      )
    });
  }

  buildIbFile(){
    this._service.updateIbFile()
      .subscribe(
        {
          next: data=>{
            console.log('Exito', data);
          },
          error: err =>{
            console.log('error de peticion');
          }
        }
      )
  }

  dumpWlpObFile(id:string){
    this.files.forEach(element => {
      const dt = new FormData();
      dt.append('acornFile',element);
      dt.append('acornFileType',id);
    this._service.uploadFileOB(dt)
      .subscribe(
        {
          next: data=>{
            console.log('Exito, termino el proceso');
          },
          error: err =>{
            console.log('error en peticion');
          }
        }
      )
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
