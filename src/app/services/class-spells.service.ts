import { Injectable } from '@angular/core';
import Papa from 'papaparse';
import { BehaviorSubject, Observable } from 'rxjs';
import { SpellInterface } from '../interface/spellsI';

@Injectable({
  providedIn: 'root',
})
export class ClassSpellsService {
  private selectedClass$: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  _selectedClass: Observable<string> = this.selectedClass$.asObservable();

  private classSpellList$: BehaviorSubject<SpellInterface[]> =
    new BehaviorSubject<SpellInterface[]>([]);
  _classSpellList: Observable<SpellInterface[]> =
    this.classSpellList$.asObservable();

  private _ClassList: string[] = [
    'Artificer',
    'Bard',
    'Cleric',
    'Druid',
    'Paladin',
    'Ranger',
    'Sorcerer',
    'Warlock',
    'Wizard',
  ];

  private _fileRoute: string = 'assets/csv/';

  constructor() {}

  getClassList(): string[] {
    return this._ClassList;
  }

  fnUpdateSelectedClass(className: string): void {
    this.selectedClass$.next(className);
    this.fnGetCsvFile();
  }

  fnCleanSelectedClass(): void {
    this.selectedClass$.next(null!);
    this.fnGetCsvFile();
  }

  private fnGetCsvFile() {
    let filePath = this._fileRoute + this.selectedClass$.value + '.csv';
    Papa.parse(filePath, {
      download: true,
      delimiter: ';', // Especificar el delimitador como coma
      header: false,
      skipEmptyLines: true,
      complete: (results: any) => {
        this.fnParseSuccess(results);
      },
      error: (error: any) => {
        // Manejar errores de parseo aquí
        console.error('Error al parsear el archivo CSV:', error);
      },
    });
  }

  fnParseSuccess(results: any) {
    // Convertir el array de arrays en un array de objetos con estructura SpellInterface
    let spellList: SpellInterface[] = results.data.map((spell: any) => {
      return {
        _level: spell[0],
        _name: spell[1],
        _school: spell[2],
        _castingTime: spell[3],
        _range: spell[4],
        _components: spell[5],
        _duration: spell[6],
        _description: spell[7],
      };
    });
    this.classSpellList$.next(spellList);
  }
}
