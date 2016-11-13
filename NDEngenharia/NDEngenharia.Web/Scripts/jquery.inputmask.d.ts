interface StartEnd {
    start: string;
    end: string;
}

interface JQueryInputMaskOptions {
    placeholder?: string;
    optionalmarker?: StartEnd;
    quantifiermarker?: StartEnd;
    groupmarker?: StartEnd;
    alternatormarker?: string;
    escapeChar?: string;
    mask?: string;
    //mask?: () => string;
    oncomplete?: (value?: any) => void; //executes when the mask is complete
    onincomplete?: () => void; //executes when the mask is incomplete and focus is lost
    oncleared?: () => void; //executes when the mask is cleared

    repeat?: number; //repetitions of the mask: * ~ forever, otherwise specify an integer
    greedy?: boolean; //true: allocated buffer for the mask and repetitions - false: allocate only if needed
    autoUnmask?: boolean; //automatically unmask when retrieving the value with $.fn.val or value if the browser supports __lookupGetter__ or getOwnPropertyDescriptor
    removeMaskOnSubmit?: boolean; //remove the mask before submitting the form.
    clearMaskOnLostFocus?: boolean;
    insertMode?: boolean; //insert the input or overwrite the input
    clearIncomplete?: boolean; //clear the incomplete input on blur
    aliases?: {}; //aliases definitions => see jquery.inputmask.extensions.js
    alias?: string;
    onKeyUp?: () => void; //callback to implement autocomplete on certain keys for example
    onKeyPress?: () => void; //callback to implement autocomplete on certain keys for example
    onKeyDown?: () => void; //callback to implement autocomplete on certain keys for example
    onBeforeMask?: (initialValue: string, opts: JQueryInputMaskOptions) => string; //executes before masking the initial value to allow preprocessing of the initial value.  args => initialValue, opts => return processedValue
    onBeforePaste?: (pastedValue: string, opts: JQueryInputMaskOptions) => string; //executes before masking the pasted value to allow preprocessing of the pasted value.  args => pastedValue, opts => return processedValue
    onUnMask?: (maskedValue: string, unmaskedValue: string, opts: JQueryInputMaskOptions) => void;//executes after unmasking to allow postprocessing of the unmaskedvalue.  args => maskedValue, unmaskedValue, opts
    showMaskOnFocus?: boolean; //show the mask-placeholder when the input has focus
    showMaskOnHover?: boolean; //show the mask-placeholder when hovering the empty input
    onKeyValidation?: () => void; //executes on every key-press with the result of isValid. Params: result, opts
    skipOptionalPartCharacter?: string; //a character which can be used to skip an optional part of a mask
    showTooltip?: boolean; //show the activemask as tooltip
    numericInput?: boolean; //numericInput input direction style (input shifts to the left while holding the caret position)
    rightAlign?: boolean; //align to the right
    undoOnEscape?: boolean; //pressing escape reverts the value to the value before focus
    //numeric basic properties
    radixPoint?: string; //".", // | ","
    radixFocus?: boolean; //position caret to radixpoint on initial click
    //numeric basic properties
    nojumps?: boolean; //do not jump over fixed parts in the mask
    nojumpsThreshold?: number; //start nojumps as of
    keepStatic?: boolean; //try to keep the mask static while typing. Decisions to alter the mask will be posponed if possible - undefined see auto selection for multi masks
    definitions?: JQueryInputMaskDefinition;
    //specify keyCodes which should not be considered in the keypress event, otherwise the preventDefault will stop their default behavior especially in FF
    ignorables?: number[];
    isComplete?: (buffer: string, opts: JQueryInputMaskOptions) => boolean; //override for isComplete - args => buffer, opts - return true || false
    postProcessOnBlur?: (tmpBuffer, opts: JQueryInputMaskOptions) => void; //do some postprocessing of the value on the blur event, args => tmpBuffer, opts
    keyCode?: InputMaskKeyCodes;
    masksCache?: {};
    escapeRegex?: (str: string) => string;
    format?: (value, options, metadata) => any;
    isValid?: (value: string, options: JQueryInputMaskOptions) => boolean;
    regex?: string;
    showToolTip?: boolean;
    numeric?: boolean;
    rightAlignNumerics?: boolean;
}

interface InputMaskKeyCodes {

    ALT: number;
    BACKSPACE: number;
    CAPS_LOCK: number;
    COMMA: number;
    COMMAND: number;
    COMMAND_LEFT: number;
    COMMAND_RIGHT: number;
    CONTROL: number;
    DELETE: number;
    DOWN: number;
    END: number;
    ENTER: number;
    ESCAPE: number;
    HOME: number;
    INSERT: number;
    LEFT: number;
    MENU: number;
    NUMPAD_ADD: number;
    NUMPAD_DECIMAL: number;
    NUMPAD_DIVIDE: number;
    NUMPAD_ENTER: number;
    NUMPAD_MULTIPLY: number;
    NUMPAD_SUBTRACT: number;
    PAGE_DOWN: number;
    PAGE_UP: number;
    PERIOD: number;
    RIGHT: number;
    SHIFT: number;
    SPACE: number;
    TAB: number;
    UP: number;
    WINDOWS: number;
}

interface inputMaskStatic {
    defaults: inputMaskDefaults;
    isValid: (value: string, options: inputMaskStaticDefaults) => boolean;
    format: (value: string, options: inputMaskStaticDefaults) => boolean;
}

interface inputMaskStaticDefaults {
    alias: string;
}

interface inputMaskDefaults {
    aliases;
    definitions;
}

interface JQueryStatic {
    inputmask: inputMaskStatic;
}

interface JQuery {
    inputmask(action?: string): any;
    inputmask(options?: JQueryInputMaskOptions): JQuery;
    inputmask(mask?: string, options?: JQueryInputMaskOptions): JQuery;
}