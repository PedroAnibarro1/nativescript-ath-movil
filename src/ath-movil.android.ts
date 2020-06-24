import { Common, AMButtonStyle, AMLanguage, AMEnvironment as AMDevEnvironment, AMPaymentItem, AMPayment, AMTransactionListener } from './ath-movil.common';
import { android as androidApp } from "tns-core-modules/application";
export * from './ath-movil.common';

type ATHMItem = com.evertecinc.athmovil.sdk.checkout.objects.Items;

export class ATHMovil extends Common {

    private athmPayment: com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment;
    private static INSTANCE: ATHMovil = null;
 
    // other instance variables can be here
    private publicToken: string;
    private callBackURL: string;
    public delegate: AMTransactionListener;
     
    private constructor() {
        super();
    };

    public static getInstance(): ATHMovil {
        if (this.INSTANCE == null) {
            this.INSTANCE = new ATHMovil();
        }
        return this.INSTANCE;
    }

    static configureFor(environment: AMDevEnvironment, publicToken: string, callbackURL: string) {
        
        let instance = this.getInstance();
        instance.athmPayment = new com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment(androidApp.context);
        instance.athmPayment.setPublicToken(publicToken);
        instance.athmPayment.setCallbackSchema(callbackURL);
               
    }

    // static handleIncomingURL(url: NSURL): boolean {
    //     try {
    //         ATHMCheckout.shared.handleIncomingURLWithUrlError(url);
    //         return true;
    //     } catch (error) {
    //         console.log(error);
    //         return false;
    //     }    
    // }

    static checkout(payment: AMPayment) {

        let instance = this.getInstance();
        instance.athmPayment.setTotal(payment.total);
        instance.athmPayment.setMetadata1(payment.metadata1);
        instance.athmPayment.setMetadata2(payment.metadata2);
        instance.athmPayment.setItems(this.getNativeItemsFrom(payment.items));

        try {
            com.evertecinc.athmovil.sdk.checkout.OpenATHM.validateData(instance.athmPayment)
        } catch (error) {
            console.log(error);
        }    
    }   

    private static getNativeItemsFrom(items: AMPaymentItem[]): java.util.ArrayList<ATHMItem> {

        let nativeItems: java.util.ArrayList<ATHMItem> = new java.util.ArrayList<ATHMItem>();
        items.forEach(item => {
            let nativeItem = new com.evertecinc.athmovil.sdk.checkout.objects.Items(
                item.name,
                item.description,
                new java.lang.Double(item.price),
                new java.lang.Long(item.quantity),
                item.metadata
            )
            nativeItems.add(nativeItem);
        });

        return nativeItems;

        

    }

}

export class AMTransactionSession {

    constructor(listener: AMTransactionListener) {
        ATHMovil.getInstance().delegate = listener;
    }

}

class AMDelegateActivity extends androidx.appcompat.app.AppCompatActivity implements com.evertecinc.athmovil.sdk.checkout.interfaces.PaymentResponseListener, android.view.View.OnClickListener {

    private delegate: AMTransactionListener = ATHMovil.getInstance().delegate;

    public onCompletedPayment(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.lang.Double, param4: string, param5: string, param6: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void {
        this.delegate.onCompletePayment(param0);
    }
    public onCancelledPayment(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.lang.Double, param4: string, param5: string, param6: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void {
        this.delegate.onCancelledPayment(param0);
    }
    public onExpiredPayment(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.lang.Double, param4: string, param5: string, param6: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void {
        this.delegate.onExpiredPayment(param0);
    }
    public onClick(param0: globalAndroid.view.View): void {
        // throw new Error("Method not implemented.");
        // Do nothing
    }
}
