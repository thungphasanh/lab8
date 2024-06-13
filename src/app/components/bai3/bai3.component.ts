import { Component } from '@angular/core';
import { nhakhoahoc } from '../../nhakhoahoc';

@Component({
  selector: 'app-bai3',
  standalone: true,
  imports: [],
  templateUrl: './bai3.component.html',
  styleUrl: './bai3.component.css'
})
export class Bai3Component {
  listNhaKhoaHoc: nhakhoahoc[] = [
    { id: 1, ho: "Duong Tiến", ten: "Công", sinh: 1997, mat: 2080 },
    { id: 1, ho: "Duong Tiến", ten: "Công", sinh: 1997, mat: 2080 },
    { id: 1, ho: "Duong Tiến", ten: "Công", sinh: 1997, mat: 2080 },
    { id: 1, ho: "Duong Tiến", ten: "Công", sinh: 1997, mat: 2080 },
    { id: 1, ho: "Duong Tiến", ten: "Công", sinh: 1997, mat: 2080 },
    { id: 1, ho: "Duong Tiến", ten: "Công", sinh: 1997, mat: 2080 }
  ];
  show(codehtml: string) {
    let kq = document.getElementById("ds") as HTMLElement;
    kq.innerHTML = codehtml;
  };
  render() {
    let codehtml = this.listNhaKhoaHoc.map(nkh => {
      return `
      <p>${nkh.ho} ${nkh.ten} (${nkh.sinh}"-"${nkh.mat}) ${nkh.mat - nkh.sinh} tuổi</p>
    `;
    }).join(" ");
    this.show(codehtml);
  }
}
