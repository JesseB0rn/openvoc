import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CSVToArray } from 'src/app/utilities/csv-parser';
import { validCSVValidator } from 'src/app/validators/validCSV';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  createGroup: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    csv: ['', [Validators.required, validCSVValidator]],
  });

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {}

  createDeck() {
    console.log(CSVToArray(this.createGroup.value['csv'], '\t'));
  }
}
