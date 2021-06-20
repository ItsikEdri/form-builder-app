export interface IForm extends Document {
    createdBy: String,
    updatedBy: String,
    name: String,
    hostingApps: [],
    category: String,
    description: String,
    fields: [{
        name: String,
        type: String,
        order: String,
        mandatory: Boolean,
        attributes: [{
            key: String,
            value: String
        }],
        style: [{
            key: String,
            value: String
        }],
        validation: [{
            name: String;
            regex: String;
        }]
    }],
}


