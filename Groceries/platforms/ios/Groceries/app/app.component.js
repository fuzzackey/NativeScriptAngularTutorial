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
            template: "\n        <StackLayout>\n            <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n            <TextField hint=\"Email Address\" keyboardType=\"email\" [(ngModel)]=\"email\"\n                       autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n            <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n            <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n            <Button [text]=\"isLoggingIn ? 'Sign up' : 'Back to login'\" (tap)=\"toggleDisplay()\"></Button>\n        </StackLayout>\n    ",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFpQnhDO0lBZkE7UUFnQkksVUFBSyxHQUFHLCtCQUErQixDQUFDO0lBSTVDLENBQUM7SUFIRyw2QkFBTSxHQUFOO1FBQ0ksS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSlEsWUFBWTtRQWZ4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLG9vQkFVVDtZQUNELFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3ZFLENBQUM7T0FDVyxZQUFZLENBS3hCO0lBQUQsbUJBQUM7Q0FBQSxBQUxELElBS0M7QUFMWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8U3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vbG9nb19sb2dpblwiIHN0cmV0Y2g9XCJub25lXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiPjwvSW1hZ2U+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJFbWFpbCBBZGRyZXNzXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIiBbKG5nTW9kZWwpXT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIj48L1RleHRGaWVsZD5cblxuICAgICAgICAgICAgPEJ1dHRvbiBbdGV4dF09XCJpc0xvZ2dpbmdJbiA/ICdTaWduIGluJyA6ICdTaWduIHVwJ1wiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiICh0YXApPVwic3VibWl0KClcIj48L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gW3RleHRdPVwiaXNMb2dnaW5nSW4gPyAnU2lnbiB1cCcgOiAnQmFjayB0byBsb2dpbidcIiAodGFwKT1cInRvZ2dsZURpc3BsYXkoKVwiPjwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgZW1haWwgPSBcIm5hdGl2ZXNjcmlwdHJvY2tzQHRlbGVyaWsuY29tXCI7XG4gICAgc3VibWl0KCkge1xuICAgICAgICBhbGVydChcIllvdeKAmXJlIHVzaW5nOiBcIiArIHRoaXMuZW1haWwpO1xuICAgIH1cbn0iXX0=