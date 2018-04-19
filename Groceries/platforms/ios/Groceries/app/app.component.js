"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.email = "nativescriptrocks@telerik.com";
    }
    AppComponent.prototype.submit = function () {
        alert("You’re using: " + this.email);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n        <StackLayout>\n            <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n            <TextField hint=\"Email Address\" keyboardType=\"email\"\n                       autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n            <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n            <Button text=\"Sign in\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n            <Button text=\"Sign up for Groceries\"></Button>\n        </StackLayout>\n    ",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFpQnhDO0lBZkE7UUFnQkksVUFBSyxHQUFHLCtCQUErQixDQUFDO0lBSTVDLENBQUM7SUFIRyw2QkFBTSxHQUFOO1FBQ0ksS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSlEsWUFBWTtRQWZ4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLGdpQkFVVDtZQUNELFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3ZFLENBQUM7T0FDVyxZQUFZLENBS3hCO0lBQUQsbUJBQUM7Q0FBQSxBQUxELElBS0M7QUFMWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vbG9nb19sb2dpblwiIHN0cmV0Y2g9XCJub25lXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiPjwvSW1hZ2U+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJFbWFpbCBBZGRyZXNzXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiPjwvVGV4dEZpZWxkPlxuXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTaWduIGluXCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCIgKHRhcCk9XCJzdWJtaXQoKVwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiU2lnbiB1cCBmb3IgR3JvY2VyaWVzXCI+PC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBlbWFpbCA9IFwibmF0aXZlc2NyaXB0cm9ja3NAdGVsZXJpay5jb21cIjtcbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGFsZXJ0KFwiWW914oCZcmUgdXNpbmc6IFwiICsgdGhpcy5lbWFpbCk7XG4gICAgfVxufSJdfQ==