// Export Toast component with a different name to avoid conflict
export { Toast as ToastComponent, ToastContainer } from "./Toast";
export type {
  ToastProps,
  ToastVariant,
  ToastPosition,
  ToastContainerProps,
} from "./Toast";
// Export static API as Toast (primary export)
export { ToastStatic as Toast } from "./ToastStatic";
export type { ToastOptions } from "./ToastStatic";
export { ToastContainerGlobal } from "./ToastContainerGlobal";

