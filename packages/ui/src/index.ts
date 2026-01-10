"use client";

// Import all component CSS - this will be extracted by postcss
import './Button/Button.css'
import './Loader/Loader.css'
import './Radio/Radio.css'
import './Text/Text.css'
import './Box/Box.css'
import './Flex/Flex.css'
import './Modal/Modal.css'
import './FormControl/FormControl.css'
import './Input/Input.css'
import './Textarea/Textarea.css'
import './Select/Select.css'
import './Link/Link.css'
import './Grid/Grid.css'
import './IconButton/IconButton.css'
import './CircularProgress/CircularProgress.css'
import './Tooltip/Tooltip.css'
import './Toast/Toast.css'
import './Popover/Popover.css'
import './Tabs/Tabs.css'
import './Accordion/Accordion.css'
import './Theme/theme.css'

export { Button } from './Button'
export type { ButtonProps } from './Button'
export { Loader } from './Loader'
export type { LoaderProps } from './Loader'
export { Radio, RadioGroup } from './Radio'
export type { RadioProps, RadioGroupProps } from './Radio'
export { Text } from './Text'
export type { TextProps, TextSize, TextWeight, TextColor, TextAlign } from './Text'
export {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from './Modal'
export type {
  ModalProps,
  ModalOverlayProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalCloseButtonProps,
} from './Modal'
export { Box } from './Box'
export type { BoxProps } from './Box'
export { Flex } from './Flex'
export type { FlexProps } from './Flex'

// Form components
export { FormControl, FormLabel, FormErrorMessage } from './FormControl'
export type { FormControlProps, FormLabelProps, FormErrorMessageProps } from './FormControl'
export { Input } from './Input'
export type { InputProps } from './Input'
export { Textarea } from './Textarea'
export type { TextareaProps } from './Textarea'
export { Select } from './Select'
export type { SelectProps, SelectOption } from './Select'

// Layout components
export { Grid } from './Grid'
export type { GridProps } from './Grid'
export { Link } from './Link'
export type { LinkProps } from './Link'

// Interactive components
export { IconButton } from './IconButton'
export type { IconButtonProps } from './IconButton'
export { CircularProgress, CircularProgressLabel } from './CircularProgress'
export type { CircularProgressProps, CircularProgressLabelProps } from './CircularProgress'
export { Tooltip } from './Tooltip'
export type { TooltipProps } from './Tooltip'
export {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
} from './Popover'
export type {
  PopoverProps,
  PopoverPlacement,
  PopoverContentProps,
  PopoverHeaderProps,
  PopoverBodyProps,
  PopoverFooterProps,
  PopoverCloseButtonProps,
} from './Popover'
export { Toast, ToastComponent, ToastContainer, ToastContainerGlobal } from './Toast'
export type { ToastProps, ToastVariant, ToastPosition, ToastContainerProps, ToastOptions } from './Toast'
export { Tabs, TabList, Tab, TabPanels, TabPanel } from './Tabs'
export type { TabsProps, TabListProps, TabProps, TabPanelsProps, TabPanelProps } from './Tabs'
export { Accordion, AccordionItem, AccordionButton, AccordionPanel } from './Accordion'
export type { AccordionProps, AccordionItemProps, AccordionButtonProps, AccordionPanelProps } from './Accordion'

// Hooks
export { useDisclosure } from './hooks'
export type { UseDisclosureReturn } from './hooks'
export { useOutsideClick } from './hooks'
export type { UseOutsideClickOptions } from './hooks'

// Theme exports
export { ThemeProvider, useTheme, ThemeToggle, ThemeScript } from './Theme'
export type { Theme } from './Theme/ThemeProvider'
