import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }

  temperatura = 0
  tempFinal = 0

  tempC() {
    this.tempFinal = (this.temperatura - 32) * (5 / 9)
  }

  tempF() {
    this.tempFinal = (this.temperatura * 9 + 160) / 5
  }

  lado1 = 0
  lado2 = 0
  lado3 = 0
  resTriangulo = ""

  checarTriangulo() {

    if (this.lado1 == this.lado2 && this.lado1 == this.lado3 && this.lado2 == this.lado3) {
      this.resTriangulo = "Equilatero"
    }
    else if (this.lado1 == this.lado2 || this.lado1 == this.lado3 || this.lado2 == this.lado3) {
      this.resTriangulo = "Isóceles"
    }
    else {
      this.resTriangulo = "Escaleno"
    }
  }

  nota1 = 0
  nota2 = 0
  nota3 = 0
  nota4 = 0
  final = 0
  mediaFinal = ""

  checarMedia() {
    this.final = this.nota1 + this.nota2 + this.nota3 + this.nota4

    if (this.final > 24) {
      this.mediaFinal = "Acima da média. Parabéns você passou!"
    }
    else if (this.final > 12 && this.final < 23.6) {
      this.mediaFinal = "De recuperação!"
    }
    else {
      this.mediaFinal = "Retido!"
    }
  }
}
