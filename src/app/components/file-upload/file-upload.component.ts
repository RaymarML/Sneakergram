import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/storage";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  //Inspirado de https://fireship.io/lessons/angular-firebase-storage-uploads-multi/

  @Input() file: File;
  @Output() fileEmitter: EventEmitter<string> = new EventEmitter<string>();

  task: AngularFireUploadTask;
  percentage: Observable<number>;

  constructor(
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.startUpload()
  }

  startUpload() {
    const path = 'images/' + Date.now() + this.file.name;
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, this.file);

    this.percentage = this.task.percentageChanges();

    this.task.snapshotChanges().pipe(
      finalize( async() => {
        const downloadUrl = await ref.getDownloadURL().toPromise();
        this.fileEmitter.emit(downloadUrl);
      })
    ).subscribe(value => {

    })

  }


}
