import { ExcelUtility } from './ExcelUtility';
import 'igniteui-webcomponents-grids/grids/combined';
import { ModuleManager } from "igniteui-webcomponents-core";
import { IgcGridComponent, IgcGroupingExpression, SortingDirection, IgcColumnComponent } from 'igniteui-webcomponents-grids/grids';
import { InvoicesDataItem, InvoicesData } from './InvoicesData';
import { IgcGroupByRowTemplateContext, IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { IgcPieChartModule } from "igniteui-webcomponents-charts";
import { html, nothing } from 'lit-html';
import { defineComponents, IgcTabsComponent, IgcAvatarComponent } from "igniteui-webcomponents";
import './index.css';
import { CellFill, IWorksheetCellFormat, IWorksheetCellFormatProxyContext_$type, Workbook, WorkbookColorInfo, Worksheet, WorksheetRowCollection } from 'igniteui-webcomponents-excel';
import { WorkbookFormat } from 'igniteui-webcomponents-excel';
import { IgcSpreadsheetComponent } from 'igniteui-webcomponents-spreadsheet';
import { IgcExcelModule } from 'igniteui-webcomponents-excel';
import { Color } from 'igniteui-webcomponents-core';
// @ts-ignore
import pathToXlsxFile from './template.xlsx';

import "igniteui-webcomponents-grids/grids/themes/light/bootstrap.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";

defineComponents(IgcTabsComponent, IgcAvatarComponent);
ModuleManager.register(IgcPieChartModule,IgcExcelModule);

export class Sample {

    private grid: IgcGridComponent

    private column1: IgcColumnComponent
    private unitPriceColumn: IgcColumnComponent
    private _bind: () => void;

    private spreadsheet: IgcSpreadsheetComponent;

    private cf:IWorksheetCellFormat;
    private cellFill: CellFill;

    constructor() {
        var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
        var column1 = this.column1 = document.getElementById('column1') as IgcColumnComponent;
        var unitPriceColumn = this.unitPriceColumn = document.getElementById('UnitPriceColumn') as IgcColumnComponent;
        this._bind = () => {
            grid.data = this.invoicesData;
            grid.groupRowTemplate = this.webGridGroupByRowTemplate;
            column1.bodyTemplate = this.webGridBooleanCellTemplate;
            unitPriceColumn.bodyTemplate = this.unitPriceCellTemplate;
            grid.detailTemplate = this.detailTemplate;
        }
        this._bind();
        const toXls1Btn = document.getElementById('toXls1') as HTMLButtonElement;
        toXls1Btn!.addEventListener('click', this.toXls1Func);

        const toXls2Btn = document.getElementById('toXls2') as HTMLButtonElement;
        toXls2Btn!.addEventListener('click', this.toXls2Func);

        window.addEventListener('load', (event) => {
            var igcGridToolbar = document.getElementsByTagName('igc-grid-toolbar')[0];
            var igxGridGroupByArea = document.getElementsByTagName('igx-grid-group-by-area')[0];

            const divContainer = document.createElement('div');
            divContainer.className = "custom-div-container";

            var parentElement = igcGridToolbar.parentNode;
            parentElement.replaceChild(divContainer, igcGridToolbar);
            parentElement.removeChild(igxGridGroupByArea);

            divContainer.appendChild(igcGridToolbar);
            divContainer.appendChild(igxGridGroupByArea);
        });
    }

    public toXls1Func = (e: any) => {
        ExcelUtility.loadFromUrl(pathToXlsxFile).then((w) => {
            for (let i = 0; i < this.invoicesData.length; i++) {
                const items = this.invoicesData[i];
                const xlRow = w.worksheets(0).rows(i + 1);
                xlRow.setCellValue(0, items.ShipCity);
                xlRow.setCellValue(1, items.ShipperName);
                xlRow.setCellValue(2, items.ExtendedPrice);
            }
            ExcelUtility.save(w, 'filledOut');
        });
    }

    public toXls2Func = (e: any) => {
        const wb = new Workbook(WorkbookFormat.Excel2007);
        const ws = wb.worksheets().add("Sheet1");

        ws.rows(0).cells(0).value = "ShipperName-1";
        ws.rows(0).cells(1).value = "ShipperName-2";
        ws.rows(0).cells(2).value = "UnitPrice";

        for (let i = 0; i < this.invoicesData.length; i++) {
            const items = this.invoicesData[i];
            const xlRow = ws.rows(i + 1);
            xlRow.setCellValue(0, items.ShipperName.split(' ')[0]);
            xlRow.setCellValue(1, items.ShipperName.split(' ')[1]);
            xlRow.setCellValue(2, items.UnitPrice);
            if (items.UnitPrice > 20000) {
                let red = new Color();
                red.colorString = "#ff0000";
                xlRow.cells(2).cellFormat.fill = CellFill.createSolidFill(new WorkbookColorInfo(red));
            }
        }

        ExcelUtility.save(wb, 'createdFromScratch');
    }

    public unitPriceCellTemplate = (ctx: IgcCellTemplateContext) => {
        return html`
           $ ${ctx.cell.value}
        `;
    }

    private detailTemplate = (context: any) => {
        const dataItem = context.$implicit;
        return html`
            <igc-tabs>
                <igc-tab>
                    Details
                </igc-tab>
                <igc-tab>
                    Deals
                </igc-tab>
                <igc-tab-panel>
                    <h3>${dataItem.CustomerName}</h3>
                    <ul>
                        <li>CustomerID: ${dataItem.CustomerID}</li>
                        <li>CustomerAddress: ${dataItem.CustomerAddress}</li>
                    </ul>
                </igc-tab-panel>
                <igc-tab-panel>
                    <igc-pie-chart
                        class="details-chart"
                        .dataSource="${this.getPieData(dataItem)}"
                        .formatLabel="${this.formatPieLabel}"
                        outlines="transparent"
                        labels-position="insideEnd"
                        leader-line-visibility="collapsed"
                        label-member-path="Label"
                        value-member-path="Value"
                    >
                    </igc-pie-chart>
                </igc-tab-panel>
            </igc-tabs>
        `;
    };

    private getPieData(dataItem: any) {
        return [
            { Label: "UnitPrice", Value: dataItem.UnitPrice },
            { Label: "ExtendedPrice", Value: dataItem.ExtendedPrice },
        ];
    }

    private formatPieLabel = (args: any) => args.item.Value + " " + args.item.Label;

    private _invoicesData: InvoicesData = null;
    public get invoicesData(): InvoicesData {
        if (this._invoicesData == null)
        {
            this._invoicesData = new InvoicesData();
        }
        return this._invoicesData;
    }

        public webGridGroupByRowTemplate = (ctx: any) => {
            const groupRow: any = ctx["$implicit"];
            const values = groupRow.records;

            const startDate = new Date('1/1/2022');
            const endDate = new Date('12/31/2022');
            var calc2022 = values.filter((x: { orderDate: string | number | Date; }) => new Date(x.orderDate) >= startDate && new Date(x.orderDate) <= endDate).length;

            return html`<div>
    <span style="color:#09f;">${groupRow.expression.fieldName} :</span>
    <span>${groupRow.value}</span>
    <igc-badge>${groupRow.records.length}</igc-badge>
    <span style="color:#09f;"> Ordered in 2022:</span><span>${calc2022}</span>
    </div>`;

        };

        public webGridBooleanCellTemplate = (ctx: IgcCellTemplateContext) => {
            if (ctx.cell.value) {
                return html`<img src="https://www.infragistics.com/angular-demos-lob/assets/images/grid/active.png" title="Continued" alt="Continued" />`
            } else {
                return html`<img src="https://www.infragistics.com/angular-demos-lob/assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />`;
            }
    }

}

new Sample();
