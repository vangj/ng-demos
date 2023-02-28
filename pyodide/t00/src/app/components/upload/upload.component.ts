import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  upload(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;

    if (files.length < 1) {
      return;
    }

    const file = files.item(0) as File;

    if (file.size < 1 || file.type !== 'text/csv') {
      return;
    }

    // console.log(file);

    const reader = new FileReader();

    reader.onload = (e: ProgressEvent) => {
      console.log('onload');
    };
    reader.onprogress = (e: ProgressEvent) => {
      console.log('onprogress');
    };
    reader.onloadend = (e: ProgressEvent) => {
      console.log('onloadend');
      const content = reader.result;
      // console.log(content);

      fetch('assets/py/load-data.py')
        .then(r => r.text())
        .then(script => {
          console.log(script);
        });
    };

    reader.readAsText(file);
  }

}
