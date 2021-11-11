import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: any = { name: "", email: "", subject: "", message: "" }
  isSending: boolean = false;
  emailValid: boolean = false;

  constructor(
    private toaster: ToastrService,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
  }

  goToSite(params) {
    window.open(params, '_blank');
  }

  validateEmail(email: string) {
    if (email.includes('@') && email.includes('.')) {
      this.emailValid = true
    }
    else {
      this.emailValid = false
    }
  }

  async sendMail() {
    this.isSending = true
    const msg = {
      to: 'mosinmiloluwa.o@gmail.com',
      from: this.contactForm.email,
      subject: `${this.contactForm.subject}`,
      name: this.contactForm.name,
      message: this.contactForm.message
    };
    this.utilsService.sendEmail(msg).subscribe(data => {
      this.isSending = false;
      if (data.code == 0) {
        this.toaster.success('Email sent successfully.', '', { timeOut: 6000 })
        this.contactForm.to = ""
        this.contactForm.from = ""
        this.contactForm.email = ""
        this.contactForm.subject = ""
        this.contactForm.name = ""
        this.contactForm.message = ""
        return
      }
      this.toaster.error(`${data.message}`, '', { timeOut: 6000 })
    }, error => {
      this.isSending = false;
      this.toaster.error('Something went wrong... Please send email via your mail app. Apologies for the inconvenience', '', { timeOut: 6000 })
    })
  }

}
