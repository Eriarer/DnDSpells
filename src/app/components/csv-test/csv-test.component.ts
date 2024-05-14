import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassSpellsService } from '../../services/class-spells.service';
import { SpellInterface } from '../../interface/spellsI';

@Component({
  selector: 'app-csv-test',
  standalone: true,
  imports: [],
  templateUrl: './csv-test.component.html',
  styleUrl: './csv-test.component.css',
})
export class CsvTestComponent {
  selectedClass$!: Observable<string>;
  classSpellList$!: Observable<SpellInterface[]>;

  class!: string;
  spellList!: SpellInterface[];

  constructor(private classSpellsService: ClassSpellsService) {}

  ngOnInit(): void {
    this.selectedClass$ = this.classSpellsService._selectedClass;
    this.classSpellList$ = this.classSpellsService._classSpellList;

    this.selectedClass$.subscribe((className) => {
      this.class = className;
    });

    this.classSpellList$.subscribe((spellList) => {
      this.spellList = spellList;
    });
  }
}
