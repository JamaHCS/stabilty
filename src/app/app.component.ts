import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';
import { SpotService } from 'src/app/core/services/spot/spot.service';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'stability';

  constructor(
    private primengConfig: PrimeNGConfig,
    private renderer: Renderer2,
    private spotService: SpotService
  ) {
    this.spotService.init(this.renderer);
  }

  ngOnInit(): void {
    this.primengConfig.zIndex = {
      modal: 11000,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100,
    };

    this.primengConfig.filterMatchModeOptions = {
      text: [
        FilterMatchMode.STARTS_WITH,
        FilterMatchMode.CONTAINS,
        FilterMatchMode.NOT_CONTAINS,
        FilterMatchMode.ENDS_WITH,
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
      ],
      numeric: [
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
        FilterMatchMode.LESS_THAN,
        FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
        FilterMatchMode.GREATER_THAN,
        FilterMatchMode.GREATER_THAN_OR_EQUAL_TO,
      ],
      date: [
        FilterMatchMode.DATE_IS,
        FilterMatchMode.DATE_IS_NOT,
        FilterMatchMode.DATE_BEFORE,
        FilterMatchMode.DATE_AFTER,
      ],
    };

    this.primengConfig.setTranslation({
      startsWith: 'Comienza con',
      contains: 'Contiene',
      notContains: 'No contiene',
      endsWith: 'Termina con',
      equals: 'Igual',
      notEquals: 'No igual',
      noFilter: 'Sin filtro',
      lt: 'Menor que',
      lte: 'Menor o igual que',
      gt: 'Mayor que',
      gte: 'Mayor o igual que',
      is: 'Es',
      isNot: 'No es',
      before: 'Antes',
      after: 'Después',
      dateIs: 'Fecha es',
      dateIsNot: 'Fecha no es',
      dateBefore: 'Fecha antes',
      dateAfter: 'Fecha después',
      clear: 'Limpiar',
      apply: 'Aplicar',
      matchAll: 'Coincidir todo',
      matchAny: 'Coincidir cualquier',
      addRule: 'Agregar regla',
      removeRule: 'Eliminar regla',
      accept: 'Aceptar',
      reject: 'Rechazar',
      choose: 'Elegir',
      upload: 'Subir',
      cancel: 'Cancelar',
      dayNames: [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
      ],
      dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
      monthNames: [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
      ],
      monthNamesShort: [
        'ene',
        'feb',
        'mar',
        'abr',
        'may',
        'jun',
        'jul',
        'ago',
        'sep',
        'oct',
        'nov',
        'dic',
      ],
      dateFormat: 'dd/mm/yy',
      firstDayOfWeek: 1,
      today: 'Hoy',
      weekHeader: 'Sem',
      weak: 'Débil',
      medium: 'Medio',
      strong: 'Fuerte',
      passwordPrompt: 'Contraseña',
      emptyMessage: 'No hay datos',
      emptyFilterMessage: 'No hay resultados',
    });
  }
}
