import { Component, OnInit, ElementRef } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { FormControl, FormGroupDirective, NgForm, Validators ,FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-heroelists',
  templateUrl: './heroelists.component.html',
  styleUrls: ['./heroelists.component.scss']
})
export class HeroelistsComponent implements OnInit {
  signupForm : FormGroup;
  defaultheroe : any = [];

  matcher = new MyErrorStateMatcher();
  constructor(private service: HeroesService) { }
  heroelists: any[];
  ngOnInit() {
    this.heroelists = this.service.ngOnInit();
    //  console.log(this.heroelists);
    //  this.service.ngOnInit();
    this.signupForm = new FormGroup({
      'textFormControl': new FormControl(null,Validators.required),
      'nameFormControl' : new FormControl(null,Validators.required)
    })
  }
  onSubmit(){
    console.log(this.service.ngOnInit());
    if(this.signupForm.value.textFormControl !== '' && this.signupForm.value.nameFormControl){
      this.defaultheroe.push({
        id : this.service.ngOnInit()[this.service.ngOnInit().length-1].id + 1,
        likes : 0,
        name :this.signupForm.value.nameFormControl,
        palindrome : this.signupForm.value.textFormControl
      })
    }
  }
  deleteItem(elref : ElementRef){
    console.log(elref)
  }

}
