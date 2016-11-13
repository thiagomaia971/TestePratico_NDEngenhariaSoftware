import { RuleViolation } from "./RuleViolation";

export class RuleViolationBuilder {

    public static build(ruleViolations: Array<RuleViolation>): string {
        let message: string = "";

        message += `<div class='alert alert-danger'><ul>`;
        for (let ruleViolation of ruleViolations) {
            message += `<li>${ruleViolation.Message}</li>`;
        }
        message += `</ul></div>`;

        return message;
    }

}