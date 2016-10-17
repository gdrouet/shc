import { Component, OnInit } from "@angular/core";

@Component({
    selector: "wrapper",
    templateUrl: "./app/component/wrapper.html",
})

export class AppWrapper implements OnInit {
    ngOnInit() {
        console.log("Wrapper initialized");
    }
}
