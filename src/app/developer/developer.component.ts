import { Component } from '@angular/core';
import { Developer } from '../developer';
import { Skill } from '../skill';
import { SkillComponent } from '../skill/skill.component';
import { MagicalButtonComponent } from '../magical-button/magical-button.component';

type buttonStyle = {
  content: string;
  color: string;
  clicked: number;
};

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent, MagicalButtonComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss',
})
export class DeveloperComponent {
  carlosSkills: Skill[] = [
    new Skill(
      1,
      'Angular',
      'https://blog.ninja-squad.com/assets/images/angular_gradient.png',
      'https://blog.angular.io/introducing-angular-v17-4d7033312e4b'
    ),
    new Skill(
      2,
      'Java',
      'https://miro.medium.com/v2/resize:fit:1400/1*h7OiiKMWuC6qX98-dmeQNA.png',
      'https://www.java.com/fr/'
    ),
  ];

  carlos: Developer = new Developer(
    'Carlos',
    'Avila',
    'M',
    55,
    'Hey Am Carlos, from Argentina, I love Patagonia and Angular 17 !',
    this.carlosSkills
  );

  colorB1: string = '#548F25';
  colorB2: string = '#58FD25';
  colorB3: string = '#898F25';

  contentB1: string = 'Button 1';
  contentB2: string = 'Button 2';
  contentB3: string = 'Button 3';

  buttonClickReceipt(clicked: any): void {
    alert(`you clicked me ${clicked} ${clicked > 1 ? 'times' : 'time'}`);
  }

  ngOnInit() {}
}
