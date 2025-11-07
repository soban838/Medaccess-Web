import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-icsi',
  templateUrl: './ai-icsi.component.html',
  styleUrls: ['./ai-icsi.component.css']
})
export class AIICSIComponent {
  testimonials = [
    {
      img: 'https://aivf.co/wp-content/uploads/2023/06/marcos-meseguer@2x.png',
      text: 'EMA AI technology has increased our pregnancy rates per frozen transfer by up to 30%, increasing the probability of success for patients.',
      author: 'Dr. David Walsh, <br> Gynecologist and Director at First IVF, Ireland'
    },
    {
      img: 'https://aivf.co/wp-content/uploads/2023/06/group@2x.png',
      text: 'EMA significantly improves our ability to identify and select for embryo transfer only embryos that have the best chances for a healthy pregnancy.',
      author: 'Mr. Achilleas Papatheodorou, PhD., M.Med.Sc., <br> Senior Clinical Embryologist and Lab Director Embryolab, Greece'
    },
    {
      img: 'https://aivf.co/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-11.01.15-1.png',
      text: 'Perfetto leverages AIVF’s AI-driven non-invasive technology to enhance IVF success rates; our experience shows correlation between EMA scores of 8.6+ and 65% embryo implantation rate.',
      author: 'Dr. Luiz Augusto A. Batista, <br> Co-founder and Gynecologist at Perfetto Clinic, Brazil'
    }
  ];

  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 4000); // 4 sec auto slide
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    clearInterval(this.interval);
    this.startAutoSlide();
  }
  defaultContent = 'Hover over a challenge to see details here';
  selectedContent = this.defaultContent;

  challenges = [
    {
      title: 'Blocked Or Damaged Fallopian Tube',
      content: 'Fallopian tubes in a woman’s body transfer eggs from the ovaries to the uterus. These tubes can get blocked or damaged for several reasons, including past tubal surgeries. This does not allow the sperm to fertilise the egg or prevent the embryo from travelling to the uterus.'
    },
    {
      title: 'Ovulation Challenges',
      content: 'IVF is a possible solution for achieving pregnancy in the case of women who have trouble ovulating due to conditions like PCOS, or if there is a luteinised unruptured follicle. There will be fewer eggs available for the sperm to fertilise.'
    },
    {
      title: 'Endometriosis',
      content: 'It is a medical condition where the endometrium or the uterus lining grows outside the uterus. This may challenge the normal reproductive functioning of the ovaries, uterus, and fallopian tubes, making pregnancy hard to achieve.'
    },
    {
      title: 'Uterine Fibroids',
      content: 'Fibroids in the uterus can block implantation or interfere with the uterus lining, causing difficulty in conceiving.'
    },
    {
      title: 'Previous Surgery To Avoid Pregnancy',
      content: 'If a woman opted for tubal ligation in the past to avoid pregnancy, they can opt for IVF.'
    },
    {
      title: 'Problem with sperm count',
      content: 'If a couple faces challenges like low sperm count or motility, IVF can be the most helpful solution'
    },
    {
      title: 'Unexplained Infertility',
      content: 'Experts recommend IVF to couples whose cause of infertility remains unexplained even after tests show normal results.'
    },
    {
      title: 'A Genetic Disorder',
      content: 'If either of the partners is at risk of passing on a genetic disorder to the baby, a fertility specialist might recommend IVF treatment with pre-implantation genetic testing (PGT-A) before pregnancy. The procedure checks for common genetic issues in embryos that can affect the baby’s health. Additionally, PGT-M and PGT-SR tests help identify specific genetic conditions or chromosome issues.'
    },
    {
      title: 'A desire to preserve fertility due to cancer or other health conditions',
      content: 'Radiation or chemotherapy can obstruct fertility. Therefore, doctors suggest people diagnosed with cancer opt for IVF. As part of this procedure, the fertility specialist retrieves the eggs from their ovaries and freezes them for later use, or they fertilise and freeze embryos for future use. Similarly, men can freeze their sperm for future use.'
    }
  ];

  // ✅ Add this getter to split challenges into pairs for 2 buttons per row
  get slicePairs() {
    const pairs = [];
    for (let i = 0; i < this.challenges.length; i += 2) {
      pairs.push(this.challenges.slice(i, i + 2));
    }
    return pairs;
  }


  form = {
    firstName: '',
    lastName: '',
    email: '',
    privacy: false
  };

  onSubmit() {
    if (this.form.privacy) {
      console.log('Form Data:', this.form);
      alert('✅ Thank you for subscribing!');
      // API call yahan kar sakte ho newsletter backend ke liye
    } else {
      alert('⚠️ Please agree to the Privacy Policy');
    }
  }


  newsList = [
    {
      date: '17.07.2025',
      title: 'New Clinical Evidence from ESHRE 2025',
      text: 'With the 41st Annual conference of ESHRE behind us, we collated all the clinical research presented there by our partners…',
      image: 'https://aivf.co/wp-content/uploads/2024/12/Where-New-Technology-Enhances-Embryo-Grading.png',
      link: 'https://aivf.co/news/aivf-at-eshre-2025/'
    },
    {
      date: '19.12.2023',
      title: 'The Digital Health 50: The most promising digital health companies of 2023',
      text: 'AIVF was selected by CB Insights to be included in the exclusive 50 Most Promising Digital Health Companies of 2023…',
      image: 'https://aivf.co/wp-content/uploads/2023/12/CB-Insight.jpg',
      link: 'https://www.cbinsights.com/research/report/digital-health-startups-redefining-healthcare-2023/'
    },
    {
      date: '04.12.2023',
      title: 'WIRED – The Hottest Startups in Tel Aviv',
      text: 'Since October 7, the minds of Tel Aviv’s startup community have been focused on the tragedy of the conflict between…',
      image: 'https://aivf.co/wp-content/uploads/2023/12/wired.png',
      link: 'https://aivf.co/?post_type=news&p=1062&preview=true'
    }
  ];

}








