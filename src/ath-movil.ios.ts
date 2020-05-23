import { Common, AMButtonStyle, AMLanguage, AMEnvironment as AMDevEnvironment, AMPaymentItem, AMPayment, AMTransactionListener } from './ath-movil.common';
export * from './ath-movil.common';

export class ATHMovil extends Common {

    static configureFor(environment: AMDevEnvironment, publicToken: string, callbackURL: string) {
        let amEnvironment = environment == AMDevEnvironment.development ? AMEnvironment.Development : AMEnvironment.Production;
        try {
            ATHMCheckout.shared.configureForWithAndURLError(amEnvironment, publicToken, callbackURL);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }         
    }

    static handleIncomingURL(url: NSURL): boolean {
        try {
            ATHMCheckout.shared.handleIncomingURLWithUrlError(url);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }    
    }

    static checkout(payment: AMPayment) {

        let amPayment = new ATHMPayment({
            total: payment.total,
            subtotal: payment.subtotal,
            tax: payment.tax,
            metadata1: payment.metadata1,
            metadata2: payment.metadata2,
            items: this.getNativeItemsFrom(payment.items)
        })

        try {
            ATHMCheckout.shared.checkoutWithError(amPayment);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }    
    }   

    private static getNativeItemsFrom(items: AMPaymentItem[]): ATHMPaymentItem[] {

        let nativeItems: ATHMPaymentItem[] = [];
        items.forEach(item => {
            let nativeItem = new ATHMPaymentItem({
                desc: item.description,
                name: item.name,
                priceNumber: item.price,
                quantity: item.quantity,
                metadata: item.metadata
            })
            nativeItems.push(nativeItem);
        });

        return nativeItems;

    }

}

export class AMTransactionSession {

    private delegate: AMDelegate;

    constructor(listener: AMTransactionListener) {

        this.delegate = AMDelegate.create(this, listener);
        ATHMCheckout.shared.delegate = this.delegate;

    }

}


class AMDelegate extends NSObject implements AMCheckoutDelegate {
    static ObjCProtocols = [AMCheckoutDelegate];

    private listener: AMTransactionListener;
    private parent: AMTransactionSession;

    static create(parent: AMTransactionSession, listener: AMTransactionListener): AMDelegate {
        let self = <AMDelegate>super.new();
        self.listener = listener;
        self.parent = parent;
        return self;
    }

    onCompletedPaymentWithReferenceNumberTotalTaxSubtotalMetadata1Metadata2Items(referenceNumber: string, total: number, tax: number, subtotal: number, metadata1: string, metadata2: string, items: NSArray<ATHMPaymentItem> | ATHMPaymentItem[]) {
        console.log("Completed transaction ATH MOVIL");
        this.listener.onCompletePayment();
    }

    onCancelledPaymentWithReferenceNumberTotalTaxSubtotalMetadata1Metadata2Items(referenceNumber: string, total: number, tax: number, subtotal: number, metadata1: string, metadata2: string, items: NSArray<ATHMPaymentItem> | ATHMPaymentItem[]): void {
        console.log("Cancelled transaction ATH MOVIL");
        this.listener.onCancelledPayment();
    }

    onExpiredPaymentWithReferenceNumberTotalTaxSubtotalMetadata1Metadata2Items(referenceNumber: string, total: number, tax: number, subtotal: number, metadata1: string, metadata2: string, items: NSArray<ATHMPaymentItem> | ATHMPaymentItem[]): void {
        console.log("Expired transaction ATH MOVIL");
        this.listener.onExpiredPayment();
    }

}


// export class ATHMovilButton {
//     native: any;
//     style: AMButtonStyle;
//     language: AMLanguage;

//     constructor(style: AMButtonStyle = AMButtonStyle.original, language: AMLanguage = AMLanguage.english) {
//         this.style = style;
//         this.language = language;

//         this.native = ATHMCheckout.shared.getCheckoutButtonWithTargetAction(topmost, "");

//     }
// }
