import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() url = ''
  
  postDate = new Date
  isOnline = true
}
