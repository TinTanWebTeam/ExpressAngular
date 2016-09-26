import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment/moment';
import 'moment/locale/vi';
declare var $: JQueryStatic;

@Component({
    moduleId: module.id,
    selector: 'm-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    private dateTimeNowVi: String;
    constructor(){
        this.dateTimeNowVi =  moment().locale('vi').format('LLLL');
    }

    ngOnInit() {

    }
}
