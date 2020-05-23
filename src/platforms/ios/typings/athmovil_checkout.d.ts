
declare const enum AMCheckoutButtonStyle {

	Original = 0,

	Light = 1,

	Dark = 2
}

interface AMCheckoutDelegate extends NSObjectProtocol {

	onCancelledPaymentWithReferenceNumberTotalTaxSubtotalMetadata1Metadata2Items(referenceNumber: string, total: number, tax: number, subtotal: number, metadata1: string, metadata2: string, items: NSArray<ATHMPaymentItem> | ATHMPaymentItem[]): void;

	onCompletedPaymentWithReferenceNumberTotalTaxSubtotalMetadata1Metadata2Items(referenceNumber: string, total: number, tax: number, subtotal: number, metadata1: string, metadata2: string, items: NSArray<ATHMPaymentItem> | ATHMPaymentItem[]): void;

	onExpiredPaymentWithReferenceNumberTotalTaxSubtotalMetadata1Metadata2Items(referenceNumber: string, total: number, tax: number, subtotal: number, metadata1: string, metadata2: string, items: NSArray<ATHMPaymentItem> | ATHMPaymentItem[]): void;
}
declare var AMCheckoutDelegate: {

	prototype: AMCheckoutDelegate;
};

declare const enum AMEnvironment {

	Development = 0,

	Production = 1
}

declare const enum AMLanguage {

	En = 0,

	Es = 1
}

declare class ATHMCheckout extends NSObject {

	static alloc(): ATHMCheckout; // inherited from NSObject

	static new(): ATHMCheckout; // inherited from NSObject

	delegate: AMCheckoutDelegate;

	timeout: number;

	static readonly shared: ATHMCheckout;

	checkoutWithError(payment: ATHMPayment): boolean;

	configureForWithAndURLError(env: AMEnvironment, publicToken: string, callbackURL: string): boolean;

	getCheckoutButtonWithTargetAction(target: any, action: string): ATHMCheckoutButton;

	handleIncomingURLWithUrlError(url: NSURL): boolean;
}

declare class ATHMCheckoutButton extends UIButton {

	static alloc(): ATHMCheckoutButton; // inherited from NSObject

	static appearance(): ATHMCheckoutButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ATHMCheckoutButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ATHMCheckoutButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ATHMCheckoutButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ATHMCheckoutButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ATHMCheckoutButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): ATHMCheckoutButton; // inherited from UIButton

	static new(): ATHMCheckoutButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): ATHMCheckoutButton; // inherited from UIButton

	lang: AMLanguage;

	style: AMCheckoutButtonStyle;

	fitToSuperview(): void;
}

declare class ATHMPayment extends NSObject {

	static alloc(): ATHMPayment; // inherited from NSObject

	static new(): ATHMPayment; // inherited from NSObject

	items: NSArray<ATHMPaymentItem>;

	metadata1: string;

	metadata2: string;

	subtotal: number;

	tax: number;

	readonly toDictionary: NSDictionary<string, any>;

	total: number;

	constructor(o: { total: number; subtotal: number; tax: number; metadata1: string; metadata2: string; items: NSArray<ATHMPaymentItem> | ATHMPaymentItem[]; });

	initWithTotalSubtotalTaxMetadata1Metadata2ItemsError(total: number, subtotal: number, tax: number, metadata1: string, metadata2: string, items: NSArray<ATHMPaymentItem> | ATHMPaymentItem[]): this;
}

declare class ATHMPaymentItem extends NSObject {

	static alloc(): ATHMPaymentItem; // inherited from NSObject

	static new(): ATHMPaymentItem; // inherited from NSObject

	readonly desc: string;

	metadata: string;

	readonly name: string;

	price: number;

	quantity: number;

	constructor(o: { desc: string; name: string; priceNumber: number; quantity: number; metadata: string; });

	initWithDescNamePriceNumberQuantityMetadataError(desc: string, name: string, priceNumber: number, quantity: number, metadata: string): this;
}

declare var athmovil_checkoutVersionNumber: number;

declare var athmovil_checkoutVersionString: interop.Reference<number>;
