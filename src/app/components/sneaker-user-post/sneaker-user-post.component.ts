import {Component, Input, OnInit} from '@angular/core';
import {SneakerInterface} from "../../model/SneakerInterface";
import Swal from 'sweetalert2';
import {SneakersService} from "../../services/sneakers.service";


declare var $:any;

@Component({
  selector: 'app-sneaker-user-post',
  templateUrl: './sneaker-user-post.component.html',
  styleUrls: ['./sneaker-user-post.component.scss']
})
export class SneakerUserPostComponent implements OnInit {

  @Input() sneaker: SneakerInterface;

  constructor
  (
    private sneakersService: SneakersService,
  ) { }

  ngOnInit(): void {
  }

  openPostData(): void{
    $(".item-bottom").toggle("slow");
  }

  deleteMyPost(){
    Swal.fire({
      title:'¿Seguro deseas eliminarlo?',
      text:'No será posible recuperarla',
      icon:'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF214E',
      confirmButtonText:'Borrar',
      cancelButtonColor: '#000',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if(result.value){
        this.sneakersService.deleteSneaker(this.sneaker.id)
        Swal.fire({
          title: "Eliminado",
          icon: 'success',
          timer: 1500,
          timerProgressBar: true
        })
      }
    })
  }
}
