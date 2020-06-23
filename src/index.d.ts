export declare class Common extends Observable {
  constructor()
}

export declare class ATHMovil extends Common {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here

  static configureFor(environment: AMDevEnvironment, publicToken: string, callbackURL: string): boolean
  static handleIncomingURL(url: NSURL): boolean
  static checkout(payment: AMPayment): boolean

}


export declare enum AMEnvironment {
  development,
  production
}

export declare enum AMButtonStyle {
  original,
  light,
  dark
}

export declare enum AMLanguage {
  english,
  spanish
}

export declare class AMPaymentItem {
  name: string;
  description: string;
  quantity: number;
  price: number;
  metadata: string;

  constructor(name: string,
    description: string,
    quantity: number,
    price: number,
    metadata: string)

}

export declare class AMPayment {
  total: number;
  subtotal: number;
  tax: number;
  metadata1: string;
  metadata2: string;
  items: AMPaymentItem[];

  constructor(total: number,
    subtotal: number,
    tax: number,
    metadata1: string,
    metadata2: string,
    items: AMPaymentItem[])

}

export declare interface AMTransactionListener {
  onCompletePayment(referenceNumber: string): void;
  onCancelledPayment(referenceNumber: string): void;
  onExpiredPayment(referenceNumber: string): void;
}

export class AMTransactionSession {
  private delegate: AMDelegate;
  constructor(listener: AMTransactionListener);
}