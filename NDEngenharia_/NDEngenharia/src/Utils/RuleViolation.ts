export class RuleViolation {
    public PropertyExcepted: string;
    public Message: string;

    constructor(propertyExcepted: string, message: string) {
        this.PropertyExcepted = propertyExcepted;
        this.Message = message;
    }
}