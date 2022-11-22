import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  public characterForm!: FormGroup;
  public myNewCharacterID = this.apiCallService.myCharacterData.id;
  public myNewCharacter = this.apiCallService.myCharacterData;
  
  constructor(private apiCallService: ApiCallService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
     this.apiCallService.clearForm();
    this.characterForm = this.formBuilder.group({
      characterNameForm: [this.myNewCharacter.characterNameForm, [Validators.required, Validators.minLength(1)]],
      characterImageForm: [this.myNewCharacter.characterImageForm, [Validators.required]]
    })
    this.characterForm.valueChanges.subscribe((changes)=> {
      this.myNewCharacter = changes;
    })

  }

  public onSubmit(){
    if(this.myNewCharacterID !== "") {
      this.apiCallService.patchMyCharacter(this.myNewCharacterID, this.myNewCharacter).subscribe()
      alert("Personaje editado correctamente")
      this.router.navigate(['/my-characters'])
    }
    else {
      this.apiCallService.postNewCharacter(this.myNewCharacter).subscribe();
      alert("personaje creado")
      this.apiCallService.clearForm();
      this.router.navigate(['/my-characters']);
      
    }
  }

  public delete(){
    this.apiCallService.deleteCharacter(this.myNewCharacterID).subscribe();
    this.apiCallService.clearForm();
    alert("Personaje eliminado");
    this.router.navigate(['/my-characters'])
  }

}
