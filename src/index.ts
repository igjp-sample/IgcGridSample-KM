import 'igniteui-webcomponents-grids/grids/combined';
import { ModuleManager } from "igniteui-webcomponents-core";
import { IgcGridComponent, IgcGroupingExpression, SortingDirection, IgcColumnComponent } from 'igniteui-webcomponents-grids/grids';
import { InvoicesDataItem, InvoicesData } from './InvoicesData';
import { IgcGroupByRowTemplateContext, IgcCellTemplateContext } from 'igniteui-webcomponents-grids/grids';
import { IgcPieChartModule } from "igniteui-webcomponents-charts";
import { html, nothing } from 'lit-html';
import { defineComponents, IgcTabsComponent, IgcAvatarComponent } from "igniteui-webcomponents";
import './index.css';

import "igniteui-webcomponents-grids/grids/themes/light/bootstrap.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";

defineComponents(IgcTabsComponent, IgcAvatarComponent);
ModuleManager.register(IgcPieChartModule);

export class Sample {

    private grid: IgcGridComponent

    private column1: IgcColumnComponent
    private _bind: () => void;

    constructor() {
        var grid = this.grid = document.getElementById('grid') as IgcGridComponent;
        var column1 = this.column1 = document.getElementById('column1') as IgcColumnComponent;

        this._bind = () => {
            grid.data = this.invoicesData;
            grid.groupRowTemplate = this.webGridGroupByRowTemplate;
            column1.bodyTemplate = this.webGridBooleanCellTemplate;
            grid.detailTemplate = this.detailTemplate;
        }
        this._bind();

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

        public webGridGroupByRowTemplate = (ctx: IgcGroupByRowTemplateContext) => {

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
