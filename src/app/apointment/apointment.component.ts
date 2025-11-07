import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apointment',
  templateUrl: './apointment.component.html',
  styleUrls: ['./apointment.component.css']
})
export class ApointmentComponent {
  @Output() cancel = new EventEmitter<void>();
   isVisible = true;
  isConfirmLoading = false;
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      doctor: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      gender: ['', Validators.required],
      payment: ['', Validators.required]
    });
  }


  handleCancel(): void {
    this.isVisible = false;
    this.cancel.emit();
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      this.isConfirmLoading = true;

      setTimeout(() => {
        this.isConfirmLoading = false;
        this.isVisible = false;
        console.log('Form Data:', this.appointmentForm.value);
      }, 1500); // simulate API call
    }
  }
}
