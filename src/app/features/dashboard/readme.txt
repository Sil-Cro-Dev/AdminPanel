<!--<app-list-->
<!--  fxFlex="35" fxFlex.lt-lg="40" fxFlex.lt-md="100"-->
<!--  class="m8"-->
<!--  [title]="title"-->
<!--  [columnToShow]="columnToShow"-->
<!--  [dataSource]="dataSource"-->
<!--  [hasImage]="avatarField"-->
<!--  [hasCheckbox]="''"-->
<!--&gt;</app-list>-->

<!--<app-form-->
<!--  fxFlex="35" fxFlex.lt-lg="40" fxFlex.lt-md="100"-->
<!--  class="m8"-->
<!--  [title]="'AGGIUNGI A RUBRICA'"-->
<!--  [formFields]="formFields"-->
<!--  [details]="detailsToExport">-->
<!--</app-form>-->




  dataSource: any;

  title: string = 'Rubrica';
  columnToShow: string[] = ['cognome', 'nome', 'numero'];
  avatarField: string = 'avatar';

  constructor(private folksService: RubricaService) {
  }

  ngOnInit(): void {
    this.folksService.getFolks().subscribe(res => this.dataSource = res)
  }

}
