import { Component } from '@angular/core';
import { ClassSpellsService } from '../../services/class-spells.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  _class!: Observable<string>;
  classList: string[] = [];

  constructor(private classSpellsService: ClassSpellsService) {}

  ngOnInit(): void {
    this.classList = this.classSpellsService.getClassList();
  }

  selectClass(className: string): void {
    this.classSpellsService.fnUpdateSelectedClass(className);
  }
}
