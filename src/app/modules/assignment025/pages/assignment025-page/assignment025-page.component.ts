import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterRenderRef, AfterViewInit, Component,OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
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

  dataTemplate: Array<any> = [];

  fetchData: Array<any> = [];

  constructor(private httpClient: HttpClient, private _service: Assignment025Service) { 
  
  }
  

  ngOnInit(): void {
    this.getProperties();

  }

  getProperties()
  {
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        this._service.getFileType()
        .subscribe({
          next: response=>{
            const properties = this.dataTableTemplate(response);
            callback({
              data: properties
            });
          },
          error: err=>{
            console.log(err);
          }
        })
      },
      pagingType: 'simple',
      
      columns:[
        {title: 'ID',},
        {title: 'Nombre',},
        {title: 'Archivo',},
        {title: 'Opciones',className:'d-flex justify-content-center gap-2'}
        ]
    };
  }

  dataTableTemplate(data:Array<any>):Array<any>{
    let dataTemplate:Array<any> = [];
    
    let i = 1;
    data.forEach(data=>{
      let rowProperty = [];
      const requireProperties = JSON.parse(data['properties']);

      rowProperty.push(i);
      rowProperty.push(data['name']);

      console.log(requireProperties);

      let actionProperties:string = '';

      rowProperty.push(`description`);
      if(requireProperties.file){
        actionProperties += `<label style="cursor:pointer;" class="input-group-text hover bg-info" for="${data['name']}"><i class="bi bi-archive"></i></label>
        <input type="file" name="jsonFile" id="${data['name']}" class="d-none" multiple>`;
      }else{
        actionProperties += '';
      }

      requireProperties.actions.forEach((e:any) => {
        actionProperties += 
          `<button type="button" class=" btn btn-${e.style} btn-sm ">
              <i class=" bi ${e.icon}"></i>
          </button>`
      });
      
      rowProperty.push(actionProperties);

      dataTemplate.push(rowProperty);
      i++;

      // console.log(rowProperty);
    })

    return dataTemplate;
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
