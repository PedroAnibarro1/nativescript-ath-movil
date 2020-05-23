import { AMButtonBase } from "./athmovil-button.common";
export * from "./athmovil-button.common";
import { topmost } from 'tns-core-modules/ui/frame';

// class that handles all native 'tap' callbacks
class TapHandler extends NSObject {

    public tap(nativeButton: UIButton, nativeEvent: _UIEvent) {
        // Gets the owner from the nativeView.
        const owner: AMButton = (<any>nativeButton).owner;
        if (owner) {
            owner.notify({ eventName: AMButtonBase.tapEvent, object: owner });
        }
    }

    public static ObjCExposedMethods = {
        "tap": { returns: interop.types.void, params: [interop.types.id, interop.types.id] }
    };
}

const handler = TapHandler.new();

export class AMButton extends AMButtonBase {

    // added for TypeScript intellisense.
    nativeView: UIButton;

    /**
     * Creates new native button.
     */
    public createNativeView(): Object {
        // Create new instance
        const button = ATHMCheckout.shared.getCheckoutButtonWithTargetAction(topmost, "tap");

        // Set the handler as callback function.
        button.addTargetActionForControlEvents(handler, "tap", UIControlEvents.TouchUpInside);

        return button;
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    /**
     * Clean up references to the native view and resets nativeView to its original state.
     * If you have changed nativeView in some other way except through setNative callbacks
     * you have a chance here to revert it back to its original state 
     * so that it could be reused later.
     */
    disposeNativeView(): void {
        // Remove reference from native listener to this instance.
        (<any>this.nativeView).owner = null;

        // If you want to recycle nativeView and have modified the nativeView 
        // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
        // you have to reset it to its initial state here.
        super.disposeNativeView();
    }

}