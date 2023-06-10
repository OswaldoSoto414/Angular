import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { HighlightDirective } from './directiva/highlight.directive';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { CalcPipe } from './pipe/calc.pipe';
import { GuardiasGuard } from './guards/guardias.guard';
import { ServiciosService } from './servicios/servicios.service';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    DirectivaComponent,
    HighlightDirective,
    SegundoComponenteComponent,
    CalcPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GuardiasGuard, ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
