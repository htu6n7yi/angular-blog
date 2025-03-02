import { Component, Input , OnInit} from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {

  @Input ()
  photoCover: string = "https://th.bing.com/th/id/OIP.Isy8LFQTDSQVRIIBetscIgHaFj?w=238&h=180&c=7&r=0&o=5&pid=1.7";
  @Input ()
  cardTitle: string = "SAIBA TUDO SOBRE DAYSE JHONSON";

  constructor() {}

  ngOnInit() {}

}
