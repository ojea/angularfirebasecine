import { Component, OnInit} from '@angular/core';
//IMPORTAMOS EL MODELO Y EL SERVICIO
import { Cine } from 'src/app/models/Cine';
import { PostService } from 'src/app/services/service.cine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public pelisYseries!: Array<Cine>

  constructor(private _service: PostService){}

  ngOnInit(): void {
    this._service.getItems().subscribe((response) => {
      console.log(response)
      this.pelisYseries = response
    })
  }

  
}
