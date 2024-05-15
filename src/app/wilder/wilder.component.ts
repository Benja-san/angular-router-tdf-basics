import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wilder',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './wilder.component.html',
  styleUrl: './wilder.component.scss',
})
export class WilderComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  wilderName?: string;

  wilders: string[] = [
    'cyril',
    'carlos',
    'fatimata',
    'salma',
    'camille',
    'virginie',
    'sebastien',
    'sid-ahmed',
    'anass',
    'lucie',
    'sirine',
    'marwa',
    'clotilde',
    'filip',
    'ergy',
  ];

  isWilder: boolean = false;

  findWilder(wilderName: string): boolean {
    return this.wilders.includes(wilderName);
  }

  // isWilder: boolean = this.wilders.includes(this.wilderName as string);

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.wilderName = params.get('wilderName') as string;
      if (!this.wilderName) {
        this.router.navigate(['/home']);
      } else {
        this.isWilder = this.findWilder(this.wilderName);
      }
    });
  }
}
