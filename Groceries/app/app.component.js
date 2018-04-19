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
            template: "\n        <StackLayout>\n            <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n            <TextField hint=\"Email Address\" keyboardType=\"email\" [text]=\"email\"\n                       autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n            <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n            <Button text=\"Sign in\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n            <Button text=\"Sign up for Groceries\"></Button>\n        </StackLayout>\n    ",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFpQnhDO0lBZkE7UUFnQkksVUFBSyxHQUFHLCtCQUErQixDQUFDO0lBSTVDLENBQUM7SUFIRyw2QkFBTSxHQUFOO1FBQ0ksS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSlEsWUFBWTtRQWZ4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLGlqQkFVVDtZQUNELFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3ZFLENBQUM7T0FDVyxZQUFZLENBS3hCO0lBQUQsbUJBQUM7Q0FBQSxBQUxELElBS0M7QUFMWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vbG9nb19sb2dpblwiIHN0cmV0Y2g9XCJub25lXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiPjwvSW1hZ2U+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJFbWFpbCBBZGRyZXNzXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIiBbdGV4dF09XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVwiUGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCI+PC9UZXh0RmllbGQ+XG5cbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlNpZ24gaW5cIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIiAodGFwKT1cInN1Ym1pdCgpXCI+PC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTaWduIHVwIGZvciBHcm9jZXJpZXNcIj48L0J1dHRvbj5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIGVtYWlsID0gXCJuYXRpdmVzY3JpcHRyb2Nrc0B0ZWxlcmlrLmNvbVwiO1xuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgYWxlcnQoXCJZb3XigJlyZSB1c2luZzogXCIgKyB0aGlzLmVtYWlsKTtcbiAgICB9XG59Il19