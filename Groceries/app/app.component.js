"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.email = "nativescriptrocks@telerik.com";
        this.isLoggingIn = true;
    }
    AppComponent.prototype.submit = function () {
        alert("You’re using: " + this.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0M7QUFpQnhDO0lBZkE7UUFnQkksVUFBSyxHQUFHLCtCQUErQixDQUFDO1FBQ3hDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBUXZCLENBQUM7SUFORyw2QkFBTSxHQUFOO1FBQ0ksS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsb0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFUUSxZQUFZO1FBZnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsb29CQVVUO1lBQ0QsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7U0FDdkUsQ0FBQztPQUNXLFlBQVksQ0FVeEI7SUFBRCxtQkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9sb2dvX2xvZ2luXCIgc3RyZXRjaD1cIm5vbmVcIiBob3Jpem9udGFsQWxpZ25tZW50PVwiY2VudGVyXCI+PC9JbWFnZT5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cIkVtYWlsIEFkZHJlc3NcIiBrZXlib2FyZFR5cGU9XCJlbWFpbFwiIFsobmdNb2RlbCldPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiPjwvVGV4dEZpZWxkPlxuXG4gICAgICAgICAgICA8QnV0dG9uIFt0ZXh0XT1cImlzTG9nZ2luZ0luID8gJ1NpZ24gaW4nIDogJ1NpZ24gdXAnXCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCIgKHRhcCk9XCJzdWJtaXQoKVwiPjwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBbdGV4dF09XCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICdCYWNrIHRvIGxvZ2luJ1wiICh0YXApPVwidG9nZ2xlRGlzcGxheSgpXCI+PC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICBlbWFpbCA9IFwibmF0aXZlc2NyaXB0cm9ja3NAdGVsZXJpay5jb21cIjtcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGFsZXJ0KFwiWW914oCZcmUgdXNpbmc6IFwiICsgdGhpcy5lbWFpbCk7XG4gICAgfVxuICAgIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICB9XG59Il19