import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
//permite obtener los datos de todo el componente como parametros mediante las ruta


@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.scss']
})
export class SegundoComponenteComponent implements OnInit {

  @Input() textinput: string = ''; //textinput es el nombre de la variable que se va a recibir
  @Output() public holamundo = new EventEmitter;

  public userData: any = { /* array simple donde no se puden hacer validaciones, por eso ocupamos el profileForm */
    name: '',
    lastName: '',
    age: null
  }

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]), /* nombre obligatirio, minimo 4 caracteres */
    lastName: new FormControl(''), /* se le pueden mandar datos de una db solo indicandole cual es el valor 4
                                      y declarandolo aqui en el campo que lo resivira */
    age: new FormControl(0)
  });

  constructor(private router: Router, private route: ActivatedRoute) { } //se declara porque son clases y la debemos de inicializar


  ngOnInit(): void {
      const param = this.route.snapshot.params;
      console.log('valor del input --->', this.textinput)
      console.log('params from url --->', param)
  }

  buttonClick(): void {
    console.log('Valor del data',this.userData);
    console.log('Valor del Form',this.profileForm.value);
    console.log('form valido?',this.profileForm.valid);
    this.holamundo.emit('hola mundo desde el segundo componente');
    // con el console.log se pude ver la informacion que se esta mandando en inspeccionar
    if(this.profileForm.valid){   //valida que el formulario sea valido y si lo es pasaremos a home
      this.router.navigate(['home', this.profileForm.value /* {id: 12345, name: 'jose', lastname: 'perez'} */]);
    }else{
      alert('Formulario invalido');
    }
  }

}
