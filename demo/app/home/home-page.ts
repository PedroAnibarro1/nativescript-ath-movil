
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { HomeViewModel } from "./home-view-model";
import { ATHMovil, AMEnvironment, AMPaymentItem, AMPayment } from 'nativescript-ath-movil';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    page.bindingContext = new HomeViewModel();

    console.log("Configure ATH Movil");
    ATHMovil.configureFor(AMEnvironment.development, "96f07478a9341410bd6419aad3f8e26f9c838a15", "athm-checkout");
    let testItem = new AMPaymentItem("Latte", "Cafe doble espresso con leche", 1, 2.0, "Test item");
    let testPayment = new AMPayment(testItem.price, testItem.price, 0, "Meta test", "Meta test 2", [testItem]);
    ATHMovil.checkout(testPayment);

}
