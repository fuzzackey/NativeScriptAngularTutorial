"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./shared/user/user.service");
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
    }
    AppComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    AppComponent.prototype.login = function () {
        // TODO: Define
    };
    AppComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService],
            templateUrl: "./pages/login/login.html",
            styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBdUQ7QUFDdkQsc0NBQXdDO0FBRXhDLDJDQUF3QztBQVF4QztJQUlJLHNCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUY1QyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUdmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNMLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksZUFBZTtJQUNuQixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUMvQixTQUFTLENBQ047WUFDSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUNELGNBQU0sT0FBQSxLQUFLLENBQUMsc0RBQXNELENBQUMsRUFBN0QsQ0FBNkQsQ0FDdEUsQ0FBQztJQUNWLENBQUM7SUFDRCxvQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQWhDUSxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1lBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7U0FDM0UsQ0FBQzt5Q0FLbUMsMEJBQVc7T0FKbkMsWUFBWSxDQWlDeEI7SUFBRCxtQkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi9zaGFyZWQvdXNlci91c2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgdXNlcjogVXNlcjtcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgLy8gVE9ETzogRGVmaW5lXG4gICAgfVxuXG4gICAgc2lnblVwKCkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgIH1cbn0iXX0=