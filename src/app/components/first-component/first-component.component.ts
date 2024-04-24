import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name = "Hideraldo";
  idade = 52;
  hobbie = ['estudar', 'trabalhar', 'dormir','ciclismo']
  carro = {nome: 'Onix', placa: 'frj7698', ano: '2014'}



}
