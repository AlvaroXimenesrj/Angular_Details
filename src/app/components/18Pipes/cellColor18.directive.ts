import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: "td[paApplyColor]"
})

export class PaCellColor18{

    @HostBinding("class")
    bgClass: string = "";

    setColor(dark: Boolean) {
        this.bgClass = dark ? "bg-dark" : "";
    }
}