import {Component, OnDestroy} from "@angular/core";
import {ManService} from "./shared/man.service";
import {ManBuilder} from "./shared/models/man.builder";
import {IMan} from "./shared/interfaces/man.interface";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";


@Component({
  styleUrls: ['../../../../preview.component.scss', './builder.component.scss'],
  template: `
    <mat-card class="category">
      <div class="man">
        <div class="man__controls">
          <mat-slide-toggle (toggleChange)="toggleSlide(0)" [checked]="man?.head">Head</mat-slide-toggle>
          <mat-slide-toggle (toggleChange)="toggleSlide(1)" [checked]="man?.body">Body</mat-slide-toggle>
        </div>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="1280.000000pt" height="1279.000000pt" viewBox="0 0 1280.000000 1279.000000"
             preserveAspectRatio="xMidYMid meet" *ngIf="man">
          <g transform="translate(0.000000,1279.000000) scale(0.100000,-0.100000)"
             fill="#000000" stroke="none">

            <path *ngIf="man?.head" d="M4130 12784 c-19 -2 -80 -9 -135 -15 -307 -32 -649 -136 -923 -280 -561 -293 -924 -760 -1009 -1293 -19 -125 -13 -403 12 -515 109 -488 441 -908 935 -1184 614 -344 1385 -427 2089 -226 668 191 1188 621 1401 1157 127 321 141 656 40 983 -213 690 -917 1215 -1810 1350 -129 19 -509 34 -600 23z"/>
            <path *ngIf="man?.body"  d="M485 9986 c-188 -44 -340 -159 -420 -321 -66 -133 -82 -306 -41 -438 59 -188 213 -345 393 -400 l72 -22 12 -55 c17 -84 67 -227 107 -305 180 -359 540 -612 1030 -725 744 -171 1872 -35 3212 385 113 36 208 65 211 65 2 0 -10 -73 -28 -162 -293 -1460 280 -3879 1210 -5108 61 -80 121 -157 135 -172 l26 -28 -167 0 c-92 0 -290 -9 -440 -20 -1496 -113 -2438 -607 -2782 -1460 -35 -87 -83 -274 -91 -355 -4 -36 -11 -64 -15 -63 -4 2 -40 31 -78 66 -236 211 -625 422 -896 486 -232 55 -378 40 -464 -48 -37 -38 -42 -48 -50 -112 -7 -62 -5 -77 19 -150 176 -521 1216 -1162 1662 -1024 47 14 74 30 105 62 37 39 42 49 48 108 6 53 3 80 -15 140 -27 90 -110 228 -196 325 l-62 70 8 75 c40 382 233 749 543 1032 540 494 1447 761 2697 795 l246 6 49 -55 c74 -82 246 -208 365 -268 86 -43 124 -56 212 -72 105 -18 109 -18 206 1 84 16 111 27 172 66 40 26 79 49 86 52 8 3 44 -17 81 -45 287 -211 665 -396 1023 -500 534 -156 1053 -174 1620 -58 124 25 250 55 280 65 30 11 141 48 245 84 107 37 263 101 358 146 92 45 169 81 171 81 2 0 6 -17 9 -38 4 -20 27 -92 51 -158 185 -503 620 -1035 993 -1217 117 -57 202 -69 278 -39 146 57 161 295 40 623 -214 574 -776 1196 -1135 1253 -73 12 -80 11 -132 -11 -47 -21 -58 -31 -86 -81 -28 -53 -32 -68 -34 -157 l-3 -99 -172 -83 c-111 -53 -256 -112 -405 -164 -597 -206 -1166 -257 -1728 -154 -407 75 -814 234 -1160 455 -118 75 -229 152 -229 160 -1 3 22 33 50 65 72 85 167 280 222 455 357 1137 33 3222 -730 4700 -254 493 -560 901 -834 1112 l-92 72 144 38 c231 61 688 145 969 177 1030 119 1914 -41 2586 -470 442 -281 801 -682 1034 -1154 65 -132 150 -336 150 -359 0 -6 -31 -25 -68 -43 -123 -58 -226 -163 -291 -297 -57 -118 -75 -199 -75 -341 0 -144 16 -213 78 -340 120 -244 355 -380 598 -344 232 34 434 230 504 489 27 100 25 301 -4 403 -86 302 -334 500 -605 485 l-59 -3 -32 90 c-88 245 -246 535 -415 759 -719 956 -1897 1372 -3401 1201 -297 -34 -713 -110 -989 -182 l-214 -56 -76 37 c-52 26 -109 43 -180 56 -103 18 -107 18 -205 -1 -137 -27 -241 -91 -348 -217 -83 -97 -189 -291 -227 -418 l-22 -71 -242 -76 c-703 -221 -1379 -372 -1962 -438 -284 -32 -756 -33 -985 -1 -626 86 -1030 324 -1232 727 -37 73 -91 224 -102 286 l-6 36 66 2 c183 4 362 104 471 263 65 97 94 184 100 308 10 172 -48 321 -171 445 -78 79 -147 122 -246 155 -83 27 -223 35 -305 16z"/>

          </g>
        </svg>
      </div>
    </mat-card>
  `
})
export class BuilderComponent implements OnDestroy{

  public man: IMan;

  private destroySubject$: Subject<void> = new Subject<void>();

  constructor(
    public _man: ManService
  ) {
    this._man.getMan$()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe(man => this.man = man)
  }

  ngOnDestroy() {
    this.destroySubject$.next();
  }

  toggleSlide(index: number): void {
    switch (index) {
      case 0:
        this.man.head ? this._man.builder.removeHead() : this._man.builder.buildHead();
        break;
      case 1:
        this.man.body ? this._man.builder.removeBody() : this._man.builder.buildBody();
        break;
    }

    this._man.updateMan();
  }

}
