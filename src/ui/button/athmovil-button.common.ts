import { AMButton as ButtonDefinition } from "./athmovil-button";
import { View } from "tns-core-modules/ui/core/view";

export abstract class AMButtonBase extends View implements ButtonDefinition {
    public static tapEvent = "tap";
    text: string;    
    recycleNativeView: boolean;
}

// If set to true - nativeView will be kept in memory and reused when some other instance 
// of type MyButtonBase needs nativeView. Set to true only if you are sure that you can reset the
// nativeView to its initial state. When true will improve application performance. 
AMButtonBase.prototype.recycleNativeView = true; 