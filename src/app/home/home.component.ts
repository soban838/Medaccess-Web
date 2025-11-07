import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import Swiper from 'swiper';
import gsap from 'gsap';
import { Router } from '@angular/router';
import { ApointmentComponent } from '../apointment/apointment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

  constructor(private router: Router, private _NzModalService: NzModalService) { }

  galleryImages: string[] = [
    'assets/img/3.png',
    'assets/img/4.png',
    'assets/img/3.png',
    'assets/img/4.png',
    'assets/img/5.png'
  ];


  orbitProgress: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.orbitProgress += 2; // speed adjust karo
      if (this.orbitProgress > 100) this.orbitProgress = 0; // loop back
    }, 50);
  }


  getRowTransform(index: number, total: number, progress: number) {
    const spacing = 420; // har card ke darmiyan ka gap
    const offset = (index - (total - 1) / 2) * spacing; // cards center align
    const translateX = offset + progress * 4; // smooth horizontal movement

    const rotate = Math.sin((index + progress / 10) * 0.5) * 5; // halka sa tilt (5°)

    // 👇 curve effect: side cards thoda niche, center card top pe
    const curveDepth = 50; // kitna curve chahiye (zyada ya kam kar sakta hai)
    const translateY = Math.pow((index - (total - 2) / 2), 2) * 8 - curveDepth;

    return `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
  }


  ngAfterViewInit(): void {
    // Initialize Swiper for optional coverflow (if still using)
    const swiper = new Swiper('.mySwiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      speed: 900,
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    swiper.on('slideChange', () => {
      gsap.fromTo(
        swiper.slides[swiper.activeIndex],
        { opacity: 0, scale: 0.85, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    });
  }

  topServices = [
    { icon: '/assets/img/AI-IVF xx.png', route: '/IVF' },
    { icon: '/assets/img/icsi 2.png', route: '/ICSI' },
    { icon: '/assets/img/IVM.png', route:'/IVM' },
    { icon: '/assets/img/AI-IUI xx.png', route: '/IUI' },
    { icon: '/assets/img/egg freezing xx.png', route: '/EGGFREEZING'},
    { icon: '/assets/img/egg poolingxxx.png' , route: '/EGG' },
    { icon: '/assets/img/ovarian.png', route: '/STEMOVERIAN' },
    { icon: '/assets/img/erec.png', route: 'STEMERECTILE' },
    { icon: '/assets/img/gender selection.png',route:'GENDER' },
  ];

  openService(service: any) {
    if (service.route) {
      this.router.navigate([service.route]);
    } else {
      console.log('No route defined for this service');
    }
  }

  // subServices = [
  //   { title: 'Data Analytics & Insights', icon: '📊' },
  //   { title: 'AI Training & Workshops', icon: '🎓' },
  //   { title: 'Custom AI Software', icon: '💻' },
  //   { title: 'Open AI', icon: '🤖' },
  //   { title: 'Robotic Process Automation', icon: '⚙️' }
  // ];








  // ---------------------faq------------

  faqs = [
    {
      question: 'How does AI Convert text to video, automatically?',
      answer: 'AI converts text to video by analyzing the content, generating scenes, voice-over, and matching visuals automatically.',
      open: false
    },
    {
      question: 'Affordable video production starting at $30/month',
      answer: 'Our platform offers subscription-based video production starting at $30/month for unlimited AI-generated videos.',
      open: false
    },
    {
      question: 'Web-based app accessible in your browser',
      answer: 'Our app is fully web-based, so you can access it on any modern browser without any downloads.',
      open: false
    },
    {
      question: 'Can I customize the videos created by AI?',
      answer: 'Yes, you can edit scenes, change text, voice, and visuals after the AI generates the video.',
      open: false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
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




  selectedTab = 0;

  feedbacks = [
    {
      name: 'Aimen Subhan',
      // company: 'INNOGAMES',
 
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'AI IVF treatment ka experience bohot acha tha, Dr. Imran Ayub supportive thay aur process clear samjhaya gaya.AI technology ki wajah se meri success rate improve hui aur finally positive result mila!'

    },
    {
      name: 'Manahil Farooq ',
      // company: 'OPERA NIO',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'AI IVF ka safar mere liye life changing raha, har step pe guidance aur care mili.AI technology ne process ko easy aur hopeful bana diya, aur akhirkar humein Olaad ki khushi mil gayi'
    },
    {
      name: 'Michael Lee',
      // company: 'TECHVERSE',
      title: 'Creative & Reliable Team!',
      img: 'https://randomuser.me/api/portraits/men/70.jpg',
      text: 'From design to deployment, their process was smooth and efficient. Loved working with them!'
    }
  ];

}
