import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.less']
})
export class PropertyComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    
  }
  urls = [];
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.urls.push(event.target.result); 
                }
                console.log(this.urls);

                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

}
