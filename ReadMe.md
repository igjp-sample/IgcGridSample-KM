## Requirements

sample demo
https://igjp-sample.github.io/IgcGridSample-KM/

- [x] Q1. Add a custom button to the grid header (where the column hiding button is)<br>**=> You can see the "custom" button on the grid header.**

- [x] Q2. Modify the style/icons of existing buttons in the grid header (for example the column hiding button icon)<br>**=> We don't have built-in option for customizing these action buttons, but there are two ways to archive that.If you want to see an example, please let me know.**
1. Use CSS: hide existing icon and add new icon you want by using css background image.
2. Adding custom button having function for example column hiding on your own.**

- [ ] Q3. Include a custom button in the same row as the “Group By” fields (minimise vertical space usage).  Example below combines Group By, selection, paging and action buttons into one header.

- [ ] Q4. An example showing how the style/location of paging elements can be modified.  I.e. could we use a dropdown instead of just left/right arrows?  Refer to image above.

- [x] Q5. Using checkbox to select all rows in a “group by” field similar to below:<br>**=> Can do just combining row selector and group by functions.**

- [x] Q6. Achieving a master/detail view similar to below:<br>**=> We have master-detail function on our grid, in the sample, I implemented our tab control and chart control into master-detail view, it means you can do whatever you want inside a master-detail view.**

- [x] Q7. Exporting to excel using custom data transforms (i.e turning $1,234 into 1234), or a composite field like “AUD 1,234” into 2 columns “AUD” and “1234”.:<br>**=> There are several way to achive this. In order to do with #2 and #3, ExcelLibrary will be used to generate Excel files from the data, rather than the grid's built-in export function.**
    1. By using cell template, it is possible to change only the format of the data when displayed on the grid, without changing the data itself. You can see that the dollar mark in the UnitPrice column are not included when you export from the Export button in the upper right corner on sample.
    2. Prepare a template Excel file for output and use ExcelLibrary to pour data into the template Excel file, which will reflect the predefined format in the template Excel file. You can see what is done by clicking "to xls(1)" button on sample. You can also check [here](src/template.xlsx) is the template excel file.
    3. Instead of using a template as in Method #2, converting values as you want and placing to sheet by writing the code. You can click "to xls(2)" button to see ShipperName data will be separated by blank space and will be placed column 1 and 2 on excel.

- [x] Q8. Exporting to excel including cell templating (i.e. red cell on screen becomes red cell in excel):<br>**=> This is also can be by using ExcelLibary. It is possible to get the cell style by accessing each cell then reflect it to cells on excel, however since that is redundant, I would recommend defining your own style that determines the value when writing the value to the cell and applies it when needed. You can see clicking "to xls(2)" that the value of UnitPrice column chages the background color to red if the value is higher than 20000.**

## How to run

open above folder in VS Code or type:
```
code .
```

In terminal window, run:

```
npm install
npm run start
```

Then open http://localhost:4200/ in your browser


## Learn More

To learn more about **Ignite UI for Web Components**, check out the [Web Components documentation](https://infragistics.com/webcomponentssite/components/general-getting-started.html).
