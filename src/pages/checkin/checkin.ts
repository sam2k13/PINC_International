import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { PopoverController, NavController, LoadingController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from 'ionic-angular';

//import nodemailer from 'nodemailer';

@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html'
})

export class CheckinPage {

  private checkin : FormGroup;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public popoverCtrl: PopoverController,public loadingCtrl: LoadingController,public formBuilder: FormBuilder, public toastCtrl: ToastController, public http: Http) {
    var now = new Date();
    this.checkin = this.formBuilder.group({
      passcode: ['hoi145k', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      destination: ['', Validators.required],
      departure_number: ['', Validators.required],
      departure_date: [now.toISOString(), Validators.required],
      departure_departure_time: [null, Validators.required],
      departure_arrival_time: [null, Validators.required],
      accomodation_type: ['', Validators.required],
      address: ['', Validators.required],
      return_number: ['', Validators.required],
      return_date: [now.toISOString(), Validators.required],
      return_departure_time: [null, Validators.required],
      return_arrival_time: [null, Validators.required]
    });

    this.checkin.valueChanges.subscribe(data => {

      var departure_date = new Date(this.checkin.value.departure_date);
      var return_date = new Date(this.checkin.value.return_date);

      var departure_departure_time = new Date(this.dateString(departure_date) + "T" + this.checkin.value.departure_departure_time);
      var departure_arrival_time = new Date(this.dateString(departure_date) + "T" + this.checkin.value.departure_arrival_time);

      var return_departure_time = new Date(this.dateString(return_date) + "T" + this.checkin.value.return_departure_time);
      var return_arrival_time = new Date(this.dateString(return_date) + "T" + this.checkin.value.return_arrival_time);

      if(departure_date > return_date){
        let toast = this.toastCtrl.create({
          message: "Oops! Invalid Dates Selected",
          position: 'top',
          cssClass: 'toast-err',
          duration: 5000
        });
        toast.present();

        this.checkin.controls['return_date'].setValue(this.checkin.value.departure_date);
      }

      if(departure_departure_time > departure_arrival_time){
        let toast = this.toastCtrl.create({
          message: "Oops! Invalid Departure Times Selected",
          position: 'top',
          cssClass: 'toast-err',
          duration: 5000
        });
        toast.present();

        this.checkin.controls['departure_arrival_time'].setValue(this.checkin.value.departure_departure_time);
      }

      if(return_departure_time > return_arrival_time){
        let toast = this.toastCtrl.create({
          message: "Oops! Invalid Arrival Times Selected",
          position: 'top',
          cssClass: 'toast-err',
          duration: 5000
        });
        toast.present();

        this.checkin.controls['return_arrival_time'].setValue(this.checkin.value.return_departure_time);
      }

      if(this.checkin.value.departure_departure_time == null && this.checkin.value.departure_arrival_time != null){
        this.checkin.controls['departure_departure_time'].setValue(this.checkin.value.departure_arrival_time);
      }

      if(this.checkin.value.departure_arrival_time == null && this.checkin.value.departure_departure_time != null){
        this.checkin.controls['departure_arrival_time'].setValue(this.checkin.value.departure_departure_time);
      }

      if(this.checkin.value.return_departure_time == null && this.checkin.value.return_arrival_time != null){
        this.checkin.controls['return_departure_time'].setValue(this.checkin.value.return_arrival_time);
      }

      if(this.checkin.value.return_arrival_time == null && this.checkin.value.return_departure_time != null){
        this.checkin.controls['return_arrival_time'].setValue(this.checkin.value.return_departure_time);
      }

    });
  }



  dateString(date){
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();

    return [date.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
          ].join('-');
  }

  resetCheckin(){
    let alert = this.alertCtrl.create({
    title: 'Clear Check-In Form',
    message: 'Are you sure?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('No clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          this.clearForm();
        }
      }
    ]
  });
  alert.present();

  }

  clearForm(){
    this.checkin.reset();
    this.checkin.controls['passcode'].setValue('hoi145k');
    var now = new Date();
    this.checkin.controls['return_date'].setValue(now.toISOString());
    this.checkin.controls['departure_date'].setValue(now.toISOString());
  }

  submitCheckin(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.http.post('http://18.220.176.2:1332/checkin', this.checkin.value).subscribe(
      response => {
        loading.dismiss();
        console.log(response)
        let toast = this.toastCtrl.create({
          message: response.text(),
          position: 'top',
          duration: 5000
        });
        toast.present();
        this.clearForm();
      },

      err => {
        console.log(err);
        loading.dismiss();
        if (err.status != 0 && err.statusText.length > 0){
          let toast = this.toastCtrl.create({
            message: err.text(),
            position: 'top',
            cssClass: 'toast-err',
            duration: 5000
          });
          toast.present();
        }
        else {
          let toast = this.toastCtrl.create({
            message: "Oops! Something went wrong.\nUnable to receive Check-In",
            position: 'top',
            cssClass: 'toast-err',
            duration: 5000
          });
          toast.present();
        }
      }
    )

    // console.log();
    // var departure_departure_time = new Date(this.checkin.value.departure_date + "T" +  this.checkin.value.departure_departure_time);
    // var departure_arrival_time = new Date(this.checkin.value.departure_date + "T" +  this.checkin.value.departure_arrival_time);
    //
    // var return_departure_time = new Date(this.checkin.value.return_date + "T" +  this.checkin.value.return_departure_time);
    // var return_arrival_time = new Date(this.checkin.value.return_date + "T" +  this.checkin.value.return_arrival_time);
    //
    // var submitBody : any = {};
    //
    // submitBody.email = "sam2k13@gmail.com";
    // submitBody.subject = this.checkin.value.name + " - " + this.checkin.value.destination + " - " + departure_departure_time.toDateString();
    //
    // console.log(this.checkin.value);


    // let body = {
	  //    "subject": "test subject",
	  //     "body": "test body",
	  //     "passcode": "hoi145k",
	  //     "email":"sam2k13@gmail.com",
    //     "confirmEmail":"sam2k13@gmail.com",
    //     "confirmSubject":"Checking Submitted",
    //     "confirmBody":"Test Confirmation body",
    //     "sendConfirm": true
    // };
    // console.log(body)

  }
}
