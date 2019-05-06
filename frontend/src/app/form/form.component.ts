import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {HQForm} from '../models/form';
import {NgForm} from '@angular/forms';
declare var $:any;
declare var M: any;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers :[ApiService]
})

export class FormComponent implements OnInit {

  constructor(private hqformService: ApiService) { }

  ngOnInit() {
  this.getHQForm();
  
  $(document).ready(function(){
    $('.datepicker').datepicker();
  });
  }
  
  getHQForm() {
    this.hqformService.getForm()
      .subscribe(res => {
        this.hqformService.hqforms = res as HQForm[];
        //console.log(this.hqformService.hqforms);
      });
  }

  addHQForm(form?: NgForm) {
    //console.log(form.value);
    if(form.value.id) {
      this.hqformService.putForm(form.value)
        .subscribe(res => {
          this.resetHQForm(form);
          this.getHQForm();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.hqformService.postForm(form.value)
      .subscribe(res => {
        this.getHQForm();
        this.resetHQForm(form);
        M.toast({html: 'Save successfully'});
        
      });
      
    }
  }
    editHQForm(hqform: HQForm) {
      this.hqformService.selectedForm = hqform;
      
    }

    deleteHQForm(id: string, form: NgForm) {
      if(confirm('Are you sure you want to delete it?')) {
        this.hqformService.deleteForm(id)
          .subscribe(res => {
            this.getHQForm();
            this.resetHQForm(form);
            M.toast({html: 'Deleted Succesfully'});
          });
      }
    }
    
    resetHQForm(form?: NgForm) {
      if (form) {
        form.reset();
        this.hqformService.selectedForm = new HQForm();
      }
    }
}
