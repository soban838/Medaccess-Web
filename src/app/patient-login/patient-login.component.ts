import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent {
@Output() cancel = new EventEmitter<void>();


}