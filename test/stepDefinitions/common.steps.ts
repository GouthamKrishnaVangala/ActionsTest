import {Given} from "cucumber"; 
import General from "../pages/common"


Given(/^I am on the codetasty login page "([^"]*)"$/,
    function iAmOnTheStoreHomepage(homepage:string){
        General.iAmOnTheStoreLoginPage(homepage); 
    });
