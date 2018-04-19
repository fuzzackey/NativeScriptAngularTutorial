"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isLoggingIn = true;
        this.user = new user_1.User();
    }
    AppComponent.prototype.submit = function () {
        alert("You’re using: " + this.user.email);
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./pages/login/login.html",
            styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsMkNBQTBDO0FBTzFDO0lBSUk7UUFGQSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUdmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsNkJBQU0sR0FBTjtRQUNJLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxvQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQVpRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7U0FDM0UsQ0FBQzs7T0FDVyxZQUFZLENBYXhCO0lBQUQsbUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9zaGFyZWQvdXNlci91c2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICB1c2VyOiBVc2VyO1xuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgIH1cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGFsZXJ0KFwiWW914oCZcmUgdXNpbmc6IFwiICsgdGhpcy51c2VyLmVtYWlsKTtcbiAgICB9XG4gICAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgIH1cbn0iXX0=