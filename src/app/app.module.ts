import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ExcelServiceService } from "./excel-service.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ExcelServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
