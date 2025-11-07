import { Component, HostListener, OnInit } from '@angular/core';
import { PatientLoginComponent } from '../patient-login/patient-login.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApointmentComponent } from '../apointment/apointment.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showLoginForm = false;
  showForm = false;

  constructor(private _NzModalService: NzModalService) {

  }

    menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  } 

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }

  openPatientForm(): void {
    const modalRef = this._NzModalService.create({
      nzWidth: '0px',
      nzContent: PatientLoginComponent,
      nzFooter: null,
      nzClosable: false,
      nzMask: true,
      nzMaskStyle: {
        display: 'none',
      },
    });
    if (modalRef.componentInstance) {
      modalRef.componentInstance.cancel?.subscribe(() => {
        modalRef.destroy();
      });
    }
  }



  openAppointForm(): void {
    const modalRef = this._NzModalService.create({
      nzWidth: '0px',
      nzContent: ApointmentComponent,
      nzFooter: null,
      nzClosable: false,
      nzMask: true,
      nzMaskStyle: {
        display: 'none',
      },
    });
    if (modalRef.componentInstance) {
      modalRef.componentInstance.cancel?.subscribe(() => {
        modalRef.destroy();
      });
    }


    
  }





dropdownOpen = false;
subDropdownOpen = false;

toggleDropdown(event: Event) {
  event.stopPropagation(); // Prevents closing when clicking inside
  this.dropdownOpen = !this.dropdownOpen;
  if (!this.dropdownOpen) this.subDropdownOpen = false; // Close sub when main closes
}

toggleSubDropdown(event: Event) {
  event.stopPropagation();
  this.subDropdownOpen = !this.subDropdownOpen;
}

// Optional: close dropdowns on click outside
@HostListener('document:click')
closeAll() {
  this.dropdownOpen = false;
  this.subDropdownOpen = false;
}









}






