/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export class BuildConfig {
						public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.BuildConfig>;
						public static DEBUG: boolean;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export class OpenATHM {
						public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.OpenATHM>;
						public constructor();
						public static validateData(param0: com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export class PayButton {
						public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.PayButton>;
						public setLanguage(param0: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage): void;
						public constructor(param0: globalAndroid.content.Context);
						public onDraw(param0: globalAndroid.graphics.Canvas): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setTheme(param0: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
					export module PayButton {
						export class ButtonLanguage {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage>;
							public static EN: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage;
							public static ES: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage;
							public static DEFAULT: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage;
							public static valueOf(param0: string): com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage;
							public static values(): native.Array<com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonLanguage>;
						}
						export class ButtonTheme {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme>;
							public static ORIGINAL: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme;
							public static LIGHT: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme;
							public static DARK: com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme;
							public static valueOf(param0: string): com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme;
							public static values(): native.Array<com.evertecinc.athmovil.sdk.checkout.PayButton.ButtonTheme>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export class PaymentResponse {
						public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.PaymentResponse>;
						public constructor();
						public static validatePaymentResponse(param0: globalAndroid.content.Intent, param1: com.evertecinc.athmovil.sdk.checkout.interfaces.PaymentResponseListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module exceptions {
						export class InvalidPaymentTotalAmountException {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.exceptions.InvalidPaymentTotalAmountException>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module exceptions {
						export class InvalidPublicTokenException {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.exceptions.InvalidPublicTokenException>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module exceptions {
						export class NullATHMPaymentObjectException {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.exceptions.NullATHMPaymentObjectException>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module exceptions {
						export class NullApplicationContextException {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.exceptions.NullApplicationContextException>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module exceptions {
						export class NullCartReferenceIdException {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.exceptions.NullCartReferenceIdException>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module interfaces {
						export class PaymentResponseListener {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.interfaces.PaymentResponseListener>;
							/**
							 * Constructs a new instance of the com.evertecinc.athmovil.sdk.checkout.interfaces.PaymentResponseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCompletedPayment(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.lang.Double, param4: string, param5: string, param6: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
								onCancelledPayment(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.lang.Double, param4: string, param5: string, param6: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
								onExpiredPayment(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.lang.Double, param4: string, param5: string, param6: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
							});
							public constructor();
							public onCompletedPayment(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.lang.Double, param4: string, param5: string, param6: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
							public onCancelledPayment(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.lang.Double, param4: string, param5: string, param6: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
							public onExpiredPayment(param0: string, param1: java.lang.Double, param2: java.lang.Double, param3: java.lang.Double, param4: string, param5: string, param6: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module objects {
						export class ATHMPayment {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment>;
							public getTimeout(): number;
							public setTax(param0: number): void;
							public setMetadata2(param0: string): void;
							public getPublicToken(): string;
							public getContext(): globalAndroid.content.Context;
							public setMetadata1(param0: string): void;
							public getSubtotal(): number;
							public getMetadata1(): string;
							public getTotal(): number;
							public setBuildType(param0: string): void;
							public setSubtotal(param0: number): void;
							public getBuildType(): string;
							public setPublicToken(param0: string): void;
							public setTotal(param0: number): void;
							public setTimeout(param0: number): void;
							public getItems(): java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>;
							public getMetadata2(): string;
							public getCallbackSchema(): string;
							public setCallbackSchema(param0: string): void;
							public constructor(param0: globalAndroid.content.Context);
							public getTax(): number;
							public setItems(param0: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module objects {
						export class Items {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.objects.Items>;
							public getDesc(): string;
							public getQuantity(): java.lang.Long;
							public getName(): string;
							public getPrice(): java.lang.Double;
							public constructor(param0: string, param1: string, param2: java.lang.Double, param3: java.lang.Long, param4: string);
							public getMetadata(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module objects {
						export class PaymentReturnedData {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.objects.PaymentReturnedData>;
							public constructor();
							public setTax(param0: number): void;
							public setMetadata2(param0: string): void;
							public setMetadata1(param0: string): void;
							public hashCode(): number;
							public getSubtotal(): number;
							public setItemsSelectedList(param0: java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>): void;
							public getMetadata1(): string;
							public getTotal(): number;
							public setSubtotal(param0: number): void;
							public getItemsSelectedList(): java.util.ArrayList<com.evertecinc.athmovil.sdk.checkout.objects.Items>;
							public setStatus(param0: string): void;
							public setTotal(param0: number): void;
							public getMetadata2(): string;
							public setReferenceNumber(param0: string): void;
							public equals(param0: any): boolean;
							public getReferenceNumber(): string;
							public getStatus(): string;
							public getTax(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module utils {
						export class ConstantUtil {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.utils.ConstantUtil>;
							public static ATH_MOVIL_ID: string;
							public static ATH_MOVIL_REQUIRED_VERSION_CODE: number;
							public static ATH_MOVIL_MARKET_URL: string;
							public static APP_BUNDLE_ID_KEY: string;
							public static JSON_DATA_KEY: string;
							public static REFERENCE_NUMBER_KEY: string;
							public static PAYMENT_DURATION_TIME_KEY: string;
							public static MAX_TIMEOUT_SECONDS: number;
							public static MIN_TIMEOUT_SECONDS: number;
							public static MIN_TOTAL_AMOUNT: number;
							public static PAYMENT_JSON_PUBLIC_TOKEN_KEY: string;
							public static PAYMENT_JSON_SUBTOTAL__KEY: string;
							public static PAYMENT_JSON_TAX_KEY: string;
							public static PAYMENT_JSON_TOTAL_KEY: string;
							public static PAYMENT_JSON_SCHEMA_KEY: string;
							public static PAYMENT_JSON_METADATA_1: string;
							public static PAYMENT_JSON_METADATA_2: string;
							public static PAYMENT_JSON_ITEM_NAME_KEY: string;
							public static PAYMENT_JSON_ITEM_DESCRIPTION_KEY: string;
							public static PAYMENT_JSON_ITEM_PRICE_KEY: string;
							public static PAYMENT_JSON_ITEM_QUANTITY_KEY: string;
							public static PAYMENT_JASON_ITEM_METADATA_KEY: string;
							public static PAYMENT_JSON_ITEM_LIST_KEY: string;
							public static RETURNED_JSON_KEY: string;
							public static RETURNED_JSON_STATUS_KEY: string;
							public static RETURNED_JSON_TOTAL_KEY: string;
							public static RETURNED_JSON_SUBTOTAL_KEY: string;
							public static RETURNED_JSON_TAX_KEY: string;
							public static RETURNED_JSON_METADATA1_KEY: string;
							public static RETURNED_JSON_METADATA2_KEY: string;
							public static RETURNED_JSON_ITEM_DESCRIPTION_KEY: string;
							public static TOKEN_FOR_SUCCESS: string;
							public static TOKEN_FOR_FAILURE: string;
							public static STATUS_SUCCESS: string;
							public static STATUS_CANCELED: string;
							public static STATUS_EXPIRED: string;
							public static REFERENCE_NUMBER: string;
							public static LOG_TAG: string;
							public static NULL_JSON_LOG_MESSAGE: string;
							public static NULL_ATHMPAYMENT_LOG_MESSAGE: string;
							public static NULL_CONTEXT_LOG_MESSAGE: string;
							public static NULL_PUBLICTOKEN_LOG_MESSAGE: string;
							public static TOTAL_ERROR_LOG_MESSAGE: string;
							public static CARTREFERENCEID_ERROR_LOG_MESSAGE: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module evertecinc {
		export module athmovil {
			export module sdk {
				export module checkout {
					export module utils {
						export class JsonUtil {
							public static class: java.lang.Class<com.evertecinc.athmovil.sdk.checkout.utils.JsonUtil>;
							public constructor();
							public static returnedJson(param0: com.evertecinc.athmovil.sdk.checkout.objects.PaymentReturnedData): string;
							public static toJson(param0: com.evertecinc.athmovil.sdk.checkout.objects.ATHMPayment): string;
						}
					}
				}
			}
		}
	}
}

//Generics information:

