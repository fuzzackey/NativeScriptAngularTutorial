import { Color } from "color";
import { View } from "ui/core/view";
import { Page } from "ui/page";
import { Router } from "@angular/router";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
@Component({
    selector: "my-app",
    providers: [UserService],
    templateUrl: "./pages/login/login.html",
    styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
})
export class LoginComponent implements OnInit {
    user: User;
    ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    }

}

isLoggingIn = true;
@ViewChild("container") container: ElementRef;

// constructor(private userService: UserService) {
//     this.user = new User();
// }

constructor(private , router: Router, private , userService ,: UserService, private ,page: Page)
{
    router: Router, private
    userService: UserService
}
{
    submit()
    {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    login()
    {
        this.userService.login(this.user)
            .subscribe(
                () => this.router.navigate(["/list"]),
                (error) => alert("Unfortunately we could not find your account.")
            );
    }
    signUp()
    {
        this.userService.register(this.user)
            .subscribe(
                () => {
                    alert("Your account was successfully created.");
                    this.toggleDisplay();
                },
                () => alert("Unfortunately we were unable to create your account.")
            );
    }
    toggleDisplay()
    {
        this.isLoggingIn = !this.isLoggingIn;
        let container = <View>this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
            duration: 200
        });
    }
}