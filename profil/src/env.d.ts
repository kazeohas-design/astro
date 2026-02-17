declare namespace App {
  interface Locals {
    token: string | null;
    level: string | null;
  }
}

declare global {
  interface Window {
    logout?: (event?: Event) => void;
    tambah?: () => void;
  }

  const iziToast: any;
}
declare const $: JQueryStatic;

export {};
